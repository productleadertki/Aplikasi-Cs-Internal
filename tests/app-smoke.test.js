const assert=require("node:assert/strict"),fs=require("node:fs"),vm=require("node:vm"),path=require("node:path");
const noOp=()=>{},classList={add:noOp,remove:noOp,toggle:noOp,contains:()=>false};
const element=()=>({classList,style:{},dataset:{},innerHTML:"",textContent:"",scrollTop:0,hidden:false,setAttribute:noOp,getAttribute:()=>"",addEventListener:noOp,querySelector:()=>null,querySelectorAll:()=>[],before:noOp,insertAdjacentHTML:noOp,append:noOp,remove:noOp,focus:noOp});
const nodes=new Map(),get=id=>{if(!nodes.has(id))nodes.set(id,element());return nodes.get(id);};
const document={getElementById:get,querySelector:()=>null,querySelectorAll:()=>[],addEventListener:noOp,createElement:element,body:get("body")};
const memory=new Map(),localStorage={getItem:key=>memory.get(key)||null,setItem:(key,value)=>memory.set(key,value)};
const window={addEventListener:noOp,matchMedia:()=>({matches:false})};
const context=vm.createContext({document,window,localStorage,Intl,Date,Math,Number,String,Array,Object,JSON,RegExp,Set,Map,Blob,TextEncoder,URL,setTimeout:noOp,clearTimeout:noOp,setInterval:noOp,navigator:{}});
for(const file of ["engine.js","xlsx.js","app.js"])vm.runInContext(fs.readFileSync(path.join(__dirname,"..",file),"utf8"),context,{filename:file});
for(const page of ["tickets","settings","settings-customer-survey","report-general","report-csat","report-ces","report-nps","user-preview"]){vm.runInContext(`page=${JSON.stringify(page)};render()`,context);assert.ok(get("mainContent").innerHTML.length>0,page);}
console.log("App startup and core pages passed");
