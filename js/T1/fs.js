var fs=require("fs")
fs.writeFileSync("../../util/a.txt",'{"hello":"abc"}')
var data=fs.readFileSync("../../util/a.txt","utf-8")
console.log(JSON.parse(data))