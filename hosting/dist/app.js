const KEY = "closepay-cs-demo-v2";
const seed = {
  tickets: [
    {id:"CP-20261116-0042", name:"Nadia Putri", phone:"6281234567890", userId:"USR-10482", child:"Alya Putri", school:"SD Harapan Bangsa", version:"PSP Mobile 2.4.1", channel:"PSP Mobile", segment:"Pelanggan", scope:"Luar", issue:"Saldo top up belum masuk", tag:"Pembayaran", status:"Sedang ditangani", agent:"Rafiu Sidqi", created:"2026-11-16T08:42:00+07:00", rating:0, csat:null, messages:[{by:"Pelanggan", text:"Selamat pagi, top up untuk Alya belum masuk.", at:"08.42", type:"customer"},{by:"Rafiu Sidqi", text:"Halo Ibu Nadia, saya bantu cek transaksi Alya ya.", at:"08.45", type:"agent"}], history:[{at:"08.42", text:"Chat masuk dari PSP Mobile. Dialokasikan ke Rafiu Sidqi."}]},
    {id:"CP-20261116-0041", name:"Budi Santoso", phone:"6289876543210", userId:"MRC-30218", child:"—", school:"SMP Nusantara", version:"Merchant Web 1.8", channel:"Merchant", segment:"Merchant", scope:"Dalam", issue:"QR kasir gagal dimuat", tag:"Kendala sistem", status:"Menunggu pelanggan", agent:"Anissa Febriani", created:"2026-11-16T07:55:00+07:00", rating:0, csat:null, messages:[{by:"Pelanggan",text:"QR di kasir kosong sejak pagi.",at:"07.55",type:"customer"},{by:"Anissa Febriani",text:"Mohon kirim tangkapan layar halaman kasir.",at:"08.12",type:"agent"}],history:[{at:"07.55",text:"Chat baru dari Merchant. Dialokasikan ke Anissa Febriani."}]},
    {id:"CP-20261115-0039", name:"Siti Rahma", phone:"6281122233344", userId:"ADM-00981", child:"Fajar Rahma", school:"SMA Cendekia", version:"PSP Admin 3.1", channel:"PSP Admin", segment:"Sekolah", scope:"Dalam", issue:"Akses laporan siswa terkunci", tag:"Akses akun", status:"Perlu follow up", agent:"Master CS", created:"2026-11-15T07:10:00+07:00", rating:0, csat:null, messages:[{by:"Pelanggan",text:"Saya tidak bisa membuka laporan Fajar.",at:"07.10",type:"customer"}],history:[{at:"07.10",text:"Chat baru dari PSP Admin."},{at:"07.10",text:"Lewat 1 × 24 jam. Masuk follow up Master CS."}]},
    {id:"CP-20261114-0034", name:"Dian Lestari", phone:"6281333444555", userId:"USR-10117", child:"Raka Lestari", school:"SD Pelita", version:"PSP Mobile 2.4.1", channel:"PSP Mobile", source:"Closepay", segment:"Pelanggan", scope:"Luar", issue:"Riwayat pembayaran tidak muncul", tag:"Komplain", status:"Selesai", agent:"Rafiu Sidqi", created:"2026-11-14T10:15:00+07:00", rating:5, csat:"Puas", messages:[{by:"Pelanggan",text:"Riwayat pembayaran Raka kosong.",at:"10.15",type:"customer"},{by:"Rafiu Sidqi",text:"Data sudah disinkronkan. Silakan cek kembali.",at:"10.30",type:"agent"}],history:[{at:"10.15",text:"Chat baru dari PSP Mobile."},{at:"10.30",text:"Percakapan selesai. Survei CSAT dikirim."}]},
    {id:"CP-20261110-0028", name:"Nadia Putri", phone:"6281234567890", userId:"USR-10482", child:"Alya Putri", school:"SD Harapan Bangsa", version:"PSP Mobile 2.4.1", channel:"PSP Mobile", segment:"Pelanggan", scope:"Luar", issue:"Bukti pembayaran belum tampil", tag:"Pembayaran", status:"Selesai", agent:"Rafiu Sidqi", created:"2026-11-10T09:12:00+07:00", rating:0, csat:null, messages:[{by:"Pelanggan",text:"Bukti pembayaran Alya belum muncul.",at:"09.12",type:"customer"},{by:"Rafiu Sidqi",text:"Bukti pembayaran sudah tersedia. Silakan cek kembali.",at:"09.28",type:"agent"}],history:[{at:"09.12",text:"Chat masuk dari PSP Mobile."},{at:"09.28",text:"Percakapan selesai. Menunggu penilaian."}]}
  ],
  customers:[
    {id:"USR-10482",name:"Nadia Putri",joined:"2026-11-08",segment:"Pelanggan",channel:"PSP Mobile",location:"Jakarta",deals:1},
    {id:"MRC-30218",name:"Budi Santoso",joined:"2026-10-21",segment:"Merchant",channel:"Merchant",location:"Bandung",deals:1},
    {id:"ADM-00981",name:"Siti Rahma",joined:"2026-08-05",segment:"Sekolah",channel:"PSP Admin",location:"Surabaya",deals:0},
    {id:"USR-10117",name:"Dian Lestari",joined:"2026-04-18",segment:"Pelanggan",channel:"PSP Mobile",location:"Jakarta",deals:1},
    {id:"USR-10012",name:"Arif Pratama",joined:"2026-01-12",segment:"Pelanggan",channel:"PSP Mobile",location:"Bekasi",deals:0},
    {id:"USR-10064",name:"Laras Wulandari",joined:"2026-03-09",segment:"Pelanggan",channel:"PSP Mobile",location:"Yogyakarta",deals:0},
    {id:"MRC-30091",name:"Rina Kurnia",joined:"2026-06-24",segment:"Merchant",channel:"Merchant",location:"Bandung",deals:1},
    {id:"ADM-00875",name:"Fajar Hidayat",joined:"2026-09-11",segment:"Sekolah",channel:"PSP Admin",location:"Semarang",deals:0}
  ],
  agents:[{name:"Rafiu Sidqi",role:"Agent",online:true},{name:"Anissa Febriani",role:"Agent",online:true},{name:"Dimas Pratama",role:"Agent",online:true},{name:"Maya Anggraini",role:"Admin biasa",online:true},{name:"Master CS",role:"Admin super",online:true}],
  transfers:[{id:"CP-20261115-0039",from:"Dimas Pratama",to:"Master CS",reason:"Lewat 1 × 24 jam",at:"15 Nov 2026, 07.10 WIB"}],
  templates:[{name:"Salam pembuka",category:"Umum",text:"Halo {nama}, saya dari layanan pelanggan Closepay. Saya bantu cek kendalanya ya."},{name:"Minta detail",category:"Kendala",text:"Mohon kirim ID pengguna, nama sekolah, dan tangkapan layar kendala agar kami bisa memeriksa lebih cepat."},{name:"Di luar jam kerja",category:"Otomatis",text:"Terima kasih sudah menghubungi Closepay. Pesan Anda tercatat. Tim kami akan membalas pada jam kerja berikutnya."},{name:"Tanggal merah",category:"Otomatis",text:"Terima kasih sudah menghubungi Closepay. Hari ini layanan terbatas karena tanggal merah. Pesan Anda tetap tercatat."}],
  tags:["Pembayaran","Kendala sistem","Akses akun","Komplain","Permintaan informasi"],
  accountUsers:[{id:"USR-0001",name:"Rafiu Sidqi",product:"Closepay",email:"rafiu@closepay.id",phone:"+62 812-3456-7890",role:"Owner",staffLevel:"Admin",status:"Active",lastSignIn:"17 Nov 2026 at 08:15"}],
  accountRoles:[{name:"Admin",description:"Akses penuh ke fitur yang diizinkan.",access:"Admin"},{name:"Supervisor",description:"Mengelola aktivitas dan tim.",access:"Supervisor"},{name:"Member",description:"Akses fitur dasar.",access:"Member"}],
  integrations:[{id:"psp-mobile",name:"PSP Mobile",platform:"PSP",status:"Aktif"},{id:"psp-admin",name:"PSP Admin",platform:"PSP",status:"Aktif"},{id:"merchant",name:"Merchant",platform:"Merchant",status:"Aktif"}],
  notifications:[],
  slaPolicies:[],
  customViews:[],
  settings:{open:"08:00",close:"17:00",workdays:"Senin–Jumat",holiday:"2026-11-17",greeting:"Halo {nama}, pesan Anda sudah kami terima. Tim kami segera membantu.",afterHours:"Terima kasih sudah menghubungi Closepay. Kami akan membalas pada jam kerja berikutnya.",holidayReply:"Hari ini tanggal merah. Pesan Anda tercatat dan akan kami tindak lanjuti pada hari kerja berikutnya.",customerSurvey:{types:{csat:{enabled:false,channels:[],question:"Apakah anda puas dengan pelayanan kami?",answers:[{emoji:"😡",label:"Sangat Tidak Puas"},{emoji:"😟",label:"Tidak Puas"},{emoji:"😐",label:"Netral"},{emoji:"🙂",label:"Puas"},{emoji:"😄",label:"Sangat Puas"}],followUp:"none",followUpQuestion:"",followUpByScore:["","","","",""]},ces:{enabled:false,channels:[],question:"Apakah Anda sudah puas dengan pelayanan kami?",minLabel:"Sangat tidak puas",maxLabel:"Sangat puas",followUp:"none",followUpQuestion:"",followUpByScore:["","","","",""]},nps:{enabled:false,channels:[],question:"Apakah Anda sudah puas dengan pelayanan kami?",minLabel:"Sangat tidak puas",maxLabel:"Sangat puas",followUp:"none",followUpQuestion:"",followUpByScore:["","","","",""]}},closingMessage:"Percakapan Anda sudah berakhir, terima kasih telah menghubungi tim kami. Silakan tinggalkan pengalaman Anda di sini",surveyTitle:"We’d love to hear your feedback",thankYouMessage:"Terima kasih telah memberikan penilaian Anda! Thanks~",sendMethod:"automatic"}},
  nextAgent:0
};
const copy = value => JSON.parse(JSON.stringify(value));
let state;
try { state = {...copy(seed), ...JSON.parse(localStorage.getItem(KEY) || "{}")}; } catch { state = copy(seed); }
state.customViews ||= [];
state.sessionRole ||= "Admin";
state.customers ||= copy(seed.customers);
state.tags ||= copy(seed.tags);
state.accountUsers ||= copy(seed.accountUsers);
state.accountRoles ||= copy(seed.accountRoles);
state.integrations ||= copy(seed.integrations);
state.integrations.forEach(item=>{item.appId ||= item.id;item.allowedOrigins ||= "";item.sessionMinutes ||= 60;item.userInfoUrl ||= "";item.webhookUrl ||= "";});
state.notifications = Array.isArray(state.notifications) ? state.notifications : [];
state.slaPolicies ||= copy(seed.slaPolicies);
if(!state.tickets.some(t=>t.id==="CP-20261110-0028"))state.tickets.push(copy(seed.tickets.find(t=>t.id==="CP-20261110-0028")));
state.tickets.forEach(t=>{if(!t.source)t.source=t.id==="CP-20261114-0034"?"Closepay":t.channel==="Merchant"?"Merchant":"PSP";t.notes ||= [];t.campaigns ||= [];t.lastActivityAt ||= t.created;if(!Number.isFinite(t.unread))t.unread=t.messages?.at(-1)?.type==="customer"?1:0;});
state.templates.forEach((item,index)=>{item.category ||= index===1?"Kendala":index>1?"Otomatis":"Umum";item.command ||= ["/salam","/detail","/luarjam","/libur"][index]||("/template"+(index+1));});
state.settings.timezone ||= "Asia/Jakarta";
state.settings.holidays ||= state.settings.holiday?[{start:state.settings.holiday,end:state.settings.holiday,description:"Tanggal merah"}]:[];
state.settings.routingMethod ||= "least-active";
state.settings.maxOngoingChats ||= 5;
state.settings.busyReply ||= "Terima kasih sudah menghubungi Closepay. Agen belum tersedia; pesan Anda masuk antrean.";
state.settings.frtMinutes ||= 15;
state.settings.resolutionMinutes ||= 30;
state.settings.pausePendingSla ??= true;
state.agents.forEach(agent=>{agent.onlineSince ||= agent.online?new Date().toISOString():null;agent.availabilityLog ||= [];});
state.tickets.forEach(room=>{room.surveys ||= [];room.pendingIntervals ||= [];const first=room.messages?.find(message=>message.type==="agent"&&!message.text?.startsWith("[Internal] "));if(first&&!room.firstAgentResponseAt){const time=slaMessageTime(room,first);if(Number.isFinite(time))room.firstAgentResponseAt=new Date(time).toISOString();}if(["Selesai","Ditutup"].includes(room.status)&&!room.resolvedAt&&first){const time=slaMessageTime(room,[...room.messages].reverse().find(message=>message.type==="agent"));if(Number.isFinite(time))room.resolvedAt=new Date(time).toISOString();}if(room.rating>0&&!room.surveys.some(item=>item.type==="csat")){room.surveys.push({type:"csat",status:"answered",score:room.rating,comment:room.csatComment||"",sentAt:room.resolvedAt||room.created,answeredAt:room.csatResponseAt||room.resolvedAt||room.created,expiresAt:room.csatResponseAt||room.resolvedAt||room.created,resolvedAt:room.resolvedAt,question:"Bagaimana layanan kami?"});}});
state.settings.officeHours ||= Object.fromEntries([0,1,2,3,4,5,6].map(day=>[day,{enabled:day>0&&day<6||state.settings.workdays==="Setiap hari"||day===6&&state.settings.workdays==="Senin–Sabtu",in:state.settings.open||"08:00",out:state.settings.close||"17:00"}]));
state.settings.officeTemplate ||= state.templates[0].command;
state.settings.outsideTemplate ||= state.templates[2].command;
state.settings.customerIdle ||= {enabled:false,minutes:30,action:"Notify agent"};
state.settings.customerSurvey ||= copy(seed.settings.customerSurvey);
state.settings.customerSurvey.closingMessage ||= state.settings.customerSurvey.greeting||seed.settings.customerSurvey.closingMessage;
state.settings.customerSurvey.surveyTitle ||= seed.settings.customerSurvey.surveyTitle;
state.settings.customerSurvey.thankYouMessage ||= seed.settings.customerSurvey.thankYouMessage;
state.settings.customerSurvey.types ||= copy(seed.settings.customerSurvey.types);
["csat","ces","nps"].forEach(type=>{state.settings.customerSurvey.types[type]={...copy(seed.settings.customerSurvey.types[type]),...state.settings.customerSurvey.types[type]};});
["csat","ces","nps"].forEach(type=>{const config=state.settings.customerSurvey.types[type];config.channels ||= [];if(type==="csat")config.answers ||= copy(seed.settings.customerSurvey.types[type].answers);config.followUpByScore=Array.from({length:type==="nps"?11:type==="ces"?7:5},(_,index)=>config.followUpByScore?.[index]||"");});
let page = "tickets", selected = null, focusedTicket = null, inboxView = "All Chats", channelFilter = "Semua kanal", sortOrder = "Newest", showModal = false, selectedIntegrationId = null, notificationPanelOpen = false, toastTimer;
let settingsTab="Auto Responder";
let surveyExpanded="csat";
let surveyPreviewPage="thank-you";
let userSearch="",userRoleFilter="All roles",userStatusFilter="All status";
const accountProducts=["Closepay","PSP Mobile","PSP Admin","Merchant"];
let slaEditorOpen=false;
const reportNowJakarta=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"}));
let reportDateFilter=[reportNowJakarta.getFullYear(),String(reportNowJakarta.getMonth()+1).padStart(2,"0"),String(reportNowJakarta.getDate()).padStart(2,"0")].join("-");
let reportTimezoneFilter="Asia/Jakarta",reportChannelFilter="All channels",reportDivisionFilter="All divisions",reportConversationSearch="",reportRowsPerPage=10,reportListPage=1,reportInterval="Hourly";
let reportFrom=new Date(reportNowJakarta.getTime()-30*86400000).toISOString().slice(0,10),reportTo=reportDateFilter,reportAgentFilter="All agents";
let surveyReportPeriod="all",surveyReportChannel="all",surveyReportDay="",surveyReportAgent="all";
let dashboardYear=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"})).getFullYear();
let slaFrom="",slaTo="",slaFirstPage=1,slaResolutionPage=1,historyExpanded=false;
let userPreviewTicketId=state.tickets[0]?.id||"",userPreviewTab="chat",userIntakeOpen=false,userIntakeMode="login";
const panelOpen={sla:true,associated:true,profile:true,conversation:false,notes:false,tags:false,assigned:false,history:false,campaign:false,ticket:false};
const main = document.getElementById("mainContent");
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const save = () => localStorage.setItem(KEY, JSON.stringify(state));
function syncSla(room){const result=CSEngine.metrics(room,state.settings);room.is_frt_breached=result.is_frt_breached;room.is_resolution_breached=result.is_resolution_breached;return result;}
function routeQueued(){const assignments=CSEngine.routeQueue(state.tickets,state.agents,state.settings);assignments.forEach(({ticket:room,agent})=>log(room,"Ditugaskan otomatis ke "+agent.name+"."));return assignments;}
function surveyChannelId(channel){return state.integrations.find(item=>item.name===channel)?.id||"";}
function sendSurveys(room,manual=false){
 const config=state.settings.customerSurvey;if(!manual&&config.sendMethod!=="automatic")return 0;
 let count=0,now=new Date();
 for(const type of ["csat","ces","nps"]){const item=config.types[type];if(!item?.enabled||!item.channels.includes(surveyChannelId(room.channel)))continue;
  if(room.surveys.some(survey=>survey.type===type&&survey.resolvedAt===room.resolvedAt))continue;
  room.surveys.push({type,status:"sent",sentAt:now.toISOString(),expiresAt:new Date(now.getTime()+(Number(config.expiryHours)||24)*3600000).toISOString(),resolvedAt:room.resolvedAt,question:item.question});count++;
 }
 if(count)log(room,count+" survei dikirim ke pelanggan.");return count;
}
function expireSurveys(){let changed=false;for(const room of state.tickets)for(const survey of room.surveys||[])if(survey.status==="sent"&&new Date(survey.expiresAt)<new Date()){survey.status="expired";changed=true;}if(changed)save();}
const nowWib = () => new Date().toLocaleString("id-ID",{timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit",hour12:false}).replace(".",":");
const stamp = () => new Date().toLocaleString("id-ID",{timeZone:"Asia/Jakarta",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:false})+" WIB";
const ticket = () => state.tickets.find(t => t.id === selected) || state.tickets[0];
function toast(message){const box=document.getElementById("toast");box.textContent=message;box.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>box.classList.remove("show"),3000);}
function addNotification(type,title,message,ticketId=""){
  state.notifications.unshift({id:"notification-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),type,title,message,ticketId,createdAt:new Date().toISOString(),read:false});
  state.notifications=state.notifications.slice(0,60);
  save();updateNotificationUI();
}
function updateNotificationUI(){
  const unread=state.notifications.filter(item=>!item.read).length;
  const badge=document.getElementById("notificationCount"),button=document.getElementById("notificationToggle"),panel=document.getElementById("notificationPanel");
  badge.hidden=unread===0;badge.textContent=unread>9?"9+":String(unread);
  button.setAttribute("aria-label",`Notifikasi, ${unread} belum dibaca`);
  button.setAttribute("aria-expanded",String(notificationPanelOpen));
  panel.hidden=!notificationPanelOpen;
  panel.innerHTML=`<div class="notification-head"><div><h2 tabindex="-1">Notifikasi</h2><small>${unread} belum dibaca</small></div><button type="button" class="text-button" data-action="mark-notifications-read" ${unread?"":"disabled"}>Tandai dibaca</button></div><div class="notification-list">${state.notifications.length?state.notifications.map(item=>`<button type="button" class="notification-item ${item.read?"":"unread"}" data-notification-id="${esc(item.id)}"><span class="notification-type ${esc(item.type)}" aria-hidden="true">${item.type==="chat"?"▤":item.type==="handover"?"⇄":"◉"}</span><span class="notification-body"><strong>${esc(item.title)}</strong><span>${esc(item.message)}</span><small>${esc(new Date(item.createdAt).toLocaleString("id-ID",{timeZone:"Asia/Jakarta",day:"2-digit",month:"short",hour:"2-digit",minute:"2-digit"}))} WIB</small></span>${item.read?"":'<i class="notification-unread-dot" aria-label="Belum dibaca"></i>'}</button>`).join(""):'<div class="notification-empty">Belum ada notifikasi.</div>'}</div><div class="notification-footer"><button type="button" class="button" data-action="new-broadcast">+ Buat broadcast</button></div>`;
}
function log(t,text){t.lastActivityAt=new Date().toISOString();t.history.push({at:stamp(),text});}
function pill(text,type=""){return `<span class="pill ${type}">${esc(text)}</span>`;}
function header(eyebrow,title,desc="",action=""){return `<div class="page-heading"><div><div class="eyebrow">${eyebrow}</div><h1>${title}</h1><p>${desc}</p></div>${action}</div>`;}
function statusType(s){return s==="Selesai"?"green":s==="Perlu follow up"?"red":s==="Menunggu pelanggan"?"amber":"";}
function duration(t){const hours=Math.floor((Date.now()-new Date(t.created).getTime())/3600000);return hours>=24 && t.status!=="Selesai" && t.status!=="Ditutup" ? "Lewat 24 jam" : "Dalam SLA";}
const inboxViews=[
  {name:"All Chats",icon:"▦",match:()=>true},
  {name:"My Chats",icon:"◉",match:t=>t.agent===state.agents[0].name && (state.agents[0].online||["Selesai","Ditutup"].includes(t.status))},
  {name:"Unassigned",icon:"○",match:t=>!t.agent || t.status==="Belum ditugaskan"},
  {name:"Assigned",icon:"↗",match:t=>state.agents[0].online && Boolean(t.agent) && !["Selesai","Ditutup"].includes(t.status)},
  {name:"Resolved",icon:"✓",match:t=>["Selesai","Ditutup"].includes(t.status)}
];
function isUnresponded(t){
  const messages=t.messages||[];
  return messages.findLastIndex(m=>m.type==="customer")>messages.findLastIndex(m=>m.type==="agent");
}
function customViewMatch(t,view){
  const c=view.criteria;
  const active=!["Selesai","Ditutup"].includes(t.status);
  return (!c.channel||c.channel==="Semua kanal"||t.channel===c.channel)
    && (!c.session||c.session==="Semua sesi"||(c.session==="Aktif"&&active)||(c.session==="Menunggu"&&t.status==="Menunggu pelanggan")||(c.session==="Resolved"&&!active))
    && (!c.tag||c.tag==="Semua tag"||t.tag===c.tag)
    && (!c.unresponded||c.unresponded==="Semua"||(c.unresponded==="Ya"&&isUnresponded(t))||(c.unresponded==="Tidak"&&!isUnresponded(t)));
}
function visibleTickets(){
  const view=inboxViews.find(v=>v.name===inboxView);
  const custom=state.customViews.find(v=>v.id===inboxView);
  const match=t=>custom?customViewMatch(t,custom):view?view.match(t):true;
  return state.tickets.filter(t=>match(t) && (channelFilter==="Semua kanal"||t.channel===channelFilter))
    .sort((a,b)=>(new Date(b.created).getTime()-new Date(a.created).getTime())*(sortOrder==="Newest"?1:-1));
}
function sourceLabel(t){return ["PSP","Closepay","Merchant"].includes(t.source)?t.source:t.channel==="Merchant"?"Merchant":"PSP";}
function appLogo(source){
  const common='class="app-logo" viewBox="0 0 32 32" fill="none" aria-hidden="true"';
  if(source==="Closepay")return `<svg ${common}><path d="M24.5 7A12 12 0 1 0 25 24" stroke="#12B99E" stroke-width="5" stroke-linecap="round"/><path d="M25 8.5A12 12 0 0 1 28 18" stroke="#4B7DFF" stroke-width="5" stroke-linecap="round"/><circle cx="16" cy="16" r="3" fill="#4B7DFF"/></svg>`;
  if(source==="Merchant")return `<svg ${common}><path d="M5 13h22l-2-7H7l-2 7Z" fill="#E5A554"/><path d="M7 14v12h18V14" stroke="#B67531" stroke-width="2"/><path d="M11 17v9m10-9v9M5 13c0 3 4 4 6 1 2 3 6 3 8 0 2 3 6 2 8-1" stroke="#B67531" stroke-width="2" stroke-linejoin="round"/></svg>`;
  return `<svg ${common}><path d="M16 3 27 8v8c0 7-5 11-11 13C10 27 5 23 5 16V8L16 3Z" fill="#4D79E8"/><path d="m10 14 6-4 6 4v7H10v-7Z" fill="white"/><path d="M14 21v-5h4v5" stroke="#4D79E8" stroke-width="2"/></svg>`;
}
function renderInboxSidebar(){
  const online=state.agents[0].online;
  const myCount=online?state.tickets.filter(t=>t.agent===state.agents[0].name&&!["Selesai","Ditutup"].includes(t.status)).length:0;
  return `<aside class="inbox-sidebar panel" aria-label="Kategori inbox"><div class="inbox-sidebar-title">INBOX</div><nav class="inbox-nav">${inboxViews.map(v=>`<button class="inbox-nav-item ${inboxView===v.name?"active":""}" data-inbox-view="${v.name}" aria-current="${inboxView===v.name?"page":"false"}" ${v.name==="Assigned"&&!online?"disabled":""}><span class="inbox-nav-icon" aria-hidden="true">${v.icon}</span><span>${v.name}</span><small>${state.tickets.filter(v.match).length}</small></button>`).join("")}</nav>
  <button class="share-chat-button" data-action="share-chat" ${online?"":"disabled"}>Share Chat <b>${myCount}</b></button>
  <div class="custom-views-head"><span>CUSTOM VIEWS</span><button type="button" data-action="toggle-custom-view" aria-label="Tambah custom view" aria-haspopup="dialog">+</button></div>
  <div class="custom-views-list">${state.customViews.map(v=>`<button class="custom-view-item ${inboxView===v.id?"active":""}" data-custom-view="${esc(v.id)}" title="${esc([v.criteria.channel,v.criteria.session,v.criteria.tag,v.criteria.unresponded].join(" · "))}"><span>◫</span><span>${esc(v.name)}</span><small>${state.tickets.filter(t=>customViewMatch(t,v)).length}</small></button>`).join("")}</div></aside>`;
}
function renderList(filtered){
  const viewName=state.customViews.find(v=>v.id===inboxView)?.name||inboxView;
  return `<section class="conversation-list panel"><div class="list-head"><div><strong>${esc(viewName)}</strong><small>${filtered.length} chat · klik 2× atau klik kanan untuk buka</small></div></div>
  <div class="list-filters"><div class="list-filter-row"><select id="channelFilter" aria-label="Filter kanal">${["Semua kanal","PSP Admin","Merchant","PSP Mobile"].map(v=>`<option ${channelFilter===v?"selected":""}>${v}</option>`).join("")}</select><select id="sortOrder" class="sort-select" aria-label="Urutkan chat"><option ${sortOrder==="Newest"?"selected":""}>Newest</option><option ${sortOrder==="Oldest"?"selected":""}>Oldest</option></select></div></div>
  <div class="ticket-items">${filtered.length?filtered.map(t=>`<button class="ticket-item ${selected===t.id?"active":""} ${focusedTicket===t.id?"focused":""}" data-ticket="${esc(t.id)}" title="Klik dua kali atau klik kanan untuk membuka chat"><span class="chat-app-avatar source-${sourceLabel(t).toLowerCase()}" title="${sourceLabel(t)}" aria-label="${sourceLabel(t)}">${appLogo(sourceLabel(t))}</span><span class="ticket-item-content"><span class="ticket-item-top"><strong>${esc(t.name)}</strong><span class="ticket-item-end"><small>${esc(t.messages?.at(-1)?.at||"")}</small>${t.unread?`<span class="unread-count" aria-label="${t.unread} pesan belum dibaca">${t.unread}</span>`:""}</span></span><span class="ticket-preview">${esc(t.messages?.at(-1)?.text||t.issue||"Belum ada pesan")}</span><span class="ticket-meta">${pill(t.status,statusType(t.status))}</span><span class="ticket-sub">${esc(t.school)} · ${esc(t.scope)} · ${esc(t.agent||"Belum ditugaskan")}</span></span></button>`).join(""):`<div class="empty-state">Tidak ada chat di ${esc(viewName)}.</div>`}</div></section>`;
}
function renderMessages(t){return t.messages?.length?t.messages.map(m=>`<div class="message ${m.type==="agent"?"outgoing":m.type==="system"?"system":""}">${m.type==="system"?`<div class="system-note">${esc(m.text)}</div>`:`<span class="chat-app-avatar small source-${m.type==="agent"?"closepay":sourceLabel(t).toLowerCase()}">${appLogo(m.type==="agent"?"Closepay":sourceLabel(t))}</span><div class="message-body"><div class="message-author">${esc(m.by)} <small>${esc(m.at)}</small></div><div class="message-bubble">${esc(m.text)}${attachmentMarkup(m)}</div>${m.type==="agent"&&!m.text?.startsWith("[Internal] ")?messageStatus(m):""}</div>`}</div>`).join(""):`<div class="empty-state">Belum ada pesan di chat ini.</div>`;}
function renderChat(t){
  const owner=state.agents.find(a=>a.name===t.agent);
  return `<section class="ticket-chat panel"><div class="chat-header"><div class="chat-identity"><span class="chat-app-avatar large source-${sourceLabel(t).toLowerCase()}">${appLogo(sourceLabel(t))}</span><div><h2>${esc(t.name)}</h2><small>${esc(t.id)} · ${esc(t.school)}</small></div></div><div class="chat-header-actions"><button class="button" data-action="handover">⇄ Handover</button></div></div>
  <div class="chat-context"><div><small>KENDALA</small><strong>${esc(t.issue)}</strong></div><div class="context-pills">${pill(t.channel)}${t.origin==="guest"?pill("Luar aplikasi"):t.origin==="login"?pill("Sudah login"):""}${pill(t.scope)}${pill(t.status,statusType(t.status))}</div></div>
  <div class="chat-notice">${duration(t)==="Lewat 24 jam"?`<span class="notice-alert">● Perlu follow up Master CS · lewat 1 × 24 jam</span>`:`<span>● ${esc(t.agent||"Belum ditugaskan")}${owner?" · "+(owner.online?"Online":"Offline / unsigned"):""}</span>`}</div>
  <div class="message-list" id="messageList">${renderMessages(t)}</div>
  <form class="message-compose ${state.agents[0].online?"":"is-offline"}" id="replyForm"><div class="compose-top"><span>Balas pelanggan</span><span class="slash-hint">${state.agents[0].online?"Ketik / untuk template":"Offline · balasan dinonaktifkan"}</span></div><div class="compose-input-wrap"><div class="template-menu" id="templateMenu" hidden></div><textarea id="replyText" maxlength="4000" ${state.agents[0].online?"":"disabled"} placeholder="${state.agents[0].online?"Tulis pesan atau ketik / untuk template...":"Aktifkan status online untuk membalas."}"></textarea></div><div class="compose-tools"><label class="internal-toggle"><input id="internalNote" type="checkbox" ${state.agents[0].online?"":"disabled"}> Catatan internal</label><label class="compose-file-label">📎 Lampirkan file<input name="file" type="file" accept="image/*,.pdf,.txt" ${t.status==="Selesai"||!state.agents[0].online?"disabled":""}></label><span id="replyFileName"></span><span id="charCount">0/4000</span><span class="spacer"></span><button class="button primary" type="submit" ${t.status==="Selesai"||!state.agents[0].online?"disabled":""}>Kirim pesan ↗</button></div></form></section>`;
}
function detailRow(label,value){return `<div class="detail-row"><span>${label}</span><b>${esc(value)}</b></div>`;}
function dateWib(value){return new Date(value).toLocaleString("id-ID",{timeZone:"Asia/Jakarta",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:false})+" WIB";}
const detailSections=[
  ["sla","SLA"],["associated","Associated Contact"],["profile","Customer profile"],
  ["conversation","Conversation details"],["notes","Notes"],["tags","Tags"],
  ["assigned","Assigned"],["history","Conversation history"],
  ["campaign","Campaign history"],["ticket","Ticket"]
];
const roleFeatureGroups=[
  {name:"Bot & Otomatisasi",features:[{name:"Umum",permissions:["Lihat"]}]},
  {name:"Aktivitas panggilan",features:[{name:"Umum",permissions:["Lihat"]},{name:"Rekaman",permissions:["Lihat","Ekspor"]},{name:"Kelola rekaman",permissions:["Lihat","Hapus","Ekspor"]}]},
  {name:"Manajemen user",features:[{name:"User",permissions:["Lihat","Undang"]},{name:"Roles",permissions:["Lihat","Kelola"]}]}
];
function historyStatus(value){
  if(value==="Selesai")return "Resolved";
  if(["Ditutup","Dibatalkan"].includes(value))return "Cancel";
  if(["Sedang ditangani","Menunggu pelanggan","Perlu follow up"].includes(value))return "Progress";
  return "Open";
}
function detailPanel(key,title,body){
  const open=panelOpen[key];
  return `<section class="panel detail-card"><button class="detail-toggle" data-panel-toggle="${key}" aria-expanded="${open}"><span>${title}</span><span class="panel-chevron" aria-hidden="true">${open?"⌃":"⌄"}</span></button><div class="detail-panel-body" ${open?"":"hidden"}>${body}</div></section>`;
}
function renderDetails(t){
 const sla=syncSla(t),firstRemaining=Math.max(0,state.settings.frtMinutes*60000-sla.firstMs),resolutionRemaining=Math.max(0,state.settings.resolutionMinutes*60000-sla.resolutionMs);
 const deadline=new Date(t.created).getTime()+86400000;
 const remaining=Math.ceil(Math.abs(deadline-Date.now())/3600000);
 const resolved=["Selesai","Ditutup"].includes(t.status);
 const slaText=resolved?"Selesai":deadline<Date.now()?`Lewat ${remaining} jam`:`${remaining} jam tersisa`;
 const related=state.tickets.filter(x=>x.id!==t.id && (x.userId===t.userId || x.school===t.school));
 const historyCards=state.tickets.filter(x=>x.userId===t.userId).sort((a,b)=>new Date(b.created)-new Date(a.created));
 const bodies={
   sla:`${pill(resolved?"Stopped":sla.paused?"Paused":"Running",resolved?"green":sla.is_resolution_breached?"red":"amber")}${detailRow("FRT",`${slaDuration(sla.firstMs)} / ${state.settings.frtMinutes} menit · ${sla.is_frt_breached?"Breached":slaDuration(firstRemaining)+" sisa"}`)}${detailRow("Resolusi",`${slaDuration(sla.resolutionMs)} / ${state.settings.resolutionMinutes} menit · ${sla.is_resolution_breached?"Breached":slaDuration(resolutionRemaining)+" sisa"}`)}<div class="detail-actions"><button class="button success" data-action="complete" ${resolved?"disabled":""}>✓ Selesaikan</button>${resolved?`<button class="button" data-action="send-survey">Kirim survei manual</button>`:""}${!resolved&&state.settings.pausePendingSla?`<button class="button" data-action="toggle-pending">${t.status==="Menunggu pelanggan"?"Lanjutkan SLA":"Jeda SLA · Pending"}</button>`:""}</div>`,
   associated:`<div class="associated-section"><b>Kontak terkait (${related.length})</b>${related.length?related.map(x=>`<div class="related-item">${esc(x.name)}<small>${esc(x.userId)} · ${esc(x.school)}</small></div>`).join(""):'<p class="muted">Belum ada kontak terkait.</p>'}</div>`,
   profile:`${detailRow("Nama",t.customerProfile?.name||t.name)}${detailRow("ID pengguna",t.userId)}${detailRow("Sekolah",t.customerProfile?.school||t.school)}${detailRow("Email",t.customerProfile?.email||"—")}${detailRow("Telepon",t.customerProfile?.phone||t.phone)}<div class="detail-actions"><button class="button" data-action="add-profile">+ Add customer profile</button></div>`,
   conversation:`${detailRow("Agent name",t.agent||"Belum ditugaskan")}${detailRow("Created",dateWib(t.created))}${detailRow("Last Activity",dateWib(t.lastActivityAt||t.created))}`,
   notes:`<div class="note-list">${t.notes?.length?t.notes.map(n=>`<div class="note-item"><small>${esc(n.at)}</small>${n.text?`<p>${esc(n.text)}</p>`:""}${n.fileName?`<span class="note-file">📎 ${esc(n.fileName)}</span>`:""}</div>`).join(""):'<p class="muted">Belum ada note.</p>'}</div><form id="noteForm"><textarea name="note" placeholder="Tulis note internal..."></textarea><label class="note-file-label">Input file notes<input type="file" name="file"></label><button class="button" type="submit">Simpan note</button></form>`,
   tags:`<div class="side-controls"><label>Master tags<input id="tagInput" list="masterTags" value="${esc(t.tag)}" autocomplete="off"><datalist id="masterTags">${state.tags.map(v=>`<option value="${esc(v)}"></option>`).join("")}</datalist></label></div>`,
   assigned:`${detailRow("User saat ini",state.agents[0].name)}${detailRow("Ditugaskan ke",t.agent||"Belum ditugaskan")}${detailRow("Status agent",state.agents.find(a=>a.name===t.agent)?.online?"Online":"Offline")}<div class="detail-actions"><button class="button" data-action="handover">Handover</button></div>`,
   history:`<div class="conversation-history-cards">${historyCards.slice(0,historyExpanded?undefined:1).map(x=>`<div class="history-chat-card"><b>Chat ${esc(x.id)}</b><small>${esc(dateWib(x.created))}</small><span class="history-status ${historyStatus(x.status).toLowerCase()}">${historyStatus(x.status)}</span></div>`).join("")}</div>${historyCards.length>1?`<button type="button" class="view-history-button" data-action="view-history">${historyExpanded?"Tutup history":"View history"}</button>`:""}`,
   campaign:`<div class="campaign-list">${t.campaigns?.length?t.campaigns.map(c=>`<div class="history-chat-card"><b>${esc(c.name)}</b><small>${esc(c.date||"")}</small><span>${esc(c.status||"")}</span></div>`).join(""):'<p class="muted">Belum ada campaign.</p>'}</div>`,
   ticket:`${detailRow("Ticket",t.id)}${detailRow("Kendala",t.issue)}${detailRow("Status",t.status)}${detailRow("Tag",t.tag)}`
 };
 return `<aside class="ticket-details">${detailSections.map(([key,title])=>detailPanel(key,title,bodies[key])).join("")}</aside>`;
}
function renderEmptyDetails(){return `<aside class="ticket-details">${detailSections.map(([key,title])=>detailPanel(key,title,'<p class="muted">Select a chat to view details.</p>')).join("")}</aside>`;}
function renderTickets(){
  const filtered=visibleTickets();
  if(!filtered.some(t=>t.id===selected))selected=null;
  if(!filtered.some(t=>t.id===focusedTicket))focusedTicket=null;
  const current=filtered.find(t=>t.id===selected);
  const empty=`<section class="panel inbox-empty-chat"><svg class="empty-chat-icon" viewBox="0 0 64 64" fill="none" aria-hidden="true"><path d="M11 13h42v30H28L17 52v-9h-6V13Z" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/><path d="M22 25h20M22 33h13" stroke="currentColor" stroke-width="3" stroke-linecap="round"/></svg><strong>A chat will appear here</strong><p>Select a chat to view customer messages.</p><small>Klik dua kali atau klik kanan pada chat untuk membuka.</small></section>`;
  return `<div class="ticket-layout ${current?"has-chat":"no-chat"}">${renderInboxSidebar()}${renderList(filtered)}${current?renderChat(current):empty}${current?renderDetails(current):""}</div>`;
}
function dashboardCustomers(){
 const records=new Map(state.customers.map(customer=>[customer.id,{...customer}]));
 state.tickets.forEach(item=>{
  const existing=records.get(item.userId);
  if(existing){if(!existing.joined||item.created.slice(0,10)<existing.joined)existing.joined=item.created.slice(0,10);}
  else records.set(item.userId,{id:item.userId,name:item.name,joined:item.created.slice(0,10),segment:item.segment||"Lainnya",channel:item.channel||"Belum diketahui",location:item.location||"Belum diketahui",deals:0});
 });
 return [...records.values()];
}
function dashboardBreakdown(customers,key){return Object.entries(customers.reduce((counts,customer)=>{const value=customer[key]||"Belum diketahui";counts[value]=(counts[value]||0)+1;return counts;},{})).sort((a,b)=>b[1]-a[1]);}
function dashboardBarList(entries,total){return `<div class="customer-breakdown">${entries.map(([label,count])=>`<div class="customer-breakdown-row"><div><span>${esc(label)}</span><b>${count} <small>(${Math.round(count/total*100)}%)</small></b></div><i><span style="width:${count/total*100}%"></span></i></div>`).join("")}</div>`;}
function renderDashboard(){
 const customers=dashboardCustomers(),ids=new Set(state.tickets.map(item=>item.userId));
 const now=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"})),currentMonth=`${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}`;
 const months=Array.from({length:12},(_,index)=>`${dashboardYear}-${String(index+1).padStart(2,"0")}`),monthLabels=["Jan","Feb","Mar","Apr","Mei","Jun","Jul","Agu","Sep","Okt","Nov","Des"];
 const monthly=months.map(month=>customers.filter(item=>item.joined?.startsWith(month)).length),maxMonthly=Math.max(1,...monthly);
 const growth=months.map(month=>customers.filter(item=>item.joined&&item.joined.slice(0,7)<=month).length),maxGrowth=Math.max(1,...growth);
 const points=growth.map((count,index)=>`${25+index*50},${160-count/maxGrowth*130}`).join(" ");
 const segment=dashboardBreakdown(customers,"segment"),channels=dashboardBreakdown(customers,"channel"),locations=dashboardBreakdown(customers,"location");
 const colors=["#4b75e7","#20b99a","#f1aa4c","#8b6bd4","#6a9fc3"],total=customers.length;
 let position=0;const slices=segment.map(([,count],index)=>{const start=position;position+=count/total*100;return `${colors[index%colors.length]} ${start}% ${position}%`;}).join(",");
 const years=[...new Set([now.getFullYear(),...customers.map(item=>Number(item.joined?.slice(0,4)))].filter(Number.isFinite))].sort((a,b)=>b-a);
 return `<div class="customer-dashboard">${header("CUSTOMER ANALYTICS","Dashboard","Ringkasan pelanggan dari data simulasi dan percakapan yang tercatat.")}
 <div class="customer-kpis">${[["Total customer",total,"Pelanggan unik"],["Monthly new customer",customers.filter(item=>item.joined?.startsWith(currentMonth)).length,"Bergabung bulan ini"],["Customer with no conversations",customers.filter(item=>!ids.has(item.id)).length,"Belum pernah chat"],["Deals",customers.reduce((sum,item)=>sum+(Number(item.deals)||0),0),"Total deals tercatat"]].map(([label,value,note])=>`<section class="panel customer-kpi"><span>${label}</span><strong>${value}</strong><small>${note}</small></section>`).join("")}</div>
 <div class="customer-chart-grid"><section class="panel customer-chart-card"><div class="customer-chart-head"><div><h2>Customer baru per bulan</h2><p>Jumlah pelanggan pertama kali tercatat.</p></div><label>Tahun <select id="dashboardYear">${years.map(year=>`<option value="${year}" ${year===dashboardYear?"selected":""}>${year}</option>`).join("")}</select></label></div><div class="customer-month-bars" role="img" aria-label="Customer baru per bulan tahun ${dashboardYear}: ${monthly.map((count,index)=>monthLabels[index]+" "+count).join(", ")}">${monthly.map((count,index)=>`<div class="customer-month"><b>${count}</b><span class="customer-bar-track"><i style="height:${count?Math.max(8,count/maxMonthly*100):0}%"></i></span><small>${monthLabels[index]}</small></div>`).join("")}</div></section>
 <section class="panel customer-chart-card"><div class="customer-chart-head"><div><h2>Customer growth trend</h2><p>Total pelanggan kumulatif sepanjang ${dashboardYear}.</p></div><strong>${growth.at(-1)}</strong></div><div class="customer-growth"><svg viewBox="0 0 600 190" preserveAspectRatio="none" role="img" aria-label="Pertumbuhan pelanggan: ${growth.map((count,index)=>monthLabels[index]+" "+count).join(", ")}"><path d="M25 160 H575" stroke="#e7edf5" stroke-width="2"/><polyline points="${points}" fill="none" stroke="#4b75e7" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>${growth.map((count,index)=>`<circle cx="${25+index*50}" cy="${160-count/maxGrowth*130}" r="4" fill="#4b75e7"><title>${monthLabels[index]}: ${count} customer</title></circle>`).join("")}</svg><div>${monthLabels.map(label=>`<small>${label}</small>`).join("")}</div></div></section></div>
 <div class="customer-detail-grid"><section class="panel customer-chart-card"><h2>Customer segmentations</h2><p>Komposisi berdasarkan jenis pelanggan.</p><div class="customer-segments"><div class="customer-donut" style="background:conic-gradient(${slices})"><span>${total}<small>customer</small></span></div><div class="customer-legend">${segment.map(([label,count],index)=>`<div><i style="background:${colors[index%colors.length]}"></i><span>${esc(label)}</span><b>${count}</b></div>`).join("")}</div></div></section><section class="panel customer-chart-card"><h2>Customer by channel</h2><p>Kanal asal pelanggan.</p>${dashboardBarList(channels,total)}</section><section class="panel customer-chart-card"><h2>Customer by location</h2><p>Lokasi pelanggan yang tersedia.</p>${dashboardBarList(locations,total)}</section></div></div>`;
}
function slaMessageTime(room,message){
 if(message?.sentAt)return new Date(message.sentAt).getTime();
 const match=String(message?.at||"").match(/^(\d{1,2})[:.](\d{2})/);
 if(!match)return NaN;
 const day=reportDateKey(room.created,"Asia/Jakarta"),time=new Date(`${day}T${String(match[1]).padStart(2,"0")}:${match[2]}:00+07:00`).getTime();
 return time<new Date(room.created).getTime()-60000?time+86400000:time;
}
function slaDuration(ms){return Number.isFinite(ms)&&ms>=0?reportFormatDuration(ms/1000):"—";}
function slaRoomMetrics(room){
 if(room.firstAgentResponseAt||room.resolvedAt){const metric=syncSla(room);return {first:room.firstAgentResponseAt?slaDuration(metric.firstMs):"—",resolution:room.resolvedAt?slaDuration(metric.resolutionMs):"—"};}
 const messages=room.messages||[],firstCustomer=messages.findIndex(message=>message.type==="customer");
 const reply=firstCustomer>=0?messages.slice(firstCustomer+1).find(message=>message.type==="agent"&&!message.text?.startsWith("[Internal] ")):null;
 const firstAt=firstCustomer>=0?slaMessageTime(room,messages[firstCustomer]):NaN,replyAt=reply?slaMessageTime(room,reply):NaN;
 const closed=["Selesai","Ditutup"].includes(room.status),lastAgent=[...messages].reverse().find(message=>message.type==="agent"&&!message.text?.startsWith("[Internal] "));
 const resolvedAt=room.resolvedAt?new Date(room.resolvedAt).getTime():closed&&lastAgent?slaMessageTime(room,lastAgent):NaN;
 const resolution=closed?slaDuration(resolvedAt-new Date(room.created).getTime()):"—";
 return {first:slaDuration(replyAt-firstAt),resolution:closed&&!room.resolvedAt&&resolution!=="—"?"≈ "+resolution:resolution};
}
function slaOverviewTable(rooms,type,pageNumber){
 const pageCount=Math.max(1,Math.ceil(rooms.length/5)),page=Math.min(pageNumber,pageCount),start=(page-1)*5;
 const name=type==="first"?"First response time":"Resolution time",rows=rooms.slice(start,start+5);
 return `<section class="panel sla-overview-table"><div class="sla-overview-heading"><div><h2>${name}</h2><p>Durasi per Room ID dari ${type==="first"?"pesan pelanggan pertama ke balasan agent pertama":"chat dibuat sampai selesai"}.</p></div><span>${rooms.length} room</span></div><div class="table-wrap"><table><thead><tr><th>Room ID</th><th>Customer</th><th>Channel</th><th>Waktu dibuat</th><th>${name}</th><th>Status</th></tr></thead><tbody>${rows.length?rows.map(room=>`<tr><td><button type="button" class="link-button" data-open-ticket="${esc(room.id)}">${esc(room.id)}</button></td><td>${esc(room.name)}</td><td>${esc(room.channel)}</td><td>${esc(dateWib(room.created))}</td><td><strong>${type==="first"?slaRoomMetrics(room).first:slaRoomMetrics(room).resolution}</strong></td><td>${pill(room.status,statusType(room.status))}</td></tr>`).join(""):'<tr><td colspan="6" class="sla-overview-empty">Tidak ada room pada periode ini.</td></tr>'}</tbody></table></div><div class="sla-overview-footer"><span>Menampilkan ${rows.length?start+1:0}–${start+rows.length} dari ${rooms.length} · 5 per halaman</span><div><button type="button" data-sla-page="${type}" data-step="-1" ${page<=1?"disabled":""} aria-label="Halaman sebelumnya ${name}">‹</button><span>${page} / ${pageCount}</span><button type="button" data-sla-page="${type}" data-step="1" ${page>=pageCount?"disabled":""} aria-label="Halaman berikutnya ${name}">›</button></div></div></section>`;
}
function renderSlaOverview(){
 const rooms=state.tickets.filter(room=>{const day=reportDateKey(room.created,"Asia/Jakarta");return (!slaFrom||day>=slaFrom)&&(!slaTo||day<=slaTo);}).sort((a,b)=>new Date(b.created)-new Date(a.created));
 return `<div class="sla-overview-page">${header("DASHBOARD","SLA Overview","Waktu respons dan penyelesaian tiap ruang percakapan.")}<div class="panel sla-overview-filters"><label>Dari tanggal<input id="slaFrom" type="date" value="${esc(slaFrom)}"></label><label>Sampai tanggal<input id="slaTo" type="date" value="${esc(slaTo)}"></label><button type="button" data-action="sla-clear-filter">Semua waktu</button><small>≈ Waktu selesai lama diperkirakan dari balasan agent terakhir.</small></div>${slaOverviewTable(rooms,"first",slaFirstPage)}${slaOverviewTable(rooms,"resolution",slaResolutionPage)}</div>`;
}
function renderTransfers(){return `${header("AUDIT TRAIL","Log handover","Setiap perpindahan agent tercatat per ruang percakapan.")}<section class="panel table-panel"><div class="table-wrap"><table><thead><tr><th>WAKTU (WIB)</th><th>ID PERCAKAPAN</th><th>DARI</th><th>KE</th><th>ALASAN</th></tr></thead><tbody>${state.transfers.slice().reverse().map(h=>`<tr><td>${esc(h.at)}</td><td><button class="link-button" data-open-ticket="${esc(h.id)}">${esc(h.id)}</button></td><td>${esc(h.from)}</td><td>${esc(h.to)}</td><td>${esc(h.reason)}</td></tr>`).join("")}</tbody></table></div></section>`;}
function renderTemplates(){return `${header("KONTEN","Template balasan","Ketik / di kolom chat untuk memilih template.")}<div class="template-grid">${state.templates.map(v=>`<div class="panel template-card"><div class="side-title"><h3>${esc(v.name)}</h3>${pill(v.category||"Umum")}</div><p>${esc(v.text)}</p></div>`).join("")}</div>`;}
function renderAccountNav(active){
  return `<nav class="account-nav" aria-label="Pengaturan akun"><button type="button" class="${active==="account-users"?"active":""}" data-page="account-users" ${active==="account-users"?'aria-current="page"':""}>User</button><button type="button" class="${active==="account-roles"?"active":""}" data-page="account-roles" ${active==="account-roles"?'aria-current="page"':""}>Roles</button></nav>`;
}
function renderAccountUsers(){
  const users=state.accountUsers.filter(user=>(userRoleFilter==="All roles"||user.role===userRoleFilter)&&(userStatusFilter==="All status"||user.status===userStatusFilter)&&(!userSearch||`${user.name} ${user.email} ${user.product||""}`.toLowerCase().includes(userSearch.toLowerCase())));
  const active=state.accountUsers.filter(user=>user.status==="Active").length;
  const pending=state.accountUsers.filter(user=>user.status==="Pending").length;
  const used=active+pending;
  return `<div class="account-page">${header("PENGATURAN · ACCOUNT","User","Kelola anggota dan akses workspace.",`<button class="button primary" data-action="invite-user" ${used>=2?'disabled title="Kuota user penuh"':""}>+ Undang user</button>`)}
  ${renderAccountNav("account-users")}
  <section class="panel account-quota" aria-label="Ringkasan user"><div><span>Aktif</span><strong>${active}</strong><small>user dapat masuk</small></div><div><span>Menunggu</span><strong>${pending}</strong><small>undangan terkirim</small></div><div class="account-quota-usage"><span>Kuota terpakai</span><strong>${used} dari 2</strong><div class="account-quota-track" role="progressbar" aria-valuemin="0" aria-valuemax="2" aria-valuenow="${Math.min(used,2)}" aria-label="Kuota user terpakai"><i style="width:${Math.min(used/2*100,100)}%"></i></div></div><button class="button" data-action="upgrade-quota">Tambah kuota</button></section>
  <div class="account-toolbar"><label>Role<select id="userRoleFilter">${["All roles",...state.accountRoles.map(role=>role.name),"Owner"].filter((role,index,array)=>array.indexOf(role)===index).map(role=>`<option ${userRoleFilter===role?"selected":""}>${esc(role)}</option>`).join("")}</select></label><label>Status<select id="userStatusFilter">${["All status","Active","Pending"].map(status=>`<option ${userStatusFilter===status?"selected":""}>${status}</option>`).join("")}</select></label><label class="account-search-label">Cari user<span class="account-search"><span aria-hidden="true">⌕</span><input id="userSearch" type="search" value="${esc(userSearch)}" placeholder="Nama, email, atau product"></span></label></div>
  <section class="panel account-table"><div class="account-table-heading"><div><h2>Daftar user</h2><p>${users.length} dari ${state.accountUsers.length} user ditampilkan</p></div></div><div class="table-wrap"><table><thead><tr><th>Nama dan email</th><th>Product</th><th>Role</th><th>Status</th><th>Terakhir masuk</th></tr></thead><tbody>${users.length?users.map(user=>`<tr><td><strong>${esc(user.name)}</strong><small class="account-email">${esc(user.email)}</small></td><td>${esc(user.product||"—")}</td><td><span class="account-role-badge">${esc(user.role)}</span></td><td>${pill(user.status,user.status==="Active"?"green":"amber")}</td><td>${esc(user.lastSignIn||"—")}</td></tr>`).join(""):`<tr><td colspan="5" class="account-empty">Tidak ada user sesuai filter.</td></tr>`}</tbody></table></div></section></div>`;
}
function renderAccountRoles(){
  return `<div class="account-page">${header("PENGATURAN · ACCOUNT","Roles","Atur peran dan izin akses workspace.",`<button class="button primary" data-action="create-role">+ Buat role</button>`)}
  ${renderAccountNav("account-roles")}
  <section class="panel account-table role-list"><div class="account-table-heading"><div><h2>Daftar role</h2><p>${state.accountRoles.length} role tersedia</p></div></div><div class="table-wrap"><table><thead><tr><th>Nama role</th><th>Deskripsi</th><th>Akses</th><th>Anggota</th></tr></thead><tbody>${state.accountRoles.map(role=>`<tr><td><strong>${esc(role.name)}</strong></td><td>${esc(role.description||"—")}</td><td><span class="account-role-badge">${esc(role.access||"Member")}</span></td><td>${state.accountUsers.filter(user=>user.role===role.name).length} user</td></tr>`).join("")||`<tr><td colspan="4" class="account-empty">Belum ada role. Buat role untuk mengatur akses user.</td></tr>`}</tbody></table></div></section></div>`;
}
function settingsOverview(title,description,content,action=""){return `<div class="settings-overview">${header("PENGATURAN",title,description,action)}${content}</div>`;}
function settingsTable(title,columns,rows,empty){return `<section class="panel table-panel settings-overview-table"><div class="account-table-heading"><h2>${title}</h2></div><div class="table-wrap"><table><thead><tr>${columns.map(label=>`<th>${label}</th>`).join("")}</tr></thead><tbody>${rows||`<tr><td colspan="${columns.length}" class="account-empty">${empty}</td></tr>`}</tbody></table></div></section>`;}
function renderSlaCondition(){
  return `<div class="sla-condition-row"><select name="field" aria-label="Condition field"><option>Channel</option><option>Priority</option><option>Customer type</option><option>Status</option></select><select name="operator" aria-label="Condition operator"><option>is</option><option>is not</option></select><input name="value" required aria-label="Condition value" placeholder="Enter value"><button type="button" class="button" data-action="remove-sla-condition" aria-label="Remove condition">×</button></div>`;
}
function renderSlaSettings(){
  if(slaEditorOpen)return `<div class="settings-overview sla-editor"><button type="button" class="sla-breadcrumb" data-action="sla-back">SLA management</button><div class="sla-editor-title"><h1>Create policy</h1></div>
  <form id="slaPolicyForm">
    <section class="sla-form-section"><label class="sla-field">Policy name <span class="required-mark">*</span><span class="sla-count"><span id="slaNameCount">0</span>/60</span><input name="name" required maxlength="60" placeholder="Example: Premium support" autofocus></label>
      <label class="sla-field">Description <span class="sla-count"><span id="slaDescriptionCount">0</span>/200</span><textarea name="description" maxlength="200" placeholder="Enter your description"></textarea></label>
    </section>
    <section class="sla-form-section"><h2>Policy implementation</h2><p>Add conditions to determine when to apply this policy.</p><strong class="sla-condition-label">Apply this policy if any of the following conditions are met</strong><div class="sla-conditions"></div><button type="button" class="button sla-add-condition" data-action="add-sla-condition">⊕ &nbsp;Add condition</button></section>
    <section class="sla-form-section sla-target-section"><h2>SLA target setup</h2><p>A service level agreement (SLA) policy lets you set the performance standard for your team.<br>The SLA starts to calculate once the chat room is assigned. <button class="text-button" type="button" data-action="sla-learn-more">Learn more</button></p>
      <label class="sla-field sla-target-field">First response time <span class="required-mark">*</span><span class="sla-input-unit"><input name="firstResponseMinutes" type="number" min="1" max="10080" step="1" value="15" required><span>minutes</span></span></label>
      <label class="sla-field sla-target-field">Response time<span class="sla-input-unit"><input name="responseMinutes" type="number" min="1" max="10080" step="1" value="5"><span>minutes</span></span></label>
      <label class="sla-field sla-target-field">Resolution time <span class="required-mark">*</span><span class="sla-input-unit"><input name="resolutionMinutes" type="number" min="1" max="10080" step="1" value="30" required><span>minutes</span></span></label>
      <label class="sla-field sla-target-field">Operational hours<select name="operationalHours"><option>24/7 availability</option><option>Business hours</option></select></label>
      <small class="sla-operating-note">Response time calculates based on operational hours. Set up operational hours in <button type="button" class="text-button" data-page="settings">Settings</button></small>
    </section>
    <div class="sla-form-actions"><button type="button" class="button" data-action="sla-back">Cancel</button><button type="submit" class="button primary" id="saveSlaPolicy" disabled>Save</button></div>
  </form></div>`;
  const rows=state.slaPolicies.map(policy=>`<tr><td><strong>${esc(policy.name)}</strong></td><td>${esc(policy.description||"—")}</td><td>${policy.conditions.length?policy.conditions.map(condition=>`${esc(condition.field)} ${esc(condition.operator)} ${esc(condition.value)}`).join(" OR "):"All conversations"}</td><td>${esc(policy.firstResponseMinutes)} / ${esc(policy.responseMinutes||"—")} / ${esc(policy.resolutionMinutes)} min</td><td>${pill("Active","green")}</td></tr>`).join("");
  return settingsOverview("SLA management","Create and manage service level agreement policies.",`<section class="panel sla-management-panel">${state.slaPolicies.length?`<div class="sla-policy-table-wrap"><table class="sla-policy-table"><thead><tr><th>Policy name</th><th>Description</th><th>Conditions</th><th>First response / response / resolution</th><th>Status</th></tr></thead><tbody>${rows}</tbody></table></div>`:`<div class="sla-empty-state"><svg viewBox="0 0 160 140" aria-hidden="true"><path d="M37 39h82a9 9 0 0 1 9 9v61H31V48a9 9 0 0 1 6-9Z" fill="#78AEFF"/><path d="M43 32h66a9 9 0 0 1 9 9v10H35V41a9 9 0 0 1 8-9Z" fill="#F3F4F8"/><path d="M38 52h78l-8 51H39Z" fill="#A9CCFF"/><circle cx="55" cy="68" r="25" fill="#BA75EC"/><circle cx="55" cy="68" r="19" fill="#E9D7FA"/><text x="50" y="78" fill="#F1AD42" font-size="29" font-weight="700">?</text></svg><strong>List of policies will appear here</strong><span>Create new SLA policy from Create policy button.</span></div>`}</section>`,`<button class="button primary" data-action="create-sla-policy">Create policy</button>`);
}
function renderAgentManagement(){
  return settingsOverview("Agent Management","Lihat status agent dan beban chat aktif.",settingsTable("Daftar agent",["Agent","Peran","Status","Chat aktif"],state.agents.map(a=>`<tr><td><strong>${esc(a.name)}</strong></td><td>${esc(a.role)}</td><td>${pill(a.online?"Online":"Offline",a.online?"green":"")}</td><td>${state.tickets.filter(t=>t.agent===a.name&&!['Selesai','Ditutup'].includes(t.status)).length}</td></tr>`).join(""),"Belum ada agent."));
}
function renderIntegrationSettings(){
  return settingsOverview("Integration","Kelola aplikasi yang terhubung ke workspace.",`<section class="panel integration-panel"><div class="account-table-heading"><h2>Daftar integrasi</h2><p>${state.integrations.length} aplikasi tersedia</p></div><div class="table-wrap"><table><thead><tr><th>No</th><th>ID Aplikasi</th><th>Nama</th><th>Origin Diizinkan</th><th>Sesi</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${state.integrations.map((item,index)=>`<tr><td>${index+1}</td><td><strong>${esc(item.appId)}</strong></td><td>${esc(item.name)}</td><td title="${esc(item.allowedOrigins||"Belum diatur")}">${esc(item.allowedOrigins||"—")}</td><td>${esc(item.sessionMinutes)} menit</td><td><span class="integration-status ${item.status==="Aktif"?"active":"inactive"}"><i></i>${esc(item.status)}</span></td><td><button type="button" class="button integration-edit" data-action="edit-integration" data-integration-id="${esc(item.id)}" aria-label="Edit ${esc(item.name)}">Edit</button></td></tr>`).join("")||`<tr><td colspan="7" class="account-empty">Belum ada integrasi.</td></tr>`}</tbody></table></div></section>`,`<button type="button" class="button primary" data-action="add-integration">+ Tambah</button>`);
}
function renderUserPerformance(){
  return settingsOverview("User Performance","Ringkasan penanganan chat per agent.",settingsTable("Kinerja agent",["Agent","Chat aktif","Selesai","Rating rata-rata"],state.agents.map(a=>{const chats=state.tickets.filter(t=>t.agent===a.name),rated=chats.filter(t=>t.rating>0);return `<tr><td><strong>${esc(a.name)}</strong></td><td>${chats.filter(t=>!['Selesai','Ditutup'].includes(t.status)).length}</td><td>${chats.filter(t=>['Selesai','Ditutup'].includes(t.status)).length}</td><td>${rated.length?(rated.reduce((sum,t)=>sum+t.rating,0)/rated.length).toFixed(1)+" / 5":"—"}</td></tr>`;}).join(""),"Belum ada data agent."));
}
const surveyTypes=[{id:"csat",label:"Customer satisfaction (CSAT)"},{id:"ces",label:"Customer effort score (CES)"},{id:"nps",label:"Net Promoter Score (NPS)"}];
function renderSurveyChannels(type,config){
  const channels=state.integrations.filter(item=>item.status==="Aktif");
  const selected=new Set(config.channels||[]);
  return `<div class="survey-channel-field"><label>Channel<span class="required-mark">*</span></label><div class="survey-channel-controls"><details class="survey-channel-picker"><summary><span data-channel-summary>${selected.size?`${selected.size} selected`:"Select channel"}</span><span aria-hidden="true">⌄</span></summary><div class="survey-channel-options"><label><input type="checkbox" data-survey-select-all="${type}" ${channels.length&&channels.every(item=>selected.has(item.id))?"checked":""}> Select all channels (${channels.length})</label>${channels.map(item=>`<label><input type="checkbox" name="channel" value="${esc(item.id)}" data-survey-channel="${type}" ${selected.has(item.id)?"checked":""}> ${esc(item.name)}</label>`).join("")||'<span class="survey-no-channels">No active channels available.</span>'}</div></details><small>${selected.size} channel${selected.size===1?"":"s"} selected</small></div></div>`;
}
function renderSurveyFollowUp(type,config){
  const options=[["none","Don't use follow-up questions"],["all","Use one follow-up question for all scores"],["by-score","Use and create follow-up questions by score"]];
  const scoreStart=type==="nps"?0:1,scoreCount=type==="nps"?11:type==="ces"?7:5;
  return `<fieldset class="survey-follow-up"><legend>Follow-up questions</legend><p>These will be asked after your customer has given the scoring.</p><div class="survey-follow-up-options">${options.map(([value,label])=>`<label><input type="radio" name="${type}-follow-up" value="${value}" data-survey-follow-up="${type}" ${config.followUp===value?"checked":""}> ${label}</label>`).join("")}</div><label class="survey-follow-up-question" ${config.followUp==="none"?"hidden":""}><span data-survey-follow-up-label>${config.followUp==="by-score"?"Questions by score":"Follow-up question"}</span><textarea name="followUpQuestion" data-survey-follow-up-question="${type}" maxlength="240" ${config.followUp==="by-score"?"hidden":""} placeholder="Type your follow-up question">${esc(config.followUpQuestion||"")}</textarea><div class="survey-follow-up-scores" ${config.followUp==="by-score"?"":"hidden"}>${Array.from({length:scoreCount},(_,index)=>`<label>Score ${scoreStart+index}<input type="text" data-survey-follow-up-score="${type}" data-score-index="${index}" maxlength="240" value="${esc(config.followUpByScore?.[index]||"")}" placeholder="Optional follow-up question"></label>`).join("")}</div></label></fieldset>`;
}
function renderSurveyType(type,config){
  const active=state.integrations.filter(item=>item.status==="Aktif"),opened=surveyExpanded===type;
  const title=surveyTypes.find(item=>item.id===type)?.label||type;
  const channelCount=(config.channels||[]).filter(id=>active.some(channel=>channel.id===id)).length;
  const content=type==="csat"?`<section class="survey-question-block"><h3>Survey Q&A</h3><p>Create your survey Q&A and see how it looks to your customers in preview.</p><label>Question<span class="required-mark">*</span><textarea name="question" data-survey-question="${type}" maxlength="240" aria-required="true">${esc(config.question)}</textarea><small class="survey-char-count" data-survey-count="${type}-question">${config.question.length} / 240</small></label><div class="survey-answers"><h3>Answer options<span class="required-mark">*</span></h3><div class="survey-answer-tabs">${config.answers.map((answer,index)=>`<label class="survey-answer-row"><span aria-hidden="true">${esc(answer.emoji)}</span><input type="text" name="answer-${index}" data-survey-answer="${type}" data-answer-index="${index}" maxlength="20" value="${esc(answer.label)}" aria-label="Label pilihan ${index+1}" aria-required="true"><small data-survey-count="${type}-answer-${index}">${answer.label.length}/20</small></label>`).join("")}</div></div></section>${renderSurveyFollowUp(type,config)}`
    :`<section class="survey-question-block"><h3>Survey Q&A</h3><p>Create your survey Q&A and see how it looks to your customers in preview.</p><label>Question<span class="required-mark">*</span><textarea name="question" data-survey-question="${type}" maxlength="240" aria-required="true">${esc(config.question)}</textarea><small class="survey-char-count" data-survey-count="${type}-question">${config.question.length} / 240</small></label><div class="survey-scale-fields"><label>Minimum scale<span class="required-mark">*</span><input type="text" name="minLabel" data-survey-scale="${type}" maxlength="30" value="${esc(config.minLabel)}" aria-required="true"><small data-survey-count="${type}-min">${config.minLabel.length}/30</small></label><span aria-hidden="true">–</span><label>Maximum scale<span class="required-mark">*</span><input type="text" name="maxLabel" data-survey-scale="${type}" maxlength="30" value="${esc(config.maxLabel)}" aria-required="true"><small data-survey-count="${type}-max">${config.maxLabel.length}/30</small></label></div></section>${renderSurveyFollowUp(type,config)}`;
  return `<section class="survey-type-card" data-survey-type="${type}"><div class="survey-type-heading"><label class="survey-toggle" aria-label="Activate ${esc(title)}"><input type="checkbox" name="enabled" data-survey-enabled="${type}" ${config.enabled?"checked":""}><span aria-hidden="true"></span></label><button type="button" class="survey-accordion-toggle" data-survey-accordion="${type}" aria-expanded="${opened}"><span>${esc(title)}</span><small data-survey-channel-count="${type}" ${config.enabled?"":"hidden"}>${channelCount} channel${channelCount>1?"s":""}</small><span aria-hidden="true">${opened?"⌄":"›"}</span></button></div><div class="survey-type-content" ${opened?"":"hidden"}>${renderSurveyChannels(type,config)}${content}</div></section>`;
}
function renderCustomerSurveyPreview(){
  return renderSurveyPreviewMarkup(state.settings.customerSurvey,null);
}
function renderSurveyPreviewMarkup(survey,form){
  const page=form?.querySelector("#surveyPreviewPage")?.value||surveyPreviewPage;
  if(page==="thank-you"){
    const message=form?.querySelector('[name="thankYouMessage"]')?.value??survey.thankYouMessage;
    return `<div class="survey-phone-preview"><div class="survey-phone-browser"><span aria-hidden="true">⌑</span> survey.closepay.id/survey</div><div class="survey-phone-screen survey-phone-thank-you"><div class="survey-thank-you-art" aria-hidden="true"><svg viewBox="0 0 220 170"><path d="m110 20 24 48 53 8-38 37 9 53-48-25-48 25 9-53-38-37 53-8Z" fill="#FFD52A" stroke="#F6BF18" stroke-width="4" stroke-linejoin="round"/><path d="m30 52 5 11 12 2-9 8 2 12-10-6-10 6 2-12-9-8 12-2Z" fill="#FFCF27"/><path d="m183 38 4 9 10 2-7 7 2 10-9-5-8 5 2-10-8-7 10-2Z" fill="#FFCF27"/><path d="m42 130 4 9 10 1-7 7 2 10-9-5-8 5 2-10-8-7 10-1Z" fill="#FFCF27"/><path d="m188 127 4 9 10 1-7 7 2 10-9-5-8 5 2-10-8-7 10-1Z" fill="#FFCF27"/><path d="m62 28 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" fill="#FF8269"/><path d="m162 21 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z" fill="#FF8269"/></svg></div><p>${esc(message)}</p></div><div class="survey-phone-brand">Powered by <strong>closepay</strong></div></div>`;
  }
  const activeTypes=surveyTypes.filter(type=>form?form.querySelector(`[data-survey-enabled="${type.id}"]`)?.checked:survey.types[type.id].enabled);
  const activeType=activeTypes.find(type=>type.id===surveyExpanded)||activeTypes[0];
  if(!activeType)return `<div class="survey-phone-preview"><div class="survey-phone-browser"><span aria-hidden="true">⌑</span> survey.closepay.id/survey</div><div class="survey-phone-screen survey-phone-empty">Activate a survey type to preview this page.</div><div class="survey-phone-brand">Powered by <strong>closepay</strong></div></div>`;
  const config=survey.types[activeType.id],question=form?.querySelector(`[data-survey-question="${activeType.id}"]`)?.value??config.question;
  const title=form?.querySelector('[name="surveyTitle"]')?.value??survey.surveyTitle;
  const answers=activeType.id==="csat"?`<div class="survey-phone-answers">${(form?[...form.querySelectorAll(`[data-survey-answer="${activeType.id}"]`)].map((input,index)=>({label:input.value,emoji:config.answers[index].emoji})):config.answers).map(answer=>`<div><span>${esc(answer.emoji)}</span>${esc(answer.label)}</div>`).join("")}</div>`:`<div class="survey-phone-scale">${Array.from({length:activeType.id==="nps"?11:5},(_,index)=>`<i>${activeType.id==="nps"?index:index+1}</i>`).join("")}</div><div class="survey-phone-scale-labels"><span>${esc(form?.querySelector(`[data-survey-type="${activeType.id}"] [name="minLabel"]`)?.value??config.minLabel)}</span><span>${esc(form?.querySelector(`[data-survey-type="${activeType.id}"] [name="maxLabel"]`)?.value??config.maxLabel)}</span></div>`;
  return `<div class="survey-phone-preview"><div class="survey-phone-browser"><span aria-hidden="true">⌑</span> survey.closepay.id/survey</div><div class="survey-phone-screen survey-phone-question"><strong>${esc(title)}</strong><p>${esc(question)}</p>${answers}<button type="button" disabled>Submit</button></div><div class="survey-phone-brand">Powered by <strong>closepay</strong></div></div>`;
}
function updateCustomerSurveyUI(){
  const form=document.getElementById("customerSurveyForm");if(!form)return;
  const activeTypes=surveyTypes.filter(type=>form.querySelector(`[data-survey-enabled="${type.id}"]`)?.checked);
  surveyTypes.forEach(type=>{
    const section=form.querySelector(`[data-survey-type="${type.id}"]`),selected=[...section.querySelectorAll(`[data-survey-channel="${type.id}"]:checked`)];
    const summary=section.querySelector("[data-channel-summary]");
    summary.textContent=selected.length?`${selected.length} selected`:"Select channel";
    section.querySelector(".survey-channel-controls>small").textContent=`${selected.length} channel${selected.length===1?"":"s"} selected`;
    const selectAll=section.querySelector(`[data-survey-select-all="${type.id}"]`),channels=section.querySelectorAll(`[data-survey-channel="${type.id}"]`);
    selectAll.checked=channels.length>0&&selected.length===channels.length;selectAll.indeterminate=selected.length>0&&selected.length<channels.length;
    const enabled=section.querySelector(`[data-survey-enabled="${type.id}"]`).checked,count=selected.length,countBadge=section.querySelector(`[data-survey-channel-count="${type.id}"]`);
    countBadge.textContent=`${count} channel${count>1?"s":""}`;countBadge.hidden=!enabled;
    const followUp=section.querySelector(`[data-survey-follow-up="${type.id}"]:checked`)?.value||"none";
    const followUpLabel=section.querySelector("[data-survey-follow-up-label]");
    followUpLabel.textContent=followUp==="by-score"?"Questions by score":"Follow-up question";
    section.querySelector(`[data-survey-follow-up-question="${type.id}"]`).closest("label").hidden=followUp==="none";
    section.querySelector(`[data-survey-follow-up-question="${type.id}"]`).hidden=followUp==="by-score";
    section.querySelector(".survey-follow-up-scores").hidden=followUp!=="by-score";
    const question=section.querySelector(`[data-survey-question="${type.id}"]`).value;
    const questionCount=form.querySelector(`[data-survey-count="${type.id}-question"]`);questionCount.textContent=`${question.length} / 240`;
    if(type.id==="csat")section.querySelectorAll(`[data-survey-answer="${type.id}"]`).forEach((input,index)=>{form.querySelector(`[data-survey-count="${type.id}-answer-${index}"]`).textContent=`${input.value.length}/20`;});
    else{
      const min=section.querySelector('[name="minLabel"]'),max=section.querySelector('[name="maxLabel"]');
      section.querySelector(`[data-survey-count="${type.id}-min"]`).textContent=`${min.value.length}/30`;
      section.querySelector(`[data-survey-count="${type.id}-max"]`).textContent=`${max.value.length}/30`;
    }
  });
  const preview=form.querySelector(".survey-preview-content");preview.innerHTML=renderSurveyPreviewMarkup(state.settings.customerSurvey,form);
}
function renderCustomerSurvey(){
  const survey=state.settings.customerSurvey;
  return `<div class="customer-survey-page"><header class="survey-page-heading"><h1>Customer survey settings</h1><p>Atur jenis survei, pertanyaan, kanal, dan cara pengirimannya.</p></header><form id="customerSurveyForm"><div class="survey-settings-layout"><div class="survey-settings-column"><section class="survey-section"><h2>Survey types</h2><p>Activate or deactivate the survey as needed.</p><div class="survey-type-list">${surveyTypes.map(type=>renderSurveyType(type.id,survey.types[type.id])).join("")}</div></section><section class="survey-section survey-greetings"><h2>Survey greetings</h2><p>Write how you want to ask customers to fill in the survey.</p><label class="survey-field-label">Closing message<span class="required-mark">*</span><textarea name="closingMessage" maxlength="240" required>${esc(survey.closingMessage)}</textarea></label><label class="survey-field-label">Title in survey page<span class="required-mark">*</span><input name="surveyTitle" maxlength="100" required value="${esc(survey.surveyTitle)}"></label><label class="survey-field-label">Thank you message<span class="required-mark">*</span><input name="thankYouMessage" maxlength="160" required value="${esc(survey.thankYouMessage)}"></label></section><section class="survey-section survey-sending"><h2>Sending method</h2><p>Choose how you want to send the survey.</p><label class="survey-method-option"><input type="radio" name="sendMethod" value="automatic" ${survey.sendMethod==="automatic"?"checked":""}><span><strong>Automatic</strong><small>Survey will be sent automatically when resolving the message.</small></span></label><label class="survey-method-option"><input type="radio" name="sendMethod" value="manual" ${survey.sendMethod==="manual"?"checked":""}><span><strong>Manual</strong><small>Survey will be optional to send when resolving the message.</small></span></label></section></div><aside class="survey-preview"><h2>Preview</h2><label class="survey-preview-select">Page<select id="surveyPreviewPage" aria-label="Preview page"><option value="survey" ${surveyPreviewPage==="survey"?"selected":""}>Survey page</option><option value="thank-you" ${surveyPreviewPage==="thank-you"?"selected":""}>Thank you page</option></select></label><div class="survey-preview-content">${renderCustomerSurveyPreview()}</div></aside></div><div class="survey-savebar"><button class="button primary" type="submit">Save changes</button></div></form></div>`;
}
function renderScorecard(){
  const resolved=state.tickets.filter(t=>['Selesai','Ditutup'].includes(t.status)).length;
  const open=state.tickets.length-resolved;
  const follow=state.tickets.filter(t=>t.status==='Perlu follow up').length;
  const rated=state.tickets.filter(t=>t.rating>0);
  return settingsOverview("Scorecard","Ringkasan hasil layanan dari seluruh percakapan.",`<div class="stats-row"><div class="panel stat-card"><small>Chat aktif</small><strong>${open}</strong><span>Belum selesai</span></div><div class="panel stat-card"><small>Selesai</small><strong>${resolved}</strong><span>Chat ditangani</span></div><div class="panel stat-card"><small>Perlu follow up</small><strong>${follow}</strong><span>Butuh perhatian</span></div><div class="panel stat-card"><small>Rating</small><strong>${rated.length?(rated.reduce((sum,t)=>sum+t.rating,0)/rated.length).toFixed(1):"—"}</strong><span>Dari ${rated.length} survei</span></div></div>`);
}
function reportOverview(title,description,content){return `<div class="report-overview">${header("REPORT",title,description)}${content}</div>`;}
function reportMetrics(items){return `<div class="stats-row">${items.map(([label,value,note])=>`<div class="panel stat-card"><small>${esc(label)}</small><strong>${esc(value)}</strong><span>${esc(note)}</span></div>`).join("")}</div>`;}
function reportEmpty(label){return `<section class="panel report-empty"><strong>Belum ada data ${label}</strong><p>Hasil ${label} akan tampil setelah data survei atau penilaian tersedia.</p></section>`;}
function reportDateKey(value,timezone=reportTimezoneFilter){
  const parts=new Intl.DateTimeFormat("en-US",{timeZone:timezone,year:"numeric",month:"2-digit",day:"2-digit"}).formatToParts(new Date(value));
  const date=Object.fromEntries(parts.map(part=>[part.type,part.value]));
  return `${date.year}-${date.month}-${date.day}`;
}
function reportScopedTickets(){
  return state.tickets.filter(item=>{const day=reportDateKey(item.created);return day>=(reportFrom||reportDateFilter)&&day<=(reportTo||reportDateFilter)&&(reportChannelFilter==="All channels"||item.channel===reportChannelFilter)&&(reportDivisionFilter==="All divisions"||(item.division||"Customer Service")===reportDivisionFilter)&&(reportAgentFilter==="All agents"||item.agent===reportAgentFilter);});
}
function reportMonthlyTickets(){
  return state.tickets.filter(item=>reportDateKey(item.created).slice(0,7)===reportDateFilter.slice(0,7)&&(reportChannelFilter==="All channels"||item.channel===reportChannelFilter)&&(reportDivisionFilter==="All divisions"||(item.division||"Customer Service")===reportDivisionFilter)&&(reportAgentFilter==="All agents"||item.agent===reportAgentFilter));
}
function reportFormatDuration(seconds){
  const total=Math.max(0,Math.round(seconds||0)),hours=Math.floor(total/3600),minutes=Math.floor(total%3600/60),remaining=total%60;
  return `${String(hours).padStart(2,"0")}h ${String(minutes).padStart(2,"0")}m ${String(remaining).padStart(2,"0")}s`;
}
function reportAverageFirstResponse(items){
  const times=items.map(item=>{
    const firstReply=item.messages?.find(message=>message.type==="agent");
    const match=String(firstReply?.at||"").match(/^(\d{1,2})[:.](\d{2})/);
    if(!match)return null;
    const created=new Date(item.created);
    const createdParts=new Intl.DateTimeFormat("en-US",{timeZone:reportTimezoneFilter,hour:"2-digit",minute:"2-digit",hour12:false}).formatToParts(created);
    const createdTime=Object.fromEntries(createdParts.map(part=>[part.type,part.value]));
    let seconds=(Number(match[1])*60+Number(match[2])-Number(createdTime.hour)*60-Number(createdTime.minute))*60;
    if(seconds<0)seconds+=86400;
    return seconds;
  }).filter(value=>value!==null);
  return times.length?times.reduce((sum,value)=>sum+value,0)/times.length:0;
}
function reportOperationalMetrics(items){
 const first=items.filter(item=>item.firstAgentResponseAt),closed=items.filter(item=>item.resolvedAt);
 const average=(list,key)=>list.length?list.reduce((sum,item)=>sum+syncSla(item)[key],0)/list.length/1000:0;
 const responded=first.length,resolved=closed.length;
 const metFirst=first.filter(item=>!syncSla(item).is_frt_breached).length,metResolution=closed.filter(item=>!syncSla(item).is_resolution_breached).length;
 return {frt:average(first,"firstMs"),resolution:average(closed,"resolutionMs"),art:average(first,"firstMs"),frtCompliance:responded?metFirst/responded*100:null,resolutionCompliance:resolved?metResolution/resolved*100:null};
}
function reportAgentAvailability(agent){
 const from=new Date(`${reportFrom||reportDateFilter}T00:00:00+07:00`).getTime(),to=Math.min(Date.now(),new Date(`${reportTo||reportDateFilter}T23:59:59+07:00`).getTime());
 if(to<=from)return {online:0,offline:0,shift:0};
 const spans=[...(agent.availabilityLog||[]),...(agent.onlineSince?[{start:agent.onlineSince,end:new Date().toISOString()}]:[])];
 const online=spans.reduce((sum,item)=>sum+Math.max(0,Math.min(to,new Date(item.end).getTime())-Math.max(from,new Date(item.start).getTime())),0);
 let shift=0;for(let day=from;day<=to;day+=86400000){const local=CSEngine.dateParts(day,state.settings.timezone),hours=state.settings.officeHours[local.day];if(hours?.enabled&&!state.settings.holidays.some(item=>local.date>=item.start&&local.date<=item.end)){const [inHour,inMinute]=hours.in.split(":").map(Number),[outHour,outMinute]=hours.out.split(":").map(Number);shift+=Math.max(0,(outHour*60+outMinute-inHour*60-inMinute)*60000);}}
 return {online,offline:Math.max(0,to-from-online),shift};
}
function reportExportButton(section){return `<button type="button" class="report-export" data-action="report-export" data-report-export="${section}" data-format="csv">⇩ CSV</button><button type="button" class="report-export" data-action="report-export" data-report-export="${section}" data-format="xlsx">⇩ XLSX</button>`;}
function reportSection(title,description,section,content,extra=""){
  return `<section class="panel report-section"><div class="report-section-heading"><div><h2>${esc(title)}</h2>${description?`<p>${esc(description)}</p>`:""}</div><div class="report-section-actions">${extra}${reportExportButton(section)}</div></div>${content}</section>`;
}
function reportEmptyVisual(title,description,kind="chart"){
  const art=kind==="folder"?`<svg viewBox="0 0 120 100" aria-hidden="true"><path d="M22 22h28l9 9h39a7 7 0 0 1 7 7v44H15V29a7 7 0 0 1 7-7Z" fill="#76AEFF"/><path d="M16 40h89l-8 42H16Z" fill="#A9CCFF"/><circle cx="47" cy="51" r="20" fill="#BE7AE8"/><circle cx="47" cy="51" r="14" fill="#ECD9F8"/><text x="43" y="58" fill="#F2AD41" font-size="21" font-weight="700">?</text></svg>`:`<svg viewBox="0 0 120 100" aria-hidden="true"><ellipse cx="60" cy="84" rx="39" ry="7" fill="#E8EEF7"/><path d="m31 71 8-24 10 11 12-28 11 24 11-13 9 30Z" fill="#C5D0E0"/><path d="m47 70 11-17 8 9 13-27 9 35Z" fill="#A98BD7"/><circle cx="35" cy="35" r="14" fill="#D799B2"/><circle cx="35" cy="35" r="6" fill="#F8E7EB"/><circle cx="91" cy="42" r="12" fill="#D799B2"/><circle cx="91" cy="42" r="5" fill="#F8E7EB"/><path d="m48 76 25-16 13-19" fill="none" stroke="#D77B9C" stroke-width="5" stroke-linecap="round"/></svg>`;
  return `<div class="report-empty-visual">${art}<strong>${esc(title)}</strong><span>${esc(description)}</span></div>`;
}
function reportCsvCell(value){return `"${String(value??"").replaceAll('"','""')}"`;}
function exportGeneralReport(section,format="csv"){
  const tickets=reportScopedTickets();
  let rows=[["Conversation ID","Customer","Channel","Agent","Status","Tag","Created"]];
  if(section==="agent-supervisor")rows=[["Role","Handled conversations"],["Agent",tickets.filter(item=>state.agents.find(agent=>agent.name===item.agent)?.role==="Agent").length],["Supervisor",tickets.filter(item=>state.agents.find(agent=>agent.name===item.agent)?.role==="Supervisor").length]];
  else if(section==="online-status")rows=[["Status","Total"],["Online",state.agents.filter(agent=>agent.online).length],["Offline",state.agents.filter(agent=>!agent.online).length]];
  else if(section==="activity"){const resolved=tickets.filter(item=>["Selesai","Ditutup"].includes(item.status)).length;rows=[["Metric","Total"],["Total conversations",tickets.length],["Unassigned",tickets.filter(item=>!item.agent||item.status==="Belum ditugaskan").length],["Assigned",tickets.filter(item=>item.agent&&!["Selesai","Ditutup"].includes(item.status)).length],["Resolved",resolved],["Campaign",tickets.filter(item=>item.campaigns?.length).length]];}
  else if(section==="tags"){const tags=tickets.reduce((all,item)=>{const tag=item.tag||"Untagged";all[tag]=(all[tag]||0)+1;return all;},{});rows=[["Tag","Conversations","Percent"],...Object.entries(tags).map(([tag,count])=>[tag,count,tickets.length?Number((count/tickets.length*100).toFixed(2)):0])];}
  else if(section==="monthly-active-users")rows=[["User ID"],...[...new Set(reportMonthlyTickets().map(item=>item.userId))].map(id=>[id])];
  else if(section==="performance"){const value=reportOperationalMetrics(tickets);rows=[["Metric","Value"],["Average first response time",reportFormatDuration(value.frt)],["Average response time",reportFormatDuration(value.art)],["Average resolution time",reportFormatDuration(value.resolution)],["FRT SLA met (%)",value.frtCompliance??""],["Resolution SLA met (%)",value.resolutionCompliance??""],["Monthly active users",new Set(reportMonthlyTickets().map(item=>item.userId)).size]];}
  else if(section==="new-conversations"){
    if(reportInterval==="Hourly")rows=[["Hour","Conversations"],...Array.from({length:24},(_,hour)=>[String(hour).padStart(2,"0"),tickets.filter(item=>Number(new Intl.DateTimeFormat("en-US",{timeZone:reportTimezoneFilter,hour:"2-digit",hour12:false}).format(new Date(item.created)))===hour).length])];
    else{const days=tickets.reduce((all,item)=>{const day=reportDateKey(item.created);all[day]=(all[day]||0)+1;return all;},{});rows=[["Date","Conversations"],...Object.entries(days)];}
  }
  else rows=[rows[0],...tickets.map(item=>[item.id,item.name,item.channel,item.agent||"Unassigned",item.status,item.tag,reportDateKey(item.created)])];
  const csv=rows.map(row=>row.map(reportCsvCell).join(",")).join("\r\n");
  const blob=format==="xlsx"?CSXlsx.workbook(rows):new Blob(["\uFEFF"+csv],{type:"text/csv;charset=utf-8"});
  const url=URL.createObjectURL(blob);
  const link=document.createElement("a");link.href=url;link.download=`closepay-general-report-${section}-${reportDateFilter}.${format}`;document.body.append(link);link.click();link.remove();URL.revokeObjectURL(url);
  toast("Report exported.");
}
function renderGeneralReport(){
  const tickets=reportScopedTickets(),monthly=reportMonthlyTickets();
  const resolved=tickets.filter(item=>["Selesai","Ditutup"].includes(item.status)).length;
  const assigned=tickets.filter(item=>item.agent&&!["Selesai","Ditutup"].includes(item.status)).length;
  const unassigned=tickets.filter(item=>!item.agent||item.status==="Belum ditugaskan").length;
  const campaign=tickets.filter(item=>item.campaigns?.length).length;
  const agents=tickets.filter(item=>state.agents.find(agent=>agent.name===item.agent)?.role==="Agent").length;
  const supervisors=tickets.filter(item=>state.agents.find(agent=>agent.name===item.agent)?.role==="Supervisor").length;
  const online=state.agents.filter(agent=>agent.online).length,offline=state.agents.length-online;
  const userIds=[...new Set(monthly.map(item=>item.userId))];
  const matching=tickets.slice(0,2000).filter(item=>!reportConversationSearch||`${item.id} ${item.name} ${item.issue} ${item.channel} ${item.agent||""}`.toLowerCase().includes(reportConversationSearch.toLowerCase()));
  const pages=Math.ceil(matching.length/reportRowsPerPage),start=(reportListPage-1)*reportRowsPerPage,visible=matching.slice(start,start+reportRowsPerPage);
  const dateLabel=new Date(`${reportDateFilter}T12:00:00`).toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});
  const todayJakarta=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"}));
  const todayKey=[todayJakarta.getFullYear(),String(todayJakarta.getMonth()+1).padStart(2,"0"),String(todayJakarta.getDate()).padStart(2,"0")].join("-");
  const timezones=[["Asia/Jakarta","(UTC+07:00) Asia/Jakarta"],["Asia/Makassar","(UTC+08:00) Asia/Makassar"],["Asia/Jayapura","(UTC+09:00) Asia/Jayapura"],["UTC","(UTC+00:00) UTC"]];
  const divisions=["All divisions",...new Set(state.tickets.map(item=>item.division||"Customer Service"))];
  const filters=`<div class="report-filters"><label><span class="sr-only">Timezone</span><select id="reportTimezone">${timezones.map(([value,label])=>`<option value="${value}" ${reportTimezoneFilter===value?"selected":""}>${label}</option>`).join("")}</select></label><label><span class="sr-only">Channel</span><select id="reportChannel"><option ${reportChannelFilter==="All channels"?"selected":""}>All channels</option>${["PSP Mobile","PSP Admin","Merchant"].map(channel=>`<option ${reportChannelFilter===channel?"selected":""}>${channel}</option>`).join("")}</select></label><label class="report-date-filter"><span class="sr-only">Report date</span><input id="reportDate" type="date" value="${esc(reportDateFilter)}" aria-label="Report date"><small>${reportDateFilter===todayKey?"Today":"Selected date"} (${dateLabel})</small></label><label><span class="sr-only">Division</span><select id="reportDivision">${divisions.map(division=>`<option ${reportDivisionFilter===division?"selected":""}>${esc(division)}</option>`).join("")}</select></label></div>`;
  const operational=reportOperationalMetrics(tickets);
  const performance=`<div class="report-kpi-grid">${[["Average first response time",reportFormatDuration(operational.frt)],["Average response time",reportFormatDuration(operational.art)],["Average resolution time",reportFormatDuration(operational.resolution)],["FRT SLA met",operational.frtCompliance===null?"—":operational.frtCompliance.toFixed(2)+"%"],["Resolution SLA met",operational.resolutionCompliance===null?"—":operational.resolutionCompliance.toFixed(2)+"%"],["Monthly active users",userIds.length]].map(([label,value])=>`<div><strong>${esc(value)}</strong><span>${esc(label)}</span></div>`).join("")}</div>`;
  const activity=`<div class="report-kpi-grid report-activity-kpis">${[["Total conversations",tickets.length],["Unassigned",unassigned],["Assigned",assigned],["Resolved",resolved],["Campaign",campaign]].map(([label,value])=>`<div><strong>${value}</strong><span>${label}</span></div>`).join("")}</div>`;
  const staffTable=`<div class="report-staff-summary"><strong>${agents+supervisors}</strong><span>Handled conversations</span><div class="report-staff-row"><i class="agent-dot"></i>Agent <b>${agents} chats</b></div><div class="report-staff-row"><i class="supervisor-dot"></i>SPV <b>${supervisors} chats</b></div></div>`;
  const onlineTable=`<div class="report-staff-summary"><strong>${online+offline}</strong><span>Total users</span><div class="report-staff-row"><i class="online-dot"></i>Online <b>${online} users</b></div><div class="report-staff-row"><i class="offline-dot"></i>Offline <b>${offline} users</b></div>${state.agents.map(agent=>{const time=reportAgentAvailability(agent);return `<div class="report-staff-row"><span>${esc(agent.name)}</span><b>${Math.round(time.online/3600000)}h online · ${Math.round(time.offline/3600000)}h offline / ${Math.round(time.shift/3600000)}h shift</b></div>`;}).join("")}</div>`;
  const mau=state.tickets.length?`<div class="report-bar-chart">${Array.from({length:12},(_,index)=>{const date=new Date(`${reportDateFilter}T12:00:00`);date.setMonth(date.getMonth()-11+index);const key=[date.getFullYear(),String(date.getMonth()+1).padStart(2,"0")].join("-");const count=new Set(state.tickets.filter(item=>reportDateKey(item.created).slice(0,7)===key).map(item=>item.userId)).size;return `<div><i style="height:${Math.max(8,count*26)}px" title="${count} unique customers"></i><span>${key.slice(5)}</span></div>`;}).join("")}</div>`:reportEmptyVisual("No data yet","Try to change your filter to show the data.");
  const tags=Object.entries(tickets.reduce((all,item)=>{const tag=item.tag||"Untagged";all[tag]=(all[tag]||0)+1;return all;},{}));
  const tagContent=tags.length?`<div class="report-tag-list">${tags.map(([tag,count])=>`<div><span>${esc(tag)}</span><b>${count} · ${(count/tickets.length*100).toFixed(1)}%</b><i style="width:${Math.max(8,count/tickets.length*100)}%"></i></div>`).join("")}</div>`:reportEmptyVisual("No data yet","Try to change your filter to show the data.");
  const conversationRows=visible.map(item=>`<tr><td>${esc(new Date(item.created).toLocaleString("en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}</td><td><button class="link-button" data-open-ticket="${esc(item.id)}">${esc(item.id)}</button></td><td>${esc(item.name)}</td><td>${esc(item.channel)}</td><td>${esc(item.agent||"Unassigned")}</td><td>${esc(item.status)}</td><td>${esc(item.tag)}</td></tr>`).join("");
  const conversationTable=visible.length?`<div class="table-wrap"><table class="report-conversation-table"><thead><tr><th>Date</th><th>Conversation</th><th>Customer</th><th>Channel</th><th>Agent</th><th>Status</th><th>Tag</th></tr></thead><tbody>${conversationRows}</tbody></table></div>`:reportEmptyVisual("No data yet","Your list of data will appear here.","folder");
  const pagination=`<div class="report-pagination"><label>Rows per page <select id="reportRowsPerPage">${[10,25,50].map(count=>`<option value="${count}" ${reportRowsPerPage===count?"selected":""}>${count}</option>`).join("")}</select></label><span>Showing ${matching.length?start+1:0} - ${Math.min(start+reportRowsPerPage,matching.length)} of ${matching.length}</span><div><span>${reportListPage} of ${pages} page${pages===1?"":"s"}</span><button type="button" data-action="report-page-back" aria-label="Previous page" ${reportListPage<=1?"disabled":""}>‹</button><button type="button" data-action="report-page-forward" aria-label="Next page" ${reportListPage>=pages?"disabled":""}>›</button></div></div>`;
  const periodData=reportInterval==="Hourly"?Array.from({length:24},(_,hour)=>({label:String(hour).padStart(2,"0"),value:tickets.filter(item=>Number(new Intl.DateTimeFormat("en-US",{timeZone:reportTimezoneFilter,hour:"2-digit",hour12:false}).format(new Date(item.created)))===hour).length})):tickets.reduce((all,item)=>{const day=reportDateKey(item.created);all[day]=(all[day]||0)+1;return all;},{});
  const periodEntries=Array.isArray(periodData)?periodData:Object.entries(periodData).map(([label,value])=>({label:label.slice(-2),value}));
  const periodChart=tickets.length?`<div class="report-period-chart">${periodEntries.map(item=>`<div title="${item.label}: ${item.value}"><i style="height:${Math.max(3,item.value*22)}px"></i><span>${item.label}</span></div>`).join("")}</div>`:reportEmptyVisual("No data yet","Try to change your filter to show the data.");
  return `<div class="report-dashboard"><h1>General</h1>${filters}<div class="report-filters"><label>Dari tanggal<input id="reportFrom" type="date" value="${esc(reportFrom)}"></label><label>Sampai tanggal<input id="reportTo" type="date" value="${esc(reportTo)}"></label><label>Agent<select id="reportAgent"><option>All agents</option>${state.agents.map(agent=>`<option ${reportAgentFilter===agent.name?"selected":""}>${esc(agent.name)}</option>`).join("")}</select></label><button type="button" data-action="report-clear-dates">Semua tanggal</button></div>
    ${reportSection("Performance overview","","performance",performance)}
    ${reportSection("Conversation activity overview","Shows a summary of conversation activity during the selected filter period, which are total conversations, unassigned, assigned, resolved, and campaign.","activity",activity)}
    <div class="report-two-column">${reportSection("Agent vs supervisor","Number of agents and supervisors.","agent-supervisor",staffTable)}${reportSection("Agent online status","","online-status",onlineTable)}</div>
    <div class="report-two-column">${reportSection("All time historical MAU","Active users for the current period, calculated from the 1st day of the month to the present.","monthly-active-users",mau)}${reportSection("Conversations by tags","Number of conversations based on their tags within the selected period.","tags",tagContent)}</div>
    ${reportSection("List of conversations","Showing the last 2000 conversations across channels.","conversations",`${`<label class="report-search"><span aria-hidden="true">⌕</span><input id="reportConversationSearch" type="search" value="${esc(reportConversationSearch)}" placeholder="Search..." aria-label="Search conversations"></label>`}${conversationTable}${pagination}`)}
    ${reportSection("New conversations per period","Shows the number of conversations created within the selected filters period.","new-conversations",periodChart,`<div class="report-interval"><button type="button" data-report-interval="Hourly" class="${reportInterval==="Hourly"?"active":""}">Hourly</button><button type="button" data-report-interval="Daily" class="${reportInterval==="Daily"?"active":""}">Daily</button></div>`)}
  </div>`;
}
function renderReportSla(){
  const active=state.tickets.filter(t=>!["Selesai","Ditutup"].includes(t.status));
  const overdue=active.filter(t=>duration(t)==="Lewat 24 jam");
  return reportOverview("SLA","Pantau percakapan aktif terhadap target 24 jam.",reportMetrics([["Dalam SLA",active.length-overdue.length,"Chat aktif"],["Lewat SLA",overdue.length,"Perlu tindak lanjut"]])+settingsTable("Percakapan lewat SLA",["Percakapan","Pelanggan","Status"],overdue.map(t=>`<tr><td><button class="link-button" data-open-ticket="${esc(t.id)}">${esc(t.id)}</button></td><td>${esc(t.name)}</td><td>${pill(t.status,statusType(t.status))}</td></tr>`).join(""),"Tidak ada percakapan lewat SLA."));
}
function renderReportQuality(){return reportOverview("Quality Scoring","Hasil penilaian kualitas penanganan agent.",reportEmpty("Quality Scoring"));}
function renderReportPerformance(){
  return reportOverview("Performance","Performa penanganan chat per agent.",settingsTable("Kinerja agent",["Agent","Chat aktif","Selesai"],state.agents.map(a=>{const chats=state.tickets.filter(t=>t.agent===a.name);return `<tr><td>${esc(a.name)}</td><td>${chats.filter(t=>!["Selesai","Ditutup"].includes(t.status)).length}</td><td>${chats.filter(t=>["Selesai","Ditutup"].includes(t.status)).length}</td></tr>`;}).join(""),"Belum ada agent."));
}
function surveyReportResponses(type){
  return state.tickets.flatMap(ticket=>{
    const modern=(ticket.surveys||[]).filter(item=>item.type===type&&item.status==="answered");
    if(modern.length)return modern.map(item=>({respondent:ticket.name,accountId:ticket.userId,responseAt:item.answeredAt,channel:ticket.channel,agent:ticket.agent||"—",comment:item.comment||"",score:Number(item.score),ticketId:ticket.id}));
    const legacy=type==="csat"&&Number(ticket.rating)>0?{score:ticket.rating,comment:ticket.csatComment||"",responseAt:ticket.csatResponseAt||ticket.created}:null;
    const stored=ticket.surveyResponses?.[type]||legacy;
    if(!stored||stored.score===null||stored.score===undefined||stored.score==="")return [];
    const score=Number(stored.score),max=type==="nps"?10:type==="ces"?7:5,min=type==="nps"?0:1;
    if(!Number.isFinite(score)||score<min||score>max)return [];
    return [{respondent:stored.respondent||ticket.name,accountId:stored.accountId||ticket.userId,responseAt:stored.responseAt||ticket.created,channel:stored.channel||ticket.channel,agent:stored.agent||ticket.agent||"—",comment:stored.comment||"",score,ticketId:ticket.id}];
  }).filter(item=>{
    const date=new Date(item.responseAt),now=Date.now();
    if(Number.isNaN(date.getTime()))return false;
    if(surveyReportPeriod==="7d"&&date.getTime()<now-7*86400000)return false;
    if(surveyReportPeriod==="30d"&&date.getTime()<now-30*86400000)return false;
    return (surveyReportChannel==="all"||item.channel===surveyReportChannel)&&(!surveyReportDay||reportDateKey(item.responseAt,"Asia/Jakarta")===surveyReportDay)&&(type==="nps"||surveyReportAgent==="all"||item.agent===surveyReportAgent);
  }).sort((a,b)=>new Date(b.responseAt)-new Date(a.responseAt));
}
function surveyReportSummary(type){
 const sent=state.tickets.flatMap(ticket=>(ticket.surveys||[]).filter(item=>item.type===type).map(item=>({ticket,item}))).filter(({ticket,item})=>{const date=new Date(item.sentAt),now=Date.now();return (surveyReportPeriod==="all"||date.getTime()>=now-(surveyReportPeriod==="7d"?7:30)*86400000)&&(surveyReportChannel==="all"||ticket.channel===surveyReportChannel)&&(!surveyReportDay||reportDateKey(item.sentAt,"Asia/Jakarta")===surveyReportDay)&&(surveyReportAgent==="all"||ticket.agent===surveyReportAgent);});
 return CSEngine.surveyScores(sent.map(({item})=>item));
}
function surveyReportFilters(type){
  const channels=[...new Set(state.tickets.map(item=>item.channel))],agents=[...new Set(state.agents.map(item=>item.name))];
  return `<section class="panel survey-report-filter-panel"><div class="survey-report-filter-heading"><div><h2>Filter laporan</h2><p>Pilih data yang ingin ditampilkan.</p></div><button type="button" class="button" data-action="reset-survey-report-filters">Reset filter</button></div><div class="survey-report-filters"><label>Waktu<select id="surveyReportPeriod"><option value="all" ${surveyReportPeriod==="all"?"selected":""}>Semua waktu</option><option value="7d" ${surveyReportPeriod==="7d"?"selected":""}>7 hari terakhir</option><option value="30d" ${surveyReportPeriod==="30d"?"selected":""}>30 hari terakhir</option></select></label><label>Channel<select id="surveyReportChannel"><option value="all">Semua channel</option>${channels.map(channel=>`<option value="${esc(channel)}" ${surveyReportChannel===channel?"selected":""}>${esc(channel)}</option>`).join("")}</select></label><label>Hari<input id="surveyReportDay" type="date" value="${esc(surveyReportDay)}"></label>${type==="nps"?"":`<label>Agent<select id="surveyReportAgent"><option value="all">Semua agent</option>${agents.map(agent=>`<option value="${esc(agent)}" ${surveyReportAgent===agent?"selected":""}>${esc(agent)}</option>`).join("")}</select></label>`}</div></section>`;
}
function surveyReportOverview(title,description,content){
  return `<div class="survey-report-page"><header class="survey-report-page-heading"><span>REPORT / SURVEY</span><h1>${esc(title)}</h1><p>${esc(description)}</p></header><div class="survey-report-content">${content}</div></div>`;
}
function surveyReportSection(title,content,description=""){
  return `<section class="panel survey-report-section"><div class="survey-report-heading"><h2>${esc(title)}</h2>${description?`<p>${esc(description)}</p>`:""}</div>${content}</section>`;
}
function surveyReportBreakdown(items){
  const total=items.reduce((sum,item)=>sum+item.count,0);
  return total?`<div class="survey-report-breakdown">${items.map(item=>`<div class="survey-report-breakdown-row"><span>${esc(item.label)}</span><div class="survey-report-track"><i style="width:${item.count/total*100}%"></i></div><strong>${item.count}</strong><small>${Math.round(item.count/total*100)}%</small></div>`).join("")}</div>`:reportEmptyVisual("Belum ada respons","Ubah filter atau tunggu respons survei.");
}
function surveyReportTable(type,rows){
  const first=type==="nps"?"Response":"Respondent",headers=[first,"Account ID","Response Date","Channel",...(type==="nps"?[]:["Agent"]),"Comment","Score"];
  return `<div class="table-wrap"><table class="survey-report-table"><thead><tr>${headers.map(label=>`<th>${label}</th>`).join("")}</tr></thead><tbody>${rows.map(item=>`<tr><td><button class="link-button" data-open-ticket="${esc(item.ticketId)}">${esc(item.respondent)}</button></td><td>${esc(item.accountId)}</td><td>${esc(new Date(item.responseAt).toLocaleString("id-ID",{timeZone:"Asia/Jakarta",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"}))}</td><td>${esc(item.channel)}</td>${type==="nps"?"":`<td>${esc(item.agent)}</td>`}<td class="survey-report-comment">${esc(item.comment||"—")}</td><td><strong>${item.score} / ${type==="nps"?10:5}</strong></td></tr>`).join("")||`<tr><td colspan="${headers.length}" class="account-empty">Belum ada respons untuk filter ini.</td></tr>`}</tbody></table></div>`;
}
function renderReportCsat(){
  const rows=surveyReportResponses("csat"),average=rows.length?(rows.reduce((sum,item)=>sum+item.score,0)/rows.length).toFixed(1):"—";
  const summary=surveyReportSummary("csat");
  const labels=state.settings.customerSurvey.types.csat.answers.map((answer,index)=>answer.label||`Skor ${index+1}`);
  const breakdown=surveyReportBreakdown(labels.map((label,index)=>({label:`${index+1} · ${label}`,count:rows.filter(item=>item.score===index+1).length})));
  return surveyReportOverview("CSAT","Customer Satisfaction Score",surveyReportFilters("csat")+reportMetrics([["Response Rate",summary.responseRate===null?"—":summary.responseRate+"%",`${summary.answered} / ${summary.sent} survei`],["CSAT Score",summary.csat===null?"—":summary.csat+"%","Skor 4–5 / respons"],["Skor 1–3",summary.csatLow===null?"—":summary.csatLow+"%","Breakdown skor rendah"],["Average Score",average,"Skala 1–5"]])+surveyReportSection("CSAT Breakdown",breakdown)+surveyReportSection("CSAT Responses",surveyReportTable("csat",rows),"Tanggal respons lama mengikuti tanggal percakapan."));
}
function renderReportCes(){
  const rows=surveyReportResponses("ces"),average=rows.length?(rows.reduce((sum,item)=>sum+item.score,0)/rows.length).toFixed(1):"—";
  const summary=surveyReportSummary("ces");
  const groups=[["Difficult",score=>score<=3],["Neutral",score=>score===4],["Easy",score=>score>=5]];
  return surveyReportOverview("CES","Customer Effort Score",surveyReportFilters("ces")+reportMetrics([["Response Rate",summary.responseRate===null?"—":summary.responseRate+"%",`${summary.answered} / ${summary.sent} survei`],["CES Mean",summary.ces===null?"—":summary.ces,"Skala 1–7"]])+surveyReportSection("CES Rating",`<div class="survey-report-rating"><div class="survey-report-average"><span>Average</span><strong>${average}</strong><small>Skala 1–7 · ${rows.length} respons</small></div>${groups.map(([label,match])=>`<div class="survey-report-rating-group"><span>${label}</span><strong>${rows.filter(item=>match(item.score)).length}</strong><small>${rows.length?Math.round(rows.filter(item=>match(item.score)).length/rows.length*100):0}% respons</small></div>`).join("")}</div>`)+surveyReportSection("CES Responses",surveyReportTable("ces",rows)));
}
function renderReportNps(){
  const rows=surveyReportResponses("nps"),promoters=rows.filter(item=>item.score>=9).length,passives=rows.filter(item=>item.score>=7&&item.score<=8).length,detractors=rows.filter(item=>item.score<=6).length;
  const summary=surveyReportSummary("nps");
  const overall=rows.length?Math.round((promoters-detractors)/rows.length*100):"—";
  return surveyReportOverview("NPS","Net Promoter Score",surveyReportFilters("nps")+reportMetrics([["Response Rate",summary.responseRate===null?"—":summary.responseRate+"%",`${summary.answered} / ${summary.sent} survei`],["NPS",summary.nps===null?"—":summary.nps,"Promoters − detractors"]])+surveyReportSection("Overall NPS",`<div class="survey-report-overall"><strong>${overall}</strong><span>${rows.length?"Skor dari −100 hingga +100":"Belum ada respons"}</span><small>${rows.length} respons masuk</small></div>`)+surveyReportSection("NPS Breakdown",surveyReportBreakdown([{label:"Promoters · 9–10",count:promoters},{label:"Passives · 7–8",count:passives},{label:"Detractors · 0–6",count:detractors}]))+surveyReportSection("NPS Responses",surveyReportTable("nps",rows)));
}
function renderSettings(){
  const s=state.settings;
  const tabs=`<div class="settings-tabs" role="tablist" aria-label="Pengaturan Inbox">${["Auto Responder","Office Hours","Routing & SLA","Template","Tags","Customer Idle"].map(name=>`<button role="tab" aria-selected="${settingsTab===name}" class="${settingsTab===name?"active":""}" data-settings-tab="${name}">${name}</button>`).join("")}</div>`;
  const days=[["1","Senin"],["2","Selasa"],["3","Rabu"],["4","Kamis"],["5","Jumat"],["6","Sabtu"],["0","Minggu"]];
  return `${header("KONTROL","Pengaturan · Inbox","Pilih tab untuk mengatur layanan Inbox.")}${tabs}<div class="settings-stack">
  <section class="panel settings-section" ${settingsTab==="Routing & SLA"?"":"hidden"}><h2>Routing & SLA</h2><form id="routingSlaForm" class="settings-form-grid"><label>Metode distribusi<select name="routingMethod"><option value="manual" ${s.routingMethod==="manual"?"selected":""}>Manual</option><option value="round-robin" ${s.routingMethod==="round-robin"?"selected":""}>Round Robin</option><option value="least-active" ${s.routingMethod==="least-active"?"selected":""}>Least Active</option></select></label><label>Maksimum chat aktif per agen<input name="maxOngoingChats" type="number" min="1" max="100" value="${esc(s.maxOngoingChats)}" required></label><label>Target FRT (menit)<input name="frtMinutes" type="number" min="1" value="${esc(s.frtMinutes)}" required></label><label>Target resolusi (menit)<input name="resolutionMinutes" type="number" min="1" value="${esc(s.resolutionMinutes)}" required></label><label><input name="pausePendingSla" type="checkbox" ${s.pausePendingSla?"checked":""}> Jeda SLA saat Pending</label><button class="button primary" type="submit">Simpan Routing & SLA</button></form><p>Antrean diproses FIFO pada jam kerja saat agen online dan kapasitas tersedia.</p></section>
  <section class="panel settings-section" ${settingsTab==="Office Hours"?"":"hidden"}><h2>Hari libur</h2><div>${s.holidays.map((item,index)=>`<div class="holiday-row"><strong>${esc(item.start)} – ${esc(item.end)}</strong> · ${esc(item.description)} <button type="button" data-action="delete-holiday" data-index="${index}">Hapus</button></div>`).join("")||"Belum ada hari libur."}</div><form id="holidayForm" class="settings-form-grid"><label>Mulai<input name="start" type="date" required></label><label>Sampai<input name="end" type="date" required></label><label>Deskripsi<input name="description" maxlength="100" required></label><button class="button primary" type="submit">Tambah hari libur</button></form></section>
  <section class="panel settings-section" ${settingsTab==="Auto Responder"?"":"hidden"}><h2>Auto Responder</h2><p>Balasan sesuai ketersediaan layanan.</p><form id="autoResponderForm" class="responder-grid"><label class="responder-column">Greeting · jam kerja dan agen tersedia<textarea name="greeting" required>${esc(s.greeting)}</textarea></label><label class="responder-column">Away / Busy · jam kerja tanpa agen online<textarea name="busyReply" required>${esc(s.busyReply)}</textarea></label><label class="responder-column">Out of Office · luar jam kerja<textarea name="afterHours" required>${esc(s.afterHours)}</textarea></label><button class="button primary" type="submit">Simpan Auto Responder</button></form></section>
  <section class="panel settings-section" ${settingsTab==="Office Hours"?"":"hidden"}><h2>Office Hours</h2><form id="officeHoursForm"><label class="timezone-field">Set Geolocation<select name="timezone"><option value="Asia/Jakarta" ${s.timezone==="Asia/Jakarta"?"selected":""}>Jakarta · WIB (UTC+7)</option><option value="Asia/Makassar" ${s.timezone==="Asia/Makassar"?"selected":""}>Makassar · WITA (UTC+8)</option><option value="Asia/Jayapura" ${s.timezone==="Asia/Jayapura"?"selected":""}>Jayapura · WIT (UTC+9)</option></select></label><div class="table-wrap"><table class="office-hours-table"><thead><tr><th>DAY</th><th>TIME IN</th><th>TIME OUT</th></tr></thead><tbody>${days.map(([id,name])=>{const row=s.officeHours[id];return `<tr><td><label class="day-switch"><input type="checkbox" name="day_${id}_enabled" ${row.enabled?"checked":""}> ${name}</label></td><td><input type="time" name="day_${id}_in" value="${esc(row.in)}" required></td><td><input type="time" name="day_${id}_out" value="${esc(row.out)}" required></td></tr>`;}).join("")}</tbody></table></div><div class="office-holiday"><label>Tanggal merah berikutnya<input type="date" name="holiday" value="${esc(s.holiday)}"></label><label>Pesan tanggal merah<textarea name="holidayReply">${esc(s.holidayReply)}</textarea></label></div><button class="button primary" type="submit">Simpan Office Hours</button></form></section>
  <section class="panel settings-section" ${settingsTab==="Template"?"":"hidden"}><h2>Template</h2><div class="table-wrap"><table><thead><tr><th>TEMPLATE COMMAND</th><th>TEMPLATE CONTENT</th></tr></thead><tbody>${state.templates.map(t=>`<tr><td><code>${esc(t.command)}</code></td><td class="wrap-cell">${esc(t.text)}</td></tr>`).join("")}</tbody></table></div><form id="templateForm" class="settings-add-form"><label>Template command<input name="command" required maxlength="24" placeholder="/contoh"></label><label>Template content<textarea name="content" required placeholder="Isi balasan; gunakan {nama} bila perlu"></textarea></label><button class="button primary" type="submit">Add Template</button></form></section>
  <section class="panel settings-section" ${settingsTab==="Tags"?"":"hidden"}><h2>Tags</h2><div class="table-wrap"><table><thead><tr><th>TABLE TAGS</th></tr></thead><tbody>${state.tags.map(tag=>`<tr><td>${esc(tag)}</td></tr>`).join("")}</tbody></table></div><form id="tagForm" class="settings-add-form compact"><label>Nama tag<input name="tag" required maxlength="40" placeholder="Tag baru"></label><button class="button primary" type="submit">Add</button></form></section>
  <section class="panel settings-section" ${settingsTab==="Customer Idle"?"":"hidden"}><h2>Customer Idle</h2><p>Atur pengingat ketika pelanggan belum membalas pesan terakhir agent.</p><form id="customerIdleForm" class="settings-form-grid"><label class="checkbox-field"><input type="checkbox" name="enabled" ${s.customerIdle.enabled?"checked":""}> Aktifkan Customer Idle</label><label>Waktu tunggu (menit)<input type="number" name="minutes" min="1" max="10080" value="${esc(s.customerIdle.minutes)}" required></label><label>Aksi<select name="action"><option ${s.customerIdle.action==="Notify agent"?"selected":""}>Notify agent</option><option ${s.customerIdle.action==="Follow up"?"selected":""}>Follow up</option></select></label><button class="button primary" type="submit">Simpan Customer Idle</button></form></section></div>`;
}
function attachmentMarkup(message){
  if(!message.file?.data)return "";
  return `<a class="chat-attachment" href="${esc(message.file.data)}" download="${esc(message.file.name)}" aria-label="Unduh ${esc(message.file.name)}">📎 ${esc(message.file.name)} <small>${Math.ceil(message.file.size/1024)} KB · Unduh</small></a>`;
}
function messageStatus(message){const status=message.delivery==="pending"?"Pending":message.readAt?"Dibaca":"Terkirim";return `<small class="message-delivery ${status.toLowerCase()}">${status==="Dibaca"?"✓✓":status==="Terkirim"?"✓":"◷"} ${status}</small>`;}
function markRoomRead(room,type){
 let changed=false;
 room.messages.forEach(message=>{if(message.type===type&&message.delivery!=="pending"&&!message.readAt&&!message.text?.startsWith("[Internal] ")){message.readAt=new Date().toISOString();changed=true;}});
 if(changed)save();
}
function renderUserHistoryItem(item){
  const visibleMessages=item.messages.filter(message=>!message.text?.startsWith("[Internal] "));
  return `<details class="user-history-card"><summary><span><strong>${esc(item.issue)}</strong><small>${esc(item.id)} · ${esc(item.agent||"Layanan pelanggan")}</small></span><span class="user-history-rating">${item.rating?`<b aria-label="${item.rating} dari 5 bintang">${"★".repeat(item.rating)}${"☆".repeat(5-item.rating)}</b>`:'<em>Belum ada bintang</em>'}<small>Lihat log chat ⌄</small></span></summary><div class="user-history-body"><div class="user-history-log">${visibleMessages.map(message=>`<div class="user-history-line ${message.type==="customer"?"from-user":""}"><b>${message.type==="customer"?"Anda":esc(message.by)}</b><small>${esc(message.at)}</small><p>${esc(message.text)}${attachmentMarkup(message)}</p></div>`).join("")}</div>${item.csatComment?`<p class="user-history-comment">Komentar Anda: ${esc(item.csatComment)}</p>`:""}${!item.rating?`<form class="user-rating-form"><input type="hidden" name="ticketId" value="${esc(item.id)}"><fieldset><legend>Beri nilai layanan</legend><div class="user-star-picker">${[1,2,3,4,5].map(score=>`<label><input type="radio" name="rating" value="${score}" required><span aria-label="${score} bintang">★</span></label>`).join("")}</div></fieldset><label>Komentar (opsional)<textarea name="comment" maxlength="500" placeholder="Ceritakan pengalaman Anda"></textarea></label><button type="submit">Kirim penilaian</button></form>`:""}</div></details>`;
}
function renderUserSurveyForms(room){
 return (room.surveys||[]).filter(item=>item.status==="sent"&&new Date(item.expiresAt)>=new Date()).map(item=>{
  const range=item.type==="nps"?[0,10]:item.type==="ces"?[1,7]:[1,5];
  return `<form id="userSurveyForm" class="user-rating-form"><input type="hidden" name="ticketId" value="${esc(room.id)}"><input type="hidden" name="type" value="${item.type}"><strong>${item.type.toUpperCase()}</strong><p>${esc(item.question)}</p><label>Skor ${range[0]}–${range[1]}<select name="score" required><option value="">Pilih skor</option>${Array.from({length:range[1]-range[0]+1},(_,index)=>`<option value="${index+range[0]}">${index+range[0]}</option>`).join("")}</select></label><label>Komentar (opsional)<textarea name="comment" maxlength="500"></textarea></label><button type="submit">Kirim survei</button></form>`;
 }).join("");
}
function renderUserIntake(){
 if(userIntakeMode==="guest")return `<form id="guestChatForm" class="user-intake-form"><h2>Chat dari luar aplikasi</h2><p>Isi detail berikut agar tim kami dapat membantu.</p><label>Nama orang tua<input name="parentName" maxlength="100" required placeholder="Nama orang tua"></label><label>Nama sekolah<input name="schoolName" maxlength="120" required placeholder="Nama sekolah"></label><label>Kendala yang dihadapi<textarea name="issue" maxlength="1000" required placeholder="Ceritakan kendala Anda"></textarea></label><button type="submit">Kirim dan mulai chat</button></form>`;
 const issues=["Saldo/top up belum masuk","Bukti pembayaran belum tampil","Akses akun bermasalah","Kendala aplikasi","Pertanyaan lainnya"];
 return `<div class="user-intake-issues"><h2>Ada kendala apa?</h2><p>Pilih satu kendala. Pesan langsung terkirim ke tim kami.</p>${issues.map(issue=>`<button type="button" data-user-issue="${esc(issue)}">${esc(issue)} <span aria-hidden="true">→</span></button>`).join("")}</div>`;
}
function renderUserPreview(){
  const current=state.tickets.find(item=>item.id===userPreviewTicketId)||state.tickets[0];
  if(!current)return header("SIMULASI","Tampilan User","Belum ada percakapan.");
  const mine=state.tickets.filter(item=>item.userId===current.userId),closed=["Selesai","Ditutup"].includes(current.status);
  const history=mine.filter(item=>["Selesai","Ditutup"].includes(item.status)).sort((a,b)=>new Date(b.created)-new Date(a.created));
  if(userPreviewTab==="chat"&&!userIntakeOpen)markRoomRead(current,"agent");
  const messages=current.messages.filter(message=>!message.text?.startsWith("[Internal] ")).map(message=>`<div class="user-message ${message.type==="customer"?"from-user":message.type==="system"?"from-system":"from-agent"}"><div class="user-message-bubble">${message.text?`<span>${esc(message.text)}</span>`:""}${attachmentMarkup(message)}<small>${esc(message.at)}${message.type==="customer"?" · Anda":""}</small>${message.type==="customer"?messageStatus(message):""}</div></div>`).join("");
  return `<div class="user-preview-page">${header("SIMULASI PELANGGAN","Tampilan User","Chat aktif dan riwayat percakapan pelanggan.")}
    <div class="user-preview-toolbar"><label>Pilih pengguna dan percakapan<select id="userPreviewTicket">${state.tickets.map(item=>`<option value="${esc(item.id)}" ${item.id===current.id?"selected":""}>${esc(item.name)} · ${esc(item.id)}</option>`).join("")}</select></label><span>Data tersimpan di browser ini.</span></div>
    <div class="user-phone"><div class="user-phone-speaker" aria-hidden="true"></div><div class="user-phone-screen"><div class="user-phone-status"><span>9:41</span><span>●●● ▰</span></div><header class="user-phone-header"><span class="user-phone-logo">${appLogo("Closepay")}</span><div><strong>Closepay</strong><small>Layanan pelanggan</small></div><span class="user-phone-online" aria-label="Layanan tersedia"></span></header>
    <div class="user-phone-tabs" role="tablist" aria-label="Tampilan pelanggan"><button type="button" role="tab" data-user-tab="chat" aria-selected="${userPreviewTab==="chat"}" class="${userPreviewTab==="chat"?"active":""}">Chat</button><button type="button" role="tab" data-user-tab="rating" aria-selected="${userPreviewTab==="rating"}" class="${userPreviewTab==="rating"?"active":""}">Chat sebelumnya</button></div>
    ${userPreviewTab==="chat"?`<div class="user-chat-panel"><div class="user-entry-modes"><button type="button" data-user-mode="login" class="${userIntakeOpen&&userIntakeMode==="login"?"active":""}">Sudah login</button><button type="button" data-user-mode="guest" class="${userIntakeOpen&&userIntakeMode==="guest"?"active":""}">Dari luar aplikasi</button></div>${userIntakeOpen?`<div class="user-intake-panel">${renderUserIntake()}<button type="button" class="user-intake-back" data-action="cancel-user-intake">← Kembali ke chat</button></div>`:`<div class="user-chat-context"><strong>${esc(current.issue)}</strong><small>${esc(current.id)} · ${esc(current.status)}</small></div><div class="user-message-list" id="userMessageList">${messages}</div>${closed?`<div class="user-chat-closed">Percakapan selesai. Lihat Chat sebelumnya untuk memberi penilaian.</div>`:`<form id="userChatForm" class="user-chat-compose"><label class="user-file-button" title="Lampirkan file" aria-label="Lampirkan file">📎<input name="file" type="file" accept="image/*,.pdf,.txt" aria-label="Pilih file gambar, PDF, atau TXT"></label><textarea name="message" rows="1" maxlength="4000" placeholder="Tulis pesan..." aria-label="Pesan pelanggan"></textarea><button type="submit" aria-label="Kirim pesan">➤</button><div class="user-file-name" id="userFileName" hidden></div></form>`}`}</div>`:
    `<div class="user-rating-panel"><h2>Chat sebelumnya</h2>${history.length?history.map(item=>renderUserHistoryItem(item)+renderUserSurveyForms(item)).join(""):'<p class="user-history-empty">Belum ada chat sebelumnya yang selesai.</p>'}</div>`}
    <div class="user-phone-home" aria-hidden="true"><span></span></div></div></div></div>`;
}
function readChatFile(file){
  if(!file||!file.size)return Promise.resolve(null);
  if(file.size>1024*1024)throw new Error("Maksimal ukuran file 1 MB.");
  if(!["image/jpeg","image/png","image/gif","image/webp","application/pdf","text/plain"].includes(file.type))throw new Error("Format file: JPG, PNG, GIF, WebP, PDF, atau TXT.");
  return new Promise((resolve,reject)=>{const reader=new FileReader();reader.onload=()=>resolve({name:file.name,size:file.size,data:reader.result});reader.onerror=()=>reject(new Error("File gagal dibaca."));reader.readAsDataURL(file);});
}
function addChatMessage(target,message){
  target.messages.push(message);
  try{save();return true;}catch{target.messages.pop();toast("Penyimpanan browser penuh. Pilih file lebih kecil.");return false;}
}
function modal(){
 if(!showModal)return "";
 const t=ticket();
 if(showModal==="confirm-complete")return `<div class="modal-backdrop" data-action="dismiss"><div class="modal panel complete-confirm-modal" role="dialog" aria-modal="true" aria-labelledby="completeConfirmTitle" aria-describedby="completeConfirmText"><h2 id="completeConfirmTitle">Selesaikan percakapan?</h2><p id="completeConfirmText">Apakah Anda yakin chat ${esc(t.id)} sudah selesai?</p><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Tidak</button><button type="button" class="button primary" data-action="confirm-complete-yes" autofocus>Ya, selesaikan</button></div></div></div>`;
 if(showModal==="broadcast")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel broadcast-modal" id="broadcastForm" role="dialog" aria-modal="true" aria-labelledby="broadcastTitle"><div class="side-title"><h2 id="broadcastTitle">Buat broadcast</h2><button type="button" class="icon-button" data-action="dismiss" aria-label="Tutup">×</button></div><p>Tulis pengumuman untuk notifikasi workspace.</p><label>Judul<input name="title" maxlength="80" required placeholder="Judul pengumuman" autofocus></label><label>Pesan<textarea name="message" maxlength="500" required placeholder="Isi pengumuman..."></textarea></label><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button type="submit" class="button primary">Kirim broadcast</button></div></form></div>`;
 if(showModal==="integration-edit"||showModal==="integration-add"){
  const editing=showModal==="integration-edit",item=editing?state.integrations.find(entry=>entry.id===selectedIntegrationId):null;
  if(editing&&!item)return "";
  const value=(key)=>esc(item?.[key]||"");
  return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel integration-modal" id="integrationForm" role="dialog" aria-modal="true" aria-labelledby="integrationModalTitle"><div class="side-title"><h2 id="integrationModalTitle">${editing?"Edit":"Tambah"} integrasi</h2><button type="button" class="icon-button" data-action="dismiss" aria-label="Tutup">×</button></div><p>Isi detail aplikasi dan pengaturan sesi.</p><div class="form-grid"><label>ID Aplikasi<span class="required-mark">*</span><input name="appId" value="${value("appId")}" maxlength="80" required autofocus placeholder="contoh: psp-mobile"></label><label>Nama Aplikasi<span class="required-mark">*</span><input name="name" value="${value("name")}" maxlength="80" required placeholder="Nama aplikasi"></label><label>URL Info Pengguna<span class="required-mark">*</span><input type="url" name="userInfoUrl" value="${value("userInfoUrl")}" placeholder="https://contoh.id/userinfo" ${editing?"":"required"}></label><label>Rahasia Aplikasi<span class="required-mark">*</span><input type="password" name="appSecret" autocomplete="new-password" placeholder="${editing?"Isi hanya jika ingin mengganti":"Rahasia aplikasi"}" ${editing?"":"required"}></label><label>Origin Diizinkan<span class="required-mark">*</span><input name="allowedOrigins" value="${value("allowedOrigins")}" maxlength="500" required placeholder="https://contoh.id"></label><label>Masa Berlaku Sesi<span class="required-mark">*</span><span class="integration-input-unit"><input type="number" name="sessionMinutes" value="${esc(item?.sessionMinutes||60)}" min="1" max="525600" step="1" required><span>menit</span></span></label><label>URL Webhook <span class="optional-mark">(opsional)</span><input type="url" name="webhookUrl" value="${value("webhookUrl")}" placeholder="https://contoh.id/webhook"></label><label>Rahasia Webhook <span class="optional-mark">(opsional)</span><input type="password" name="webhookSecret" autocomplete="new-password" placeholder="${editing?"Isi hanya jika ingin mengganti":"Rahasia webhook"}"></label><label>Status<select name="status"><option ${item?.status!=="Nonaktif"?"selected":""}>Aktif</option><option ${item?.status==="Nonaktif"?"selected":""}>Nonaktif</option></select></label></div><p class="integration-security-note">Rahasia tidak disimpan di prototipe lokal. Hubungkan backend aman untuk mengaktifkan kredensial.</p><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button type="submit" class="button primary">Simpan</button></div></form></div>`;
 }
 if(showModal==="invite-user")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel account-modal invite-modal" id="inviteUserForm" role="dialog" aria-modal="true" aria-labelledby="inviteUserTitle"><div class="side-title"><h2 id="inviteUserTitle">Undang user</h2><button type="button" class="icon-button" data-action="dismiss" aria-label="Tutup">×</button></div><p>Isi data anggota baru dan tentukan aksesnya.</p><label>Nama lengkap<span class="required-mark">*</span><input name="name" required maxlength="100" placeholder="Nama lengkap" autofocus></label><label>Product<span class="required-mark">*</span><select name="product" required><option value="" selected disabled>Pilih product</option>${accountProducts.map(product=>`<option value="${esc(product)}">${esc(product)}</option>`).join("")}</select></label><label>Email<span class="required-mark">*</span><input name="email" type="email" required maxlength="254" placeholder="nama@perusahaan.com"></label><label>No. telepon <span class="optional-mark">(opsional)</span><input name="phone" type="tel" maxlength="30" placeholder="+62 812 3456 7890"></label><label>Role<span class="required-mark">*</span><select name="role" required><option value="" selected disabled>Pilih role</option><option>Owner</option>${state.accountRoles.map(role=>`<option>${esc(role.name)}</option>`).join("")}</select><small class="role-hint">Perlu rincian akses? <button type="button" class="text-button" data-page="account-roles">Lihat Roles</button></small></label><label>Level staf<span class="required-mark">*</span><select name="staffLevel" required><option value="" selected disabled>Pilih level staf</option><option>Admin</option><option>Supervisor</option><option>Member</option></select></label><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button class="button primary" type="submit">Kirim undangan</button></div></form></div>`;
 if(showModal==="create-role")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel account-modal role-modal" id="createRoleForm" role="dialog" aria-modal="true" aria-labelledby="createRoleTitle"><div class="side-title"><h2 id="createRoleTitle">Buat role</h2><button type="button" class="icon-button" data-action="dismiss" aria-label="Tutup">×</button></div><p>Atur nama, level akses, dan izin fitur untuk role baru.</p><label>Nama role<span class="required-mark">*</span><input name="name" required maxlength="60" placeholder="Contoh: Analis bisnis" autofocus></label><label class="description-label">Deskripsi<span class="description-count"><span id="roleDescriptionCount">0</span> / 200</span><textarea name="description" maxlength="200" placeholder="Jelaskan tanggung jawab role ini"></textarea></label><fieldset class="role-access"><legend>Level akses</legend><label><input type="radio" name="access" value="Admin" checked> Admin</label><label><input type="radio" name="access" value="Supervisor"> Supervisor</label><label><input type="radio" name="access" value="Member"> Member</label></fieldset><div class="permission-heading"><h3>Izin fitur</h3><p>Pilih tindakan yang boleh dilakukan oleh role ini.</p></div><div class="permission-table"><div class="permission-header"><strong>Fitur</strong><strong>Izin</strong></div>${roleFeatureGroups.map((group,groupIndex)=>`<section class="permission-group"><h4>${esc(group.name)}</h4>${group.features.map((feature,featureIndex)=>`<div class="permission-feature"><div>${esc(feature.name)}</div><div class="permission-options">${feature.permissions.map((permission,permissionIndex)=>`<label><input type="checkbox" name="permission_${groupIndex}_${featureIndex}_${permissionIndex}" checked> ${esc(permission)}</label>`).join("")}</div></div>`).join("")}</section>`).join("")}</div><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button class="button primary" type="submit">Buat role</button></div></form></div>`;
 if(showModal==="custom-view")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel custom-view-modal" id="customViewForm" role="dialog" aria-modal="true" aria-labelledby="customViewTitle"><div class="side-title"><h2 id="customViewTitle">Tambah Custom View</h2><button type="button" class="icon-button" data-action="dismiss" aria-label="Tutup popup">×</button></div><p>Pilih kriteria untuk menyaring percakapan di inbox.</p><div class="form-grid"><label class="wide">Nama view<input name="name" maxlength="30" required placeholder="Contoh: Chat PSP belum dibalas" autofocus></label><label>Channel<select name="channel"><option>Semua kanal</option><option>PSP Admin</option><option>PSP Mobile</option><option>Merchant</option></select></label><label>Session<select name="session"><option>Semua sesi</option><option>Aktif</option><option>Menunggu</option><option>Resolved</option></select></label><label>Tags<select name="tag"><option>Semua tag</option>${state.tags.map(x=>`<option>${esc(x)}</option>`).join("")}</select></label><label>Unresponded<select name="unresponded"><option>Semua</option><option>Ya</option><option>Tidak</option></select></label></div><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button class="button primary" type="submit">Simpan view</button></div></form></div>`;
 if(showModal==="handover")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel" id="handoverForm"><div class="side-title"><h2>Handover agent</h2><button type="button" class="icon-button" data-action="dismiss">×</button></div><p>Alihkan ${esc(t.id)}. Status offline terlihat, tetapi tidak dapat dipilih.</p><label>Status | Nama Agent | Note<select name="agent" required>${state.agents.filter(a=>a.name!==t.agent).map(a=>`<option value="${esc(a.name)}" ${a.online?"":"disabled"}>${a.online?"Online":"Offline"} | ${esc(a.name)} | ${esc(a.role)} · ${state.tickets.filter(x=>x.agent===a.name&&!["Selesai","Ditutup"].includes(x.status)).length} chat</option>`).join("")}</select></label><label>Note handover<textarea name="reason" required placeholder="Tulis catatan pengalihan..."></textarea></label><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button class="button primary" type="submit" ${state.agents.some(a=>a.name!==t.agent&&a.online)?"":"disabled"}>Alihkan & catat log</button></div></form></div>`;
 if(showModal==="profile")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel" id="profileForm"><div class="side-title"><h2>Add customer profile</h2><button type="button" class="icon-button" data-action="dismiss">×</button></div><div class="form-grid"><label>Nama<input name="name" value="${esc(t.customerProfile?.name||t.name)}" required></label><label>Email<input type="email" name="email" value="${esc(t.customerProfile?.email||"")}" placeholder="nama@contoh.com"></label><label>Sekolah<input name="school" value="${esc(t.customerProfile?.school||t.school)}"></label><label>Telepon<input name="phone" value="${esc(t.customerProfile?.phone||t.phone)}"></label></div><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button class="button primary" type="submit">Simpan profile</button></div></form></div>`;
 if(showModal==="edit")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel" id="detailForm"><div class="side-title"><h2>Ubah detail pelanggan</h2><button type="button" class="icon-button" data-action="dismiss">×</button></div><div class="form-grid"><label>Nama<input name="name" value="${esc(t.name)}" required></label><label>ID pengguna<input name="userId" value="${esc(t.userId)}" required></label><label>Anak<input name="child" value="${esc(t.child)}"></label><label>Sekolah<input name="school" value="${esc(t.school)}" required></label><label>Versi<input name="version" value="${esc(t.version)}"></label><label>WhatsApp<input name="phone" value="${esc(t.phone)}" required></label></div><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Batal</button><button class="button primary" type="submit">Simpan detail</button></div></form></div>`;
 if(showModal==="csat")return `<div class="modal-backdrop" data-action="dismiss"><form class="modal panel" id="csatForm"><div class="side-title"><h2>Simulasi respons CSAT</h2><button type="button" class="icon-button" data-action="dismiss">×</button></div><p>Survei dikirim saat chat selesai. Isi respons pelanggan untuk pratinjau dashboard.</p><label>Rating bintang<select name="rating"><option value="5">★★★★★ · 5</option><option value="4">★★★★☆ · 4</option><option value="3">★★★☆☆ · 3</option><option value="2">★★☆☆☆ · 2</option><option value="1">★☆☆☆☆ · 1</option></select></label><label>Kepuasan<select name="csat"><option>Puas</option><option>Netral</option><option>Tidak puas</option></select></label><label>Komentar <span class="optional-mark">(opsional)</span><textarea name="comment" maxlength="500" placeholder="Komentar pelanggan"></textarea></label><div class="modal-actions"><button type="button" class="button" data-action="dismiss">Lewati</button><button class="button primary" type="submit">Simpan respons</button></div></form></div>`;
 return "";
}
function render(){
  const titles={dashboard:"Dashboard","dashboard-sla":"SLA Overview",tickets:"Inbox pelanggan","user-preview":"Tampilan User",transfers:"Log handover",templates:"Template balasan",settings:"Pengaturan · Inbox","account-users":"User","account-roles":"Roles","settings-sla":"SLA","settings-agents":"Agent Management","settings-integration":"Integration","settings-user-performance":"User Performance","settings-customer-survey":"Customer Survey","settings-scorecard":"Scorecard","report-general":"General Report","report-sla":"SLA Report","report-quality":"Quality Scoring","report-performance":"Performance","report-csat":"CSAT","report-ces":"CES","report-nps":"NPS"};
 document.body.classList.toggle("inbox-page",page==="tickets");
 document.body.classList.toggle("customer-survey-fullpage",page==="settings-customer-survey");
 document.body.classList.toggle("survey-report-fullpage",["report-csat","report-ces","report-nps"].includes(page));
 const listScroll=main.querySelector?.(".ticket-items")?.scrollTop||0;
 const detailScroll=main.querySelector?.(".ticket-details")?.scrollTop||0;
 const inboxScroll=main.querySelector?.(".inbox-sidebar")?.scrollTop||0;
  main.innerHTML=({dashboard:renderDashboard,"dashboard-sla":renderSlaOverview,tickets:renderTickets,"user-preview":renderUserPreview,transfers:renderTransfers,templates:renderTemplates,settings:renderSettings,"account-users":renderAccountUsers,"account-roles":renderAccountRoles,"settings-sla":renderSlaSettings,"settings-agents":renderAgentManagement,"settings-integration":renderIntegrationSettings,"settings-user-performance":renderUserPerformance,"settings-customer-survey":renderCustomerSurvey,"settings-scorecard":renderScorecard,"report-general":renderGeneralReport,"report-sla":renderReportSla,"report-quality":renderReportQuality,"report-performance":renderReportPerformance,"report-csat":renderReportCsat,"report-ces":renderReportCes,"report-nps":renderReportNps}[page]||renderTickets)()+modal();
 if(page==="settings-customer-survey")main.querySelector(".survey-sending")?.insertAdjacentHTML("beforeend",`<label class="survey-field-label">Survei kedaluwarsa setelah (jam)<input name="expiryHours" type="number" min="1" max="720" value="${esc(state.settings.customerSurvey.expiryHours||24)}" required></label>`);
 if(page==="user-preview"&&userPreviewTab==="chat"&&["Selesai","Ditutup"].includes(state.tickets.find(room=>room.id===userPreviewTicketId)?.status))main.querySelector(".user-chat-closed")?.insertAdjacentHTML("afterend",`<form id="userChatForm" class="user-chat-compose"><label class="user-file-button" title="Lampirkan file">📎<input name="file" type="file" accept="image/*,.pdf,.txt" aria-label="Pilih file"></label><textarea name="message" rows="1" maxlength="4000" placeholder="Balas untuk buka kembali..." aria-label="Pesan pelanggan"></textarea><button type="submit" aria-label="Kirim pesan">➤</button><div class="user-file-name" id="userFileName" hidden></div></form>`);
 const newList=main.querySelector?.(".ticket-items");if(newList)newList.scrollTop=listScroll;
 const newDetails=main.querySelector?.(".ticket-details");if(newDetails)newDetails.scrollTop=detailScroll;
 const newInbox=main.querySelector?.(".inbox-sidebar");if(newInbox)newInbox.scrollTop=inboxScroll;
  if(showModal==="custom-view")main.querySelector('#customViewForm [name="name"]')?.focus();
   if(showModal==="invite-user"||showModal==="create-role"||showModal==="integration-edit"||showModal==="integration-add"||showModal==="broadcast")main.querySelector('.modal [autofocus]')?.focus();
   document.querySelectorAll(".nav-link").forEach(x=>x.classList.toggle("active",x.dataset.page===page||x.id==="dashboardMenuToggle"&&(page==="dashboard"||page==="dashboard-sla")||x.id==="settingsMenuToggle"&&(page==="settings"||page.startsWith("account-")||page.startsWith("settings-"))||x.id==="reportMenuToggle"&&page.startsWith("report-")));
 document.querySelectorAll(".nav-sublink").forEach(x=>x.classList.toggle("active",x.dataset.page===page));
  if(page.startsWith("report-")){document.getElementById("reportSubmenu").hidden=false;document.getElementById("reportMenuToggle").setAttribute("aria-expanded","true");}
  if(page==="dashboard"||page==="dashboard-sla"){document.getElementById("dashboardSubmenu").hidden=false;document.getElementById("dashboardMenuToggle").setAttribute("aria-expanded","true");}
  document.querySelectorAll(".nav-subheading").forEach(x=>{const child=document.getElementById(x.getAttribute("aria-controls"));x.classList.toggle("active",Boolean(child?.querySelector(".nav-sublink.active")));if(child?.querySelector(".nav-sublink.active")){child.hidden=false;x.setAttribute("aria-expanded","true");}});
 document.getElementById("topbarTitle").textContent=titles[page];
 document.getElementById("navCount").textContent=state.tickets.filter(t=>t.status!=="Selesai").length;
 const me=state.agents[0];document.getElementById("availability").textContent=me.online?"Online":"Offline";document.getElementById("offlineToggle").classList.toggle("is-online",me.online);document.getElementById("offlineToggle").setAttribute("aria-pressed",String(me.online));
 document.getElementById("profileRole").textContent=me.role;
 document.getElementById("wibClock").textContent=nowWib()+" WIB";
  updateNotificationUI();
 const list=document.getElementById("messageList");if(list)list.scrollTop=list.scrollHeight;
 const userList=document.getElementById("userMessageList");if(userList)userList.scrollTop=userList.scrollHeight;
}
function assignAgent(){
  return CSEngine.businessState(new Date(),state.settings).open?CSEngine.chooseAgent(state.tickets,state.agents,state.settings)?.name||null:null;
}
function updateOverdue(){
  let changed=false;
  state.tickets.forEach(t=>{
    if(duration(t)!=="Lewat 24 jam"||["Selesai","Ditutup","Perlu follow up"].includes(t.status))return;
    const from=t.agent||"Belum ditugaskan";
    t.status="Perlu follow up";t.agent="Master CS";
    state.transfers.push({id:t.id,from,to:"Master CS",reason:"Lewat 1 × 24 jam",at:stamp()});
    log(t,"Lewat 1 × 24 jam. Follow up dialihkan dari "+from+" ke Master CS.");
    changed=true;
  });
  if(changed)save();
}
function autoReply(){
  const s=state.settings,period=CSEngine.businessState(new Date(),s);
  if(period.reason==="holiday")return s.holidayReply||s.afterHours;
  if(!period.open)return s.afterHours;
  return state.agents.some(agent=>agent.online&&["Agent","Supervisor"].includes(agent.role)&&state.tickets.filter(room=>room.agent===agent.name&&!['Selesai','Ditutup','Belum ditugaskan'].includes(room.status)).length<s.maxOngoingChats)?s.greeting:s.busyReply;
}
function receiveIncoming(data){
  if(!data || !data.userId || !data.name || !data.text)return false;
  const channel=["PSP Mobile","PSP Admin","Merchant"].includes(data.channel)?data.channel:"PSP Mobile";
  const existing=data.newRoom?null:state.tickets.find(t=>t.userId===String(data.userId)&&t.channel===channel);
  if(existing){
    const previousAgent=existing.agent;
    const reopened=["Selesai","Ditutup"].includes(existing.status);
    if(reopened){existing.resolvedAt=null;existing.firstAgentResponseAt=null;existing.created=new Date().toISOString();existing.rating=0;existing.csat=null;existing.agent=CSEngine.businessState(new Date(),state.settings).open?CSEngine.chooseAgent(state.tickets,state.agents,state.settings,previousAgent)?.name||null:null;existing.status=existing.agent?"Sedang ditangani":"Belum ditugaskan";log(existing,"Percakapan dibuka kembali oleh pelanggan.");}
    existing.messages.push({by:"Pelanggan",text:String(data.text),at:nowWib(),sentAt:new Date().toISOString(),type:"customer",delivery:"sent"});
    if(page==="tickets"&&selected===existing.id)markRoomRead(existing,"customer");
    if(page!=="tickets"||selected!==existing.id)existing.unread=(existing.unread||0)+1;
    const owner=state.agents.find(a=>a.name===existing.agent);
    if(!owner?.online&&!reopened){
      const previous=existing.agent||"Belum ditugaskan";
      existing.agent=assignAgent();
      existing.status=existing.agent?"Sedang ditangani":"Belum ditugaskan";
      if(existing.agent){
        if(previous!=="Belum ditugaskan")state.transfers.push({id:existing.id,from:previous,to:existing.agent,reason:"Agent offline saat chat masuk",at:stamp()});
        log(existing,"Ditugaskan otomatis ke "+existing.agent+".");
      }
    }
    if(existing.status==="Menunggu pelanggan")existing.status="Sedang ditangani";
    log(existing,"Pesan masuk otomatis dari "+channel+".");
    if(existing.agent===state.agents[0].name)addNotification(previousAgent&&previousAgent!==existing.agent?"handover":"chat",previousAgent&&previousAgent!==existing.agent?"Chat dialihkan kepada Anda":"Pesan chat baru",existing.name+" · "+channel,existing.id);
  }else{
    const wib=new Date(new Date().toLocaleString("en-US",{timeZone:"Asia/Jakarta"}));
    const date=[wib.getFullYear(),String(wib.getMonth()+1).padStart(2,"0"),String(wib.getDate()).padStart(2,"0")].join("");
    let id;
    do{id="CP-"+date+"-"+String(Math.floor(Math.random()*10000)).padStart(4,"0");}while(state.tickets.some(t=>t.id===id));
    const agent=assignAgent();
    const reply=autoReply().replace("{nama}",String(data.name));
    const source=["PSP","Closepay","Merchant"].includes(data.source)?data.source:channel==="Merchant"?"Merchant":"PSP";
    const fresh={id,name:String(data.name),phone:String(data.phone||"").replace(/\D/g,""),userId:String(data.userId),child:String(data.child||"—"),school:String(data.school||"—"),version:String(data.version||"—"),channel,source,origin:data.origin==="guest"?"guest":data.origin==="login"?"login":"channel",segment:channel==="Merchant"?"Merchant":channel==="PSP Admin"?"Sekolah":"Pelanggan",scope:data.scope==="Dalam"?"Dalam":"Luar",issue:String(data.text),tag:"Permintaan informasi",status:agent?"Sedang ditangani":"Belum ditugaskan",agent,created:new Date().toISOString(),rating:0,csat:null,unread:1,messages:[{by:"Pelanggan",text:String(data.text),at:nowWib(),sentAt:new Date().toISOString(),type:"customer",delivery:"sent"},{by:"Sistem",text:reply,at:nowWib(),type:"system"}],history:[{at:stamp(),text:"Chat masuk otomatis dari "+channel+". "+(agent?"Dialokasikan ke "+agent+".":"Menunggu agent online.")},{at:stamp(),text:"Balasan otomatis dicatat."}]};
    state.tickets.unshift(fresh);
    if(agent===state.agents[0].name)addNotification("chat","Chat baru ditugaskan",fresh.name+" · "+channel,fresh.id);
  }
  routeQueued();save();render();return true;
}
function startUserChat(data){
 if(!receiveIncoming({...data,newRoom:true}))return false;
 userPreviewTicketId=state.tickets[0].id;userPreviewTab="chat";userIntakeOpen=false;render();toast("Chat baru terkirim ke inbox agent.");return true;
}
window.addEventListener("closepay:incoming-message",event=>receiveIncoming(event.detail));
window.addEventListener("closepay:broadcast",event=>{const title=String(event.detail?.title||"").trim(),message=String(event.detail?.message||"").trim();if(title&&message)addNotification("broadcast",title,message);});
function openTicket(id){
  const current=state.tickets.find(t=>t.id===id);
  if(!current)return;
  selected=id;focusedTicket=id;historyExpanded=false;markRoomRead(current,"customer");current.unread=0;save();render();
}
function slashQuery(input){
  const before=input.value.slice(0,input.selectionStart);
  const match=before.match(/(^|\s)\/([^\/\n]*)$/);
  return match?{start:before.length-match[2].length-1,end:before.length,query:match[2].toLowerCase().trim()}:null;
}
function updateTemplateMenu(){
  const input=document.getElementById("replyText"),menu=document.getElementById("templateMenu");
  if(!input||!menu)return;
  if(input.disabled){menu.hidden=true;return;}
  const trigger=slashQuery(input);
  if(!trigger){menu.hidden=true;return;}
  const matches=state.templates.map((item,index)=>({...item,index})).filter(item=>[item.category,item.name,item.command,item.text].join(" ").toLowerCase().includes(trigger.query));
  menu.innerHTML=`<div class="template-menu-head"><span>Command</span><span>Isi template</span></div>${matches.length?matches.map(item=>`<button type="button" data-template-choice="${item.index}"><b>${esc(item.command)}</b><span>${esc(item.text)}</span></button>`).join(""):'<div class="template-menu-empty">Template tidak ditemukan.</div>'}`;
  menu.hidden=false;
}
function insertTemplate(index){
  const input=document.getElementById("replyText"),item=state.templates[index];
  if(!input||input.disabled||!item)return;
  const trigger=slashQuery(input),start=trigger?.start??input.selectionStart,end=trigger?.end??input.selectionStart;
  const value=item.text.replaceAll("{nama}",ticket().name);
  input.value=input.value.slice(0,start)+value+input.value.slice(end);
  input.focus();input.setSelectionRange(start+value.length,start+value.length);
  input.dispatchEvent(new Event("input",{bubbles:true}));
  document.getElementById("templateMenu").hidden=true;
}
document.addEventListener("click",e=>{
  const userMode=e.target.closest("[data-user-mode]");if(userMode){userIntakeMode=userMode.dataset.userMode;userIntakeOpen=true;userPreviewTab="chat";render();return;}
  const userIssue=e.target.closest("[data-user-issue]");if(userIssue){const current=state.tickets.find(item=>item.id===userPreviewTicketId),profile=current?.userId?.startsWith("GUEST-")?null:current;if(!profile){toast("Pilih akun pengguna login pada daftar di atas.");return;}startUserChat({userId:profile.userId,name:profile.name,phone:profile.phone,child:profile.child,school:profile.school,version:profile.version,channel:profile.channel,source:sourceLabel(profile),scope:"Dalam",origin:"login",text:userIssue.dataset.userIssue});return;}
  const slaPager=e.target.closest("[data-sla-page]");if(slaPager){const key=slaPager.dataset.slaPage;if(key==="first")slaFirstPage=Math.max(1,slaFirstPage+Number(slaPager.dataset.step));else slaResolutionPage=Math.max(1,slaResolutionPage+Number(slaPager.dataset.step));render();return;}
  const userTab=e.target.closest("[data-user-tab]");if(userTab){userPreviewTab=userTab.dataset.userTab;render();return;}
  if(e.target.closest("#notificationToggle")){notificationPanelOpen=!notificationPanelOpen;updateNotificationUI();if(notificationPanelOpen)document.querySelector("#notificationPanel h2")?.focus();return;}
  const notificationButton=e.target.closest("[data-notification-id]");
  if(notificationButton){const entry=state.notifications.find(item=>item.id===notificationButton.dataset.notificationId);if(!entry)return;entry.read=true;save();notificationPanelOpen=false;updateNotificationUI();if(entry.ticketId){page="tickets";inboxView="All Chats";channelFilter="Semua kanal";openTicket(entry.ticketId);}else document.getElementById("notificationToggle").focus();return;}
  if(notificationPanelOpen&&!e.target.closest(".notification-wrap")){notificationPanelOpen=false;updateNotificationUI();}
   const surveyAccordion=e.target.closest("[data-survey-accordion]");if(surveyAccordion){surveyExpanded=surveyExpanded===surveyAccordion.dataset.surveyAccordion?"":surveyAccordion.dataset.surveyAccordion;document.querySelectorAll("[data-survey-type]").forEach(section=>{const opened=section.dataset.surveyType===surveyExpanded;section.querySelector(".survey-type-content").hidden=!opened;const button=section.querySelector("[data-survey-accordion]");button.setAttribute("aria-expanded",String(opened));button.querySelector("span:last-child").textContent=opened?"⌄":"›";});updateCustomerSurveyUI();return;}
 const settingsGroup=e.target.closest("[data-settings-group]");if(settingsGroup){const child=document.getElementById(settingsGroup.getAttribute("aria-controls"));const expanded=settingsGroup.getAttribute("aria-expanded")==="true";child.hidden=expanded;settingsGroup.setAttribute("aria-expanded",String(!expanded));return;}
 const p=e.target.closest("[data-page]");if(p){e.preventDefault();const next=p.dataset.page;if(state.sessionRole==="Agent"&&(next.startsWith("settings")||next.startsWith("account")||next.startsWith("report"))){toast("Hanya Admin atau Supervisor yang dapat membuka halaman ini.");return;}if(state.sessionRole==="Supervisor"&&(next.startsWith("settings")||next.startsWith("account"))){toast("Pengaturan hanya untuk Admin.");return;}page=next;showModal=false;if(window.matchMedia?.("(max-width: 700px)")?.matches)document.body.classList.add("sidebar-collapsed");syncSidebar();render();return;}
 const settingsLink=e.target.closest("[data-settings-tab]");if(settingsLink){settingsTab=settingsLink.dataset.settingsTab;render();return;}
 const interval=e.target.closest("[data-report-interval]");if(interval){reportInterval=interval.dataset.reportInterval;render();return;}
 const action=e.target.closest("[data-action]")?.dataset.action;
  if(action==="mark-notifications-read"){state.notifications.forEach(item=>item.read=true);save();updateNotificationUI();return;}
  if(action==="sla-clear-filter"){slaFrom="";slaTo="";slaFirstPage=1;slaResolutionPage=1;render();return;}
  if(action==="cancel-user-intake"){userIntakeOpen=false;render();return;}
  if(action==="view-history"){historyExpanded=!historyExpanded;panelOpen.history=true;render();return;}
  if(action==="new-broadcast"){notificationPanelOpen=false;showModal="broadcast";render();return;}
 if(action==="create-sla-policy"){slaEditorOpen=true;render();return;}
 if(action==="sla-back"){slaEditorOpen=false;render();return;}
 if(action==="add-sla-condition"){main.querySelector(".sla-conditions")?.insertAdjacentHTML("beforeend",renderSlaCondition());return;}
 if(action==="remove-sla-condition"){e.target.closest(".sla-condition-row")?.remove();return;}
 if(action==="sla-learn-more"){toast("SLA dihitung sejak percakapan ditugaskan kepada agent.");return;}
 if(action==="report-export"){const button=e.target.closest("[data-report-export]");exportGeneralReport(button?.dataset.reportExport||"conversations",button?.dataset.format||"csv");return;}
 if(action==="reset-survey-report-filters"){surveyReportPeriod="all";surveyReportChannel="all";surveyReportDay="";surveyReportAgent="all";render();return;}
 if(action==="report-page-back"){reportListPage=Math.max(1,reportListPage-1);render();return;}
 if(action==="report-page-forward"){reportListPage=Math.min(Math.ceil(reportScopedTickets().length/reportRowsPerPage),reportListPage+1);render();return;}
 if(action==="invite-user"||action==="create-role"){showModal=action==="invite-user"?"invite-user":"create-role";render();return;}
  if(action==="add-integration"){selectedIntegrationId=null;showModal="integration-add";render();return;}
  if(action==="edit-integration"){selectedIntegrationId=e.target.closest("[data-integration-id]")?.dataset.integrationId;showModal="integration-edit";render();return;}
  if(action==="upgrade-quota"){toast("Hubungi admin workspace untuk menambah kuota user.");return;}
 const open=e.target.closest("[data-open-ticket]");if(open){inboxView="All Chats";channelFilter="Semua kanal";page="tickets";openTicket(open.dataset.openTicket);return;}
 const view=e.target.closest("[data-inbox-view]");if(view){inboxView=view.dataset.inboxView;focusedTicket=null;render();return;}
 const custom=e.target.closest("[data-custom-view]");if(custom){inboxView=custom.dataset.customView;focusedTicket=null;render();return;}
 const panel=e.target.closest("[data-panel-toggle]");if(panel){const key=panel.dataset.panelToggle;panelOpen[key]=!panelOpen[key];panel.setAttribute("aria-expanded",String(panelOpen[key]));panel.querySelector(".panel-chevron").textContent=panelOpen[key]?"⌃":"⌄";panel.nextElementSibling.hidden=!panelOpen[key];return;}
 const template=e.target.closest("[data-template-choice]");
 if(template){insertTemplate(Number(template.dataset.templateChoice));return;}
 const item=e.target.closest("[data-ticket]");
 if(item){
   const id=item.dataset.ticket;
   if(focusedTicket===id)openTicket(id);
   else{
     focusedTicket=id;
     document.querySelectorAll(".ticket-item").forEach(button=>button.classList.toggle("focused",button.dataset.ticket===id));
   }
   return;
 }
 if(!action)return;
    if(action==="dismiss"){if(e.target.classList.contains("modal-backdrop")||e.target.closest('button[data-action="dismiss"]')){const closedModal=showModal;showModal=false;render();const trigger={"custom-view":"toggle-custom-view","invite-user":"invite-user","create-role":"create-role","integration-add":"add-integration","confirm-complete":"complete"}[closedModal];if(trigger)main.querySelector(`[data-action="${trigger}"]`)?.focus();if(closedModal==="integration-edit")main.querySelector(`[data-integration-id="${selectedIntegrationId}"]`)?.focus();if(closedModal==="broadcast")document.getElementById("notificationToggle").focus();}return;}
 if(action==="handover"||action==="edit-detail"||action==="add-profile"){if(action==="handover"&&state.sessionRole==="Agent"){toast("Handover hanya untuk Supervisor atau Admin.");return;}showModal=action==="edit-detail"?"edit":action==="add-profile"?"profile":action;render();return;}
  if(action==="toggle-custom-view"){showModal="custom-view";render();return;}
 if(action==="share-chat"){if(!state.agents[0].online)return;inboxView="My Chats";render();return;}
 const t=ticket();
 if(action==="copy-id"){navigator.clipboard?.writeText(t.userId).then(()=>toast("ID pengguna disalin."),()=>toast(t.userId));return;}
 if(action==="complete"){if(["Selesai","Ditutup"].includes(t.status))return;showModal="confirm-complete";render();main.querySelector('.complete-confirm-modal [autofocus]')?.focus();return;}
 if(action==="toggle-pending"){if(t.status==="Menunggu pelanggan"){const last=t.pendingIntervals.at(-1);if(last&&!last.end)last.end=new Date().toISOString();t.status="Sedang ditangani";}else{t.pendingIntervals.push({start:new Date().toISOString(),end:null});t.status="Menunggu pelanggan";}save();render();return;}
 if(action==="confirm-complete-yes"){if(showModal!=="confirm-complete"||["Selesai","Ditutup"].includes(t.status))return;t.status="Selesai";t.resolvedAt=new Date().toISOString();const pause=t.pendingIntervals.at(-1);if(pause&&!pause.end)pause.end=t.resolvedAt;syncSla(t);const sent=sendSurveys(t);routeQueued();inboxView="Resolved";channelFilter="Semua kanal";log(t,"Percakapan diselesaikan oleh "+state.agents[0].name+". "+sent+" survei terkirim.");save();showModal=false;render();toast("Percakapan selesai.");return;}
 if(action==="report-clear-dates"){reportFrom=state.tickets.reduce((earliest,item)=>{const day=reportDateKey(item.created);return day<earliest?day:earliest;},reportDateFilter);reportTo=reportDateFilter;render();return;}
 if(action==="delete-holiday"){const removed=state.settings.holidays.splice(Number(e.target.dataset.index),1)[0];if(removed?.description==="Tanggal merah")state.settings.holiday="";save();render();return;}
 if(action==="send-survey"){const sent=sendSurveys(t,true);save();render();toast(sent?sent+" survei dikirim.":"Tidak ada survei aktif untuk kanal ini.");return;}
});
document.addEventListener("contextmenu",e=>{const item=e.target.closest("[data-ticket]");if(!item)return;e.preventDefault();openTicket(item.dataset.ticket);});
document.addEventListener("input",e=>{
 if(e.target.closest("#customerSurveyForm")&&!e.target.matches("[data-survey-select-all]"))updateCustomerSurveyUI();
 if(e.target.id==="replyText"){document.getElementById("charCount").textContent=e.target.value.length+"/4000";updateTemplateMenu();}
 if(e.target.id==="userSearch"){const caret=e.target.selectionStart;userSearch=e.target.value;render();const search=document.getElementById("userSearch");search?.focus();search?.setSelectionRange(caret,caret);}
 if(e.target.name==="description"&&e.target.form?.id==="createRoleForm"){const count=document.getElementById("roleDescriptionCount");if(count)count.textContent=e.target.value.length;}
 if(e.target.form?.id==="slaPolicyForm"){
   if(e.target.name==="name")document.getElementById("slaNameCount").textContent=e.target.value.length;
   if(e.target.name==="description")document.getElementById("slaDescriptionCount").textContent=e.target.value.length;
   const saveButton=document.getElementById("saveSlaPolicy");if(saveButton)saveButton.disabled=!e.target.form.checkValidity();
 }
});
document.addEventListener("input",e=>{
 if(e.target.id!=="reportConversationSearch")return;
 const caret=e.target.selectionStart;reportConversationSearch=e.target.value;reportListPage=1;render();
 const search=document.getElementById("reportConversationSearch");search?.focus();search?.setSelectionRange(caret,caret);
});
document.addEventListener("change",e=>{
 if(e.target.id==="slaFrom"||e.target.id==="slaTo"){if(e.target.id==="slaFrom")slaFrom=e.target.value;else slaTo=e.target.value;slaFirstPage=1;slaResolutionPage=1;render();return;}
 if(e.target.id==="surveyPreviewPage"){surveyPreviewPage=e.target.value;updateCustomerSurveyUI();return;}
 if(e.target.matches("[data-survey-select-all]")){
   const type=e.target.dataset.surveySelectAll,section=e.target.closest("[data-survey-type]");
   section.querySelectorAll(`[data-survey-channel="${type}"]`).forEach(input=>input.checked=e.target.checked);
   updateCustomerSurveyUI();return;
 }
 if(e.target.matches("[data-survey-enabled],[data-survey-channel],[data-survey-follow-up]")){updateCustomerSurveyUI();return;}
 if(e.target.id==="surveyReportPeriod")surveyReportPeriod=e.target.value;
 else if(e.target.id==="surveyReportChannel")surveyReportChannel=e.target.value;
 else if(e.target.id==="surveyReportDay")surveyReportDay=e.target.value;
 else if(e.target.id==="surveyReportAgent")surveyReportAgent=e.target.value;
 else if(e.target.id==="reportTimezone")reportTimezoneFilter=e.target.value;
 else if(e.target.id==="reportChannel")reportChannelFilter=e.target.value;
 else if(e.target.id==="reportDate"){reportDateFilter=e.target.value;reportFrom=reportDateFilter;reportTo=reportDateFilter;}
 else if(e.target.id==="reportFrom")reportFrom=e.target.value;
 else if(e.target.id==="reportTo")reportTo=e.target.value;
 else if(e.target.id==="reportAgent")reportAgentFilter=e.target.value;
 else if(e.target.id==="reportDivision")reportDivisionFilter=e.target.value;
 else if(e.target.id==="reportRowsPerPage")reportRowsPerPage=Number(e.target.value);
 else return;
 reportListPage=1;render();
});
 document.addEventListener("keydown",e=>{
    const modalTrigger={"custom-view":"toggle-custom-view","invite-user":"invite-user","create-role":"create-role","confirm-complete":"complete"}[showModal];
     if(modalTrigger||showModal==="integration-edit"||showModal==="integration-add"||showModal==="broadcast"){
      if(e.key==="Escape"){e.preventDefault();const closedModal=showModal;showModal=false;render();if(modalTrigger)main.querySelector(`[data-action="${modalTrigger}"]`)?.focus();if(closedModal==="integration-edit")main.querySelector(`[data-integration-id="${selectedIntegrationId}"]`)?.focus();if(closedModal==="integration-add")main.querySelector('[data-action="add-integration"]')?.focus();if(closedModal==="broadcast")document.getElementById("notificationToggle").focus();return;}
   if(e.key==="Tab"){
     const controls=[...main.querySelectorAll('.modal-backdrop .modal button, .modal-backdrop .modal input, .modal-backdrop .modal select, .modal-backdrop .modal textarea')].filter(control=>!control.disabled);
    const first=controls[0],last=controls.at(-1);
     if(first&&last&&e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
     else if(first&&last&&!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
   }
   return;
  }
   if(notificationPanelOpen&&e.key==="Escape"){notificationPanelOpen=false;updateNotificationUI();document.getElementById("notificationToggle").focus();return;}
   if(e.target.id==="replyText"&&e.key==="Escape"){const menu=document.getElementById("templateMenu");if(menu)menu.hidden=true;}
 });
document.addEventListener("change",e=>{if(e.target.id==="channelFilter"){channelFilter=e.target.value;focusedTicket=null;render();}if(e.target.id==="sortOrder"){sortOrder=e.target.value;focusedTicket=null;render();}if(e.target.id==="userRoleFilter"){userRoleFilter=e.target.value;render();}if(e.target.id==="userStatusFilter"){userStatusFilter=e.target.value;render();}if(e.target.id==="tagInput"){const t=ticket(),tag=state.tags.find(x=>x.toLowerCase()===e.target.value.trim().toLowerCase());if(!tag){e.target.value=t.tag;toast("Pilih tag dari Master Tags.");return;}t.tag=tag;log(t,"Tag kendala diubah menjadi "+t.tag+".");save();render();}});
document.addEventListener("change",e=>{
 if(e.target.id==="dashboardYear"){dashboardYear=Number(e.target.value);render();return;}
 if(e.target.id==="userPreviewTicket"){userPreviewTicketId=e.target.value;userIntakeOpen=false;render();return;}
 if(e.target.matches('#userChatForm [name="file"],#replyForm [name="file"]')){
  const file=e.target.files?.[0],label=document.getElementById(e.target.form.id==="userChatForm"?"userFileName":"replyFileName");
  if(label){label.textContent=file?`📎 ${file.name} · ${Math.ceil(file.size/1024)} KB`:"";label.hidden=!file;}
 }
});
document.addEventListener("submit",async e=>{
 if(e.target.id==="guestChatForm"){
  e.preventDefault();const data=new FormData(e.target),name=String(data.get("parentName")||"").trim(),school=String(data.get("schoolName")||"").trim(),issue=String(data.get("issue")||"").trim();
  if(!name||!school||!issue){toast("Isi nama orang tua, sekolah, dan kendala.");return;}
  startUserChat({userId:"GUEST-"+Date.now()+"-"+Math.random().toString(36).slice(2,6),name,school,channel:"PSP Mobile",source:"Closepay",scope:"Luar",origin:"guest",text:issue});return;
 }
 if(e.target.id!=="userChatForm"&&!e.target.classList.contains("user-rating-form")&&e.target.id!=="userSurveyForm")return;
 e.preventDefault();
 const form=e.target,currentUser=state.tickets.find(item=>item.id===userPreviewTicketId),target=state.tickets.find(item=>item.id===(form.classList.contains("user-rating-form")?new FormData(form).get("ticketId"):userPreviewTicketId));
 if(!target||target.userId!==currentUser?.userId)return;
 if(form.id==="userSurveyForm"){
  const data=new FormData(form),survey=target.surveys.find(item=>item.type===data.get("type")&&item.status==="sent");
  const score=Number(data.get("score")),range=survey?.type==="nps"?[0,10]:survey?.type==="ces"?[1,7]:[1,5];
  if(!survey||new Date(survey.expiresAt)<new Date()||!Number.isInteger(score)||score<range[0]||score>range[1]){toast("Survei tidak tersedia atau sudah kedaluwarsa.");return;}
  survey.score=score;survey.comment=String(data.get("comment")||"").trim();survey.status="answered";survey.answeredAt=new Date().toISOString();
  if(survey.type==="csat"){target.rating=score;target.csat=score>=4?"Puas":score===3?"Netral":"Tidak puas";target.csatComment=survey.comment;target.csatResponseAt=survey.answeredAt;}
  log(target,"Respons "+survey.type.toUpperCase()+" dari pelanggan: "+score+".");save();render();toast("Terima kasih atas penilaian Anda.");return;
 }
 if(form.classList.contains("user-rating-form")){
  if(!["Selesai","Ditutup"].includes(target.status)||target.rating){toast("Penilaian belum tersedia.");return;}
  const data=new FormData(form),rating=Number(data.get("rating"));
  if(!Number.isInteger(rating)||rating<1||rating>5){toast("Pilih 1 sampai 5 bintang.");return;}
  target.rating=rating;target.csat=rating>=4?"Puas":rating===3?"Netral":"Tidak puas";target.csatComment=String(data.get("comment")||"").trim();target.csatResponseAt=new Date().toISOString();log(target,"Respons CSAT dari pelanggan: "+rating+" bintang.");save();render();toast("Penilaian tersimpan.");return;
 }
 const text=String(form.elements.message.value||"").trim(),file=form.elements.file.files?.[0];
 if(!text&&!file){toast("Tulis pesan atau pilih file.");return;}
 const button=form.querySelector('[type="submit"]');button.disabled=true;
 let pending;
 try{
  const filePromise=readChatFile(file);
  pending={by:"Pelanggan",text,at:nowWib(),sentAt:new Date().toISOString(),type:"customer",delivery:"pending"};
  target.messages.push(pending);render();
  const attachment=await filePromise;
  const pendingIndex=target.messages.indexOf(pending);if(pendingIndex>=0)target.messages.splice(pendingIndex,1);
  if(!addChatMessage(target,{...pending,delivery:"sent",...(attachment?{file:attachment}:{})})){render();return;}
  target.unread=(target.unread||0)+1;
  if(["Selesai","Ditutup"].includes(target.status)){target.resolvedAt=null;target.firstAgentResponseAt=null;target.created=new Date().toISOString();target.agent=CSEngine.businessState(new Date(),state.settings).open?CSEngine.chooseAgent(state.tickets,state.agents,state.settings,target.agent)?.name||null:null;target.status=target.agent?"Sedang ditangani":"Belum ditugaskan";log(target,"Percakapan dibuka kembali oleh pelanggan.");}
  if(target.status==="Menunggu pelanggan")target.status="Sedang ditangani";
  routeQueued();
  log(target,"Pesan pelanggan masuk"+(attachment?" dengan lampiran.":"."));
  if(target.agent===state.agents[0].name)addNotification("chat","Pesan chat baru",target.name+" · "+target.channel,target.id);
  save();render();toast("Pesan terkirim ke inbox agent.");
 }catch(error){if(pending){const index=target.messages.indexOf(pending);if(index>=0)target.messages.splice(index,1);save();render();}toast(error.message||"File gagal diunggah.");button.disabled=false;}
});
document.addEventListener("submit",e=>{
  const form=e.target;if(!["replyForm","handoverForm","profileForm","detailForm","csatForm","autoResponderForm","officeHoursForm","routingSlaForm","holidayForm","templateForm","tagForm","customerIdleForm","customViewForm","noteForm","inviteUserForm","createRoleForm","slaPolicyForm","integrationForm","broadcastForm","customerSurveyForm"].includes(form.id))return;e.preventDefault();
  if(state.sessionRole!=="Admin"&&["autoResponderForm","officeHoursForm","routingSlaForm","holidayForm","templateForm","tagForm","customerIdleForm","slaPolicyForm","customerSurveyForm","integrationForm","inviteUserForm","createRoleForm"].includes(form.id)){toast("Pengaturan hanya untuk Admin.");return;}
 const d=Object.fromEntries(new FormData(form));const t=ticket();
  if(form.id==="customerSurveyForm"){
    const config=copy(state.settings.customerSurvey),channels=state.integrations.filter(item=>item.status==="Aktif");
    for(const type of surveyTypes){
      const section=form.querySelector(`[data-survey-type="${type.id}"]`),entry=config.types[type.id];
      entry.enabled=section.querySelector(`[data-survey-enabled="${type.id}"]`).checked;
      entry.channels=[...section.querySelectorAll(`[data-survey-channel="${type.id}"]:checked`)].map(input=>input.value);
      entry.question=section.querySelector(`[data-survey-question="${type.id}"]`).value.trim();
      if(entry.enabled&&!entry.channels.some(id=>channels.some(channel=>channel.id===id))){toast(`Select at least one active channel for ${type.label}.`);section.querySelector(".survey-channel-picker").open=true;return;}
      if(entry.enabled&&!entry.question){toast(`Enter a question for ${type.label}.`);section.querySelector(`[data-survey-question="${type.id}"]`).focus();return;}
      if(type.id==="csat"){
        entry.answers=[...section.querySelectorAll(`[data-survey-answer="${type.id}"]`)].map((input,index)=>({...entry.answers[index],label:input.value.trim()}));
        if(entry.enabled&&entry.answers.some(answer=>!answer.label)){toast("Fill in all CSAT answer options.");return;}
      }else{
        entry.minLabel=section.querySelector('[name="minLabel"]').value.trim();
        entry.maxLabel=section.querySelector('[name="maxLabel"]').value.trim();
        if(entry.enabled&&(!entry.minLabel||!entry.maxLabel)){toast(`Enter both scale labels for ${type.label}.`);return;}
      }
      entry.followUp=section.querySelector(`[data-survey-follow-up="${type.id}"]:checked`)?.value||"none";
      entry.followUpQuestion=section.querySelector(`[data-survey-follow-up-question="${type.id}"]`).value.trim();
      entry.followUpByScore=[...section.querySelectorAll(`[data-survey-follow-up-score="${type.id}"]`)].map(input=>input.value.trim());
    }
    config.closingMessage=form.querySelector('[name="closingMessage"]').value.trim();
    config.surveyTitle=form.querySelector('[name="surveyTitle"]').value.trim();
    config.thankYouMessage=form.querySelector('[name="thankYouMessage"]').value.trim();
    if(!config.closingMessage||!config.surveyTitle||!config.thankYouMessage){toast("Complete all required survey greeting fields.");return;}
    config.sendMethod=form.querySelector('[name="sendMethod"]:checked')?.value||"automatic";
    config.expiryHours=Math.max(1,Number(d.expiryHours)||24);
    state.settings.customerSurvey=config;save();render();toast("Customer survey settings saved.");return;
  }
  if(form.id==="broadcastForm"){
    const title=String(d.title||"").trim(),message=String(d.message||"").trim();
    if(!title||!message)return;
    addNotification("broadcast",title,message);showModal=false;render();document.getElementById("notificationToggle").focus();toast("Broadcast ditambahkan ke notifikasi.");return;
  }
  if(form.id==="integrationForm"){
    const editing=showModal==="integration-edit",item=editing?state.integrations.find(entry=>entry.id===selectedIntegrationId):null;
    const appId=String(d.appId||"").trim(),name=String(d.name||"").trim(),allowedOrigins=String(d.allowedOrigins||"").trim(),sessionMinutes=Number(d.sessionMinutes);
    if(!appId||!name||!allowedOrigins||!Number.isInteger(sessionMinutes)||sessionMinutes<1||sessionMinutes>525600){toast("Periksa data aplikasi dan masa berlaku sesi.");return;}
    if(state.integrations.some(entry=>entry!==item&&entry.appId.toLowerCase()===appId.toLowerCase())){toast("ID Aplikasi sudah digunakan.");return;}
    const record=item||{id:"integration-"+Date.now(),platform:"Custom"};
    Object.assign(record,{appId,name,userInfoUrl:String(d.userInfoUrl||"").trim(),allowedOrigins,sessionMinutes,webhookUrl:String(d.webhookUrl||"").trim(),status:d.status==="Nonaktif"?"Nonaktif":"Aktif"});
    if(!editing)state.integrations.push(record);
    save();showModal=false;render();main.querySelector(`[data-integration-id="${record.id}"]`)?.focus();toast(editing?"Integrasi diperbarui.":"Integrasi ditambahkan.");return;
  }
 if(form.id==="slaPolicyForm"){
   const name=String(d.name||"").trim();
   const conditions=[...form.querySelectorAll(".sla-condition-row")].map(row=>({field:row.querySelector('[name="field"]').value,operator:row.querySelector('[name="operator"]').value,value:row.querySelector('[name="value"]').value.trim()}));
   const firstResponseMinutes=Number(d.firstResponseMinutes),resolutionMinutes=Number(d.resolutionMinutes);
   const responseMinutes=d.responseMinutes?Number(d.responseMinutes):"";
   if(!name||conditions.some(condition=>!condition.value)||!Number.isInteger(firstResponseMinutes)||firstResponseMinutes<1||!Number.isInteger(resolutionMinutes)||resolutionMinutes<1||(responseMinutes!==""&&(!Number.isInteger(responseMinutes)||responseMinutes<1))){toast("Periksa nama, kondisi, dan target waktu SLA.");return;}
   if(state.slaPolicies.some(policy=>policy.name.toLowerCase()===name.toLowerCase())){toast("Nama policy sudah digunakan.");return;}
   state.slaPolicies.push({id:"SLA-"+Date.now(),name,description:String(d.description||"").trim(),conditions,firstResponseMinutes,responseMinutes,resolutionMinutes,operationalHours:String(d.operationalHours||"24/7 availability"),status:"Active"});
   save();slaEditorOpen=false;render();toast("SLA policy berhasil dibuat.");return;
 }
 if(form.id==="inviteUserForm"){
   const used=state.accountUsers.filter(user=>user.status==="Active"||user.status==="Pending").length;
   const email=String(d.email||"").trim().toLowerCase();
   const product=String(d.product||"").trim();
    if(used>=2){toast("Kuota user penuh. Tambah kuota untuk mengundang user.");return;}
   if(!accountProducts.includes(product)){toast("Pilih product yang tersedia.");return;}
    if(state.accountUsers.some(user=>user.email.toLowerCase()===email)){toast("Email ini sudah terdaftar.");return;}
   state.accountUsers.push({id:"USR-"+String(Date.now()).slice(-6),name:String(d.name||"").trim(),product,email,phone:String(d.phone||"").trim(),role:String(d.role||""),staffLevel:String(d.staffLevel||""),status:"Pending",lastSignIn:"—"});
    save();showModal=false;userSearch="";userRoleFilter="All roles";userStatusFilter="All status";render();toast("Undangan terkirim.");return;
 }
 if(form.id==="createRoleForm"){
   const name=String(d.name||"").trim();
    if(state.accountRoles.some(role=>role.name.toLowerCase()===name.toLowerCase())){toast("Nama role sudah digunakan.");return;}
   const permissions=[];
   roleFeatureGroups.forEach((group,groupIndex)=>group.features.forEach((feature,featureIndex)=>feature.permissions.forEach((permission,permissionIndex)=>{const key=`permission_${groupIndex}_${featureIndex}_${permissionIndex}`;if(d[key])permissions.push(key);})));
   state.accountRoles.push({name,description:String(d.description||"").trim(),access:String(d.access||"Member"),permissions});
    save();showModal=false;render();toast("Role dibuat.");return;
 }
 if(form.id==="replyForm"){
  if(!state.agents[0].online){toast("Agent offline. Aktifkan status online untuk mengirim.");return;}
  const text=String(document.getElementById("replyText").value).trim(),file=form.elements.file.files?.[0];
  if(!text&&!file){toast("Tulis pesan atau pilih file.");return;}
  const internal=document.getElementById("internalNote").checked,button=form.querySelector('[type="submit"]');button.disabled=true;
  let filePromise;try{filePromise=readChatFile(file);}catch(error){toast(error.message);button.disabled=false;return;}
  const pending={by:state.agents[0].name,text:internal?"[Internal] "+text:text,at:nowWib(),sentAt:new Date().toISOString(),type:"agent",delivery:"pending"};
  t.messages.push(pending);render();
  filePromise.then(attachment=>{
   const index=t.messages.indexOf(pending);if(index>=0)t.messages.splice(index,1);
   if(!addChatMessage(t,{...pending,delivery:"sent",...(attachment?{file:attachment}:{})})){render();return;}
   if(!internal&&!t.firstAgentResponseAt)t.firstAgentResponseAt=pending.sentAt;
   syncSla(t);log(t,internal?"Catatan internal ditambahkan.":"Balasan dikirim oleh "+state.agents[0].name+".");save();render();toast(internal?"Catatan internal disimpan.":"Pesan tersimpan di prototipe.");
  }).catch(error=>{const index=t.messages.indexOf(pending);if(index>=0)t.messages.splice(index,1);render();toast(error.message||"File gagal diunggah.");});return;
 }
 if(form.id==="handoverForm"){if(state.sessionRole==="Agent")return;const target=state.agents.find(a=>a.name===d.agent);const load=state.tickets.filter(room=>room.id!==t.id&&room.agent===d.agent&&!['Selesai','Ditutup','Belum ditugaskan'].includes(room.status)).length;if(!target?.online||load>=state.settings.maxOngoingChats){toast("Pilih agent online dengan kapasitas tersedia.");return;}const old=t.agent||"Belum ditugaskan";t.agent=d.agent;t.status="Sedang ditangani";state.transfers.push({id:t.id,from:old,to:d.agent,reason:d.reason,at:stamp()});log(t,"Handover: "+old+" → "+d.agent+". Note: "+d.reason);t.messages.push({by:"Sistem",text:"Percakapan dialihkan ke "+d.agent+".",at:nowWib(),type:"system"});addNotification("handover",d.agent===state.agents[0].name?"Handover untuk Anda":"Handover berhasil",t.name+" · "+old+" → "+d.agent,t.id);save();showModal=false;render();toast("Handover dan log tersimpan.");return;}
 if(form.id==="customViewForm"){const name=String(d.name||"").trim();if(!name)return;const id="view-"+Date.now();state.customViews.push({id,name,criteria:{channel:d.channel,session:d.session,tag:d.tag,unresponded:d.unresponded}});inboxView=id;showModal=false;save();render();toast("Custom view disimpan.");return;}
 if(form.id==="noteForm"){const note=String(d.note||"").trim(),fileName=String(d.file?.name||"").trim();if(!note&&!fileName){toast("Isi note atau pilih file.");return;}t.notes.push({at:stamp(),text:note,fileName});log(t,"Note internal ditambahkan"+(fileName?" dengan file "+fileName:"")+".");save();render();toast("Note disimpan.");return;}
 if(form.id==="profileForm"){t.customerProfile={name:String(d.name||"").trim(),email:String(d.email||"").trim(),school:String(d.school||"").trim(),phone:String(d.phone||"").trim()};log(t,"Customer profile ditambahkan.");save();showModal=false;render();toast("Customer profile disimpan.");return;}
 if(form.id==="detailForm"){["name","userId","child","school","version","phone"].forEach(k=>t[k]=String(d[k]||"").trim());log(t,"Detail pelanggan diperbarui.");save();showModal=false;render();toast("Detail pelanggan diperbarui.");return;}
 if(form.id==="csatForm"){t.rating=Number(d.rating);t.csat=d.csat;t.csatComment=String(d.comment||"").trim();t.csatResponseAt=new Date().toISOString();log(t,"Respons CSAT: "+t.rating+" bintang, "+t.csat+".");save();showModal=false;render();toast("Respons CSAT dicatat.");return;}
 if(form.id==="autoResponderForm"){const greeting=String(d.greeting||"").trim(),afterHours=String(d.afterHours||"").trim(),busyReply=String(d.busyReply||"").trim();if(!greeting||!afterHours||!busyReply){toast("Isi tiga balasan otomatis.");return;}state.settings.greeting=greeting;state.settings.afterHours=afterHours;state.settings.busyReply=busyReply;save();render();toast("Auto Responder disimpan.");return;}
 if(form.id==="routingSlaForm"){const method=String(d.routingMethod);if(!["manual","round-robin","least-active"].includes(method))return;state.settings.routingMethod=method;state.settings.maxOngoingChats=Math.max(1,Number(d.maxOngoingChats)||5);state.settings.frtMinutes=Math.max(1,Number(d.frtMinutes)||15);state.settings.resolutionMinutes=Math.max(1,Number(d.resolutionMinutes)||30);state.settings.pausePendingSla=Boolean(d.pausePendingSla);routeQueued();save();render();toast("Routing & SLA disimpan.");return;}
 if(form.id==="holidayForm"){if(!d.start||!d.end||d.end<d.start){toast("Rentang tanggal tidak valid.");return;}state.settings.holidays.push({start:d.start,end:d.end,description:String(d.description||"").trim()});save();render();toast("Hari libur ditambahkan.");return;}
 if(form.id==="officeHoursForm"){
   const hours={};let active=0;
   for(const day of [0,1,2,3,4,5,6]){
     const enabled=Boolean(d[`day_${day}_enabled`]),timeIn=d[`day_${day}_in`],timeOut=d[`day_${day}_out`];
     if(enabled&&timeIn>=timeOut){toast("Time Out harus setelah Time In.");return;}
     if(enabled)active++;
     hours[day]={enabled,in:timeIn,out:timeOut};
   }
   if(!active){toast("Aktifkan minimal satu hari kerja.");return;}
   if(!["Asia/Jakarta","Asia/Makassar","Asia/Jayapura"].includes(d.timezone)){toast("Pilih geolocation yang tersedia.");return;}
   state.settings.officeHours=hours;state.settings.timezone=d.timezone;
   state.settings.holiday=d.holiday;state.settings.holidayReply=String(d.holidayReply||"").trim();
   state.settings.holidays=state.settings.holidays.filter(item=>item.description!=="Tanggal merah");if(d.holiday)state.settings.holidays.push({start:d.holiday,end:d.holiday,description:"Tanggal merah"});
   save();render();toast("Office Hours disimpan.");return;
 }
 if(form.id==="templateForm"){
   const command="/"+String(d.command||"").trim().replace(/^\/+/, "").toLowerCase(),content=String(d.content||"").trim();
   if(!/^\/[a-z0-9_-]+$/.test(command)||!content){toast("Command gunakan huruf, angka, _ atau -.");return;}
   if(state.templates.some(x=>x.command===command)){toast("Command sudah digunakan.");return;}
   state.templates.push({name:command.slice(1),category:"Umum",command,text:content});save();render();toast("Template ditambahkan.");return;
 }
 if(form.id==="tagForm"){const tag=String(d.tag||"").trim();if(!tag)return;if(state.tags.some(x=>x.toLowerCase()===tag.toLowerCase())){toast("Tag sudah ada.");return;}state.tags.push(tag);save();render();toast("Tag ditambahkan.");return;}
 if(form.id==="customerIdleForm"){const minutes=Number(d.minutes);if(!Number.isInteger(minutes)||minutes<1||minutes>10080){toast("Waktu tunggu 1 sampai 10080 menit.");return;}state.settings.customerIdle={enabled:Boolean(d.enabled),minutes,action:d.action==="Follow up"?"Follow up":"Notify agent"};save();render();toast("Customer Idle disimpan.");return;}
});
function syncSidebar(){
  const expanded=!document.body.classList.contains("sidebar-collapsed");
  const button=document.getElementById("menuToggle");
  button.setAttribute("aria-expanded",String(expanded));
  button.setAttribute("aria-label",expanded?"Ringkas menu":"Buka menu");
}
document.getElementById("menuToggle").addEventListener("click",()=>{document.body.classList.toggle("sidebar-collapsed");syncSidebar();});
document.getElementById("sidebarClose").addEventListener("click",()=>{document.body.classList.add("sidebar-collapsed");syncSidebar();});
document.getElementById("reportMenuToggle").addEventListener("click",event=>{
  const submenu=document.getElementById("reportSubmenu");
  if(document.body.classList.contains("sidebar-collapsed")){document.body.classList.remove("sidebar-collapsed");syncSidebar();submenu.hidden=false;}
  else submenu.hidden=!submenu.hidden;
  event.currentTarget.setAttribute("aria-expanded",String(!submenu.hidden));
});
document.getElementById("dashboardMenuToggle").addEventListener("click",event=>{
 const submenu=document.getElementById("dashboardSubmenu");
 if(document.body.classList.contains("sidebar-collapsed")){document.body.classList.remove("sidebar-collapsed");syncSidebar();submenu.hidden=false;}
 else submenu.hidden=!submenu.hidden;
 event.currentTarget.setAttribute("aria-expanded",String(!submenu.hidden));
});
document.getElementById("settingsMenuToggle").addEventListener("click",event=>{
  const submenu=document.getElementById("settingsSubmenu");
  if(document.body.classList.contains("sidebar-collapsed")){
    document.body.classList.remove("sidebar-collapsed");syncSidebar();submenu.hidden=false;
  }else submenu.hidden=!submenu.hidden;
  event.currentTarget.setAttribute("aria-expanded",String(!submenu.hidden));
});
document.getElementById("offlineToggle").addEventListener("click",()=>{const me=state.agents[0],at=new Date().toISOString();if(me.online){me.availabilityLog.push({start:me.onlineSince||at,end:at,status:"online"});me.onlineSince=null;}else me.onlineSince=at;me.online=!me.online;if(!me.online){state.tickets.filter(room=>room.agent===me.name&&!['Selesai','Ditutup'].includes(room.status)).forEach(room=>{room.agent=null;room.status="Belum ditugaskan";log(room,"Agent offline. Chat masuk antrean.");});}routeQueued();save();render();toast(me.online?"Status online. Antrean dibagikan sesuai kapasitas.":"Offline. Chat aktif masuk antrean.");});
const roleSelect=document.createElement("select");roleSelect.id="demoRole";roleSelect.setAttribute("aria-label","Simulasi peran");roleSelect.title="Simulasi peran";roleSelect.innerHTML=["Admin","Supervisor","Agent"].map(role=>`<option ${state.sessionRole===role?"selected":""}>${role}</option>`).join("");document.getElementById("profileButton").before(roleSelect);roleSelect.addEventListener("change",()=>{state.sessionRole=roleSelect.value;if(state.sessionRole!=="Admin"&&(page.startsWith("settings")||page.startsWith("account")))page="tickets";if(state.sessionRole==="Agent"&&page.startsWith("report"))page="tickets";save();render();});
document.getElementById("profileButton").addEventListener("click",()=>toast("Mode simulasi: "+state.sessionRole));
setInterval(()=>{document.getElementById("wibClock").textContent=nowWib()+" WIB";expireSurveys();routeQueued();state.tickets.forEach(syncSla);save();},30000);
expireSurveys();
if(window.matchMedia?.("(max-width: 700px)")?.matches)document.body.classList.add("sidebar-collapsed");
syncSidebar();
render();
