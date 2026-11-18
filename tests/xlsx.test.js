const assert=require("node:assert/strict");
const xlsx=require("../xlsx.js");
(async()=>{
 const blob=xlsx.workbook([["Name","Count"],["A&B",2]]);
 const data=new Uint8Array(await blob.arrayBuffer()),text=new TextDecoder().decode(data);
 assert.equal(blob.type,"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
 assert.deepEqual([...data.slice(0,4)],[0x50,0x4b,0x03,0x04]);
 assert.ok(text.includes("xl/worksheets/sheet1.xml"));
 assert.ok(text.includes("A&amp;B"));
 assert.deepEqual([...data.slice(-22,-18)],[0x50,0x4b,0x05,0x06]);
 console.log("XLSX package structure passed");
})().catch(error=>{console.error(error);process.exitCode=1;});
