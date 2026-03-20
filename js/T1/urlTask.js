var u=require("url")
let addr="http://localhost:8000/default.html?year=2026&month=march#warupdate"
//depricated
process.noDeprecation=true
// when you write true in constructor then query will be converted to object otherwise it willl be a string
var q=u.parse(addr,true)
console.log(q)
console.log(q.port)
console.log(q.query)
console.log(q.search)
console.log(q.query.year)

// Non depricated method
let b=new URL(addr)
console.log(b)
console.log(b.port)
console.log(b.query)//there is no query named key in URL object
console.log(b.search)

// Replace webserver with filesystem for all the tasks
// Task-1
addr="https://localhost:8000/test?T1=25&T2=24&T3=25#ABC"
// reaad the url and create a file result.txt with avg of test marks
var q=u.parse(addr,true)
fs=require("fs")
fs.writeFileSync("../../util/Task1result.txt",((parseInt(q.query.T1)+parseInt(q.query.T2)+parseInt(q.query.T3))/3).toString())
// alternate
let data=new URL(addr)
console.log(data)
let t1=parseInt(data.searchParams.get("T1"))
let t2=parseInt(data.searchParams.get("T2"))
let t3=parseInt(data.searchParams.get("T3"))
let avg=(t1+t2+t3)/3
fs.writeFileSync("../../util/result.txt",`avg is ${avg}`)


// Task -2
//search good morning in google search copy full address from there and process in a file "user search good morning on google.com"
addr="https://www.google.com/search?q=good+morning&rlz=1C1CHZN_enIN1120IN1120&oq=Good+Morning&gs_lcrp=EgZjaHJvbWUqDQgAEAAYgwEYsQMYgAQyDQgAEAAYgwEYsQMYgAQyCggBEAAYsQMYgAQyDQgCEAAYgwEYsQMYgAQyBwgDEAAYgAQyCggEEAAYsQMYgAQyCggFEAAYsQMYgAQyCggGEAAYsQMYgAQyBwgHEAAYgAQyBwgIEAAYgAQyBwgJEAAYgATSAQgyMzkzajBqN6gCCLACAfEFFZ9rGgr3rwM&sourceid=chrome&ie=UTF-8"
var q=u.parse(addr,true)
fs=require("fs")
let host=q.host.slice(4)
fs.writeFileSync("../../util/Task2result.txt",`user search ${q.query.oq} on ${host} `)