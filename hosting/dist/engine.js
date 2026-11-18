/* Shared, deterministic rules for the local omnichannel prototype. */
const CSEngine = (() => {
  const active = ticket => !["Selesai", "Ditutup", "Belum ditugaskan"].includes(ticket.status);
  const dateParts = (value, timezone = "Asia/Jakarta") => {
    const parts = new Intl.DateTimeFormat("en-GB", {timeZone: timezone, year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hourCycle:"h23"}).formatToParts(new Date(value));
    const part = key => parts.find(item => item.type === key)?.value;
    const date = `${part("year")}-${part("month")}-${part("day")}`;
    return {date, minute:Number(part("hour"))*60+Number(part("minute")), day:new Date(`${date}T12:00:00Z`).getUTCDay()};
  };
  const minutes = time => {const [hour,minute] = String(time||"00:00").split(":").map(Number);return hour*60+minute;};
  function businessState(value, settings) {
    const local = dateParts(value,settings.timezone);
    const holiday = (settings.holidays||[]).find(item => local.date >= item.start && local.date <= item.end);
    if(holiday)return {open:false,reason:"holiday",holiday};
    const hours=settings.officeHours?.[local.day];
    return hours?.enabled && local.minute>=minutes(hours.in) && local.minute<minutes(hours.out) ? {open:true,reason:"open"} : {open:false,reason:"outside"};
  }
  function businessMs(start,end,settings,pauses=[]) {
    let cursor=new Date(start).getTime(),last=new Date(end).getTime(),total=0;
    if(!Number.isFinite(cursor)||!Number.isFinite(last)||last<=cursor)return 0;
    while(cursor<last){
      const next=Math.min(last,Math.floor(cursor/60000)*60000+60000);
      if(businessState(cursor,settings).open&&!pauses.some(item=>cursor>=new Date(item.start).getTime()&&cursor<new Date(item.end||end).getTime()))total+=next-cursor;
      cursor=next;
    }
    return total;
  }
  function agentLoad(agent,tickets){return tickets.filter(ticket=>ticket.agent===agent.name&&active(ticket)).length;}
  function chooseAgent(tickets,agents,settings,preferred) {
    const max=Math.max(1,Number(settings.maxOngoingChats)||5);
    const pool=agents.filter(agent=>agent.online&&["Agent","Supervisor"].includes(agent.role)&&agentLoad(agent,tickets)<max);
    if(!pool.length)return null;
    if(preferred){const previous=pool.find(agent=>agent.name===preferred);if(previous)return previous;}
    if(settings.routingMethod==="manual")return null;
    if(settings.routingMethod==="round-robin"){
      const index=(Number(settings.routingCursor)||0)%pool.length;
      settings.routingCursor=(Number(settings.routingCursor)||0)+1;
      return pool[index];
    }
    return pool.sort((a,b)=>agentLoad(a,tickets)-agentLoad(b,tickets)||a.name.localeCompare(b.name))[0];
  }
  function routeQueue(tickets,agents,settings,at=new Date()) {
    if(!businessState(at,settings).open || settings.routingMethod==="manual")return [];
    const assigned=[];
    const queue=tickets.filter(ticket=>ticket.status==="Belum ditugaskan").sort((a,b)=>new Date(a.created)-new Date(b.created));
    for(const ticket of queue){
      const agent=chooseAgent(tickets,agents,settings);
      if(!agent)break;
      ticket.agent=agent.name;ticket.status="Sedang ditangani";assigned.push({ticket,agent});
    }
    return assigned;
  }
  function metrics(ticket,settings,now=new Date()) {
    const start=ticket.created,first=ticket.firstAgentResponseAt,closed=ticket.resolvedAt;
    const end=closed||now;
    const pauses=settings.pausePendingSla?ticket.pendingIntervals||[]:[];
    const firstMs=businessMs(start,first||end,settings,pauses),resolutionMs=businessMs(start,end,settings,pauses);
    const frtTarget=Number(settings.frtMinutes||15)*60000,resolutionTarget=Number(settings.resolutionMinutes||30)*60000;
    return {firstMs,resolutionMs,firstStopped:Boolean(first),stopped:Boolean(closed),paused:!closed&&(ticket.status==="Menunggu pelanggan"&&settings.pausePendingSla||!businessState(now,settings).open),is_frt_breached:firstMs>frtTarget,is_resolution_breached:resolutionMs>resolutionTarget};
  }
  function surveyScores(surveys) {
    const sent=surveys.filter(item=>item.status!=="draft"),answered=sent.filter(item=>item.status==="answered"&&Number.isFinite(Number(item.score)));
    const type=id=>answered.filter(item=>item.type===id),csat=type("csat"),ces=type("ces"),nps=type("nps");
    const rate=(n,d)=>d?Number((n/d*100).toFixed(2)):null;
    return {sent:sent.length,answered:answered.length,responseRate:rate(answered.length,sent.length),csat:rate(csat.filter(item=>Number(item.score)>=4).length,csat.length),csatLow:rate(csat.filter(item=>Number(item.score)<=3).length,csat.length),ces:ces.length?Number((ces.reduce((sum,item)=>sum+Number(item.score),0)/ces.length).toFixed(2)):null,nps:nps.length?Number(((nps.filter(item=>item.score>=9).length-nps.filter(item=>item.score<=6).length)/nps.length*100).toFixed(2)):null};
  }
  return {businessState,businessMs,chooseAgent,routeQueue,metrics,surveyScores,dateParts};
})();
if(typeof module!=="undefined")module.exports=CSEngine;
