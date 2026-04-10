//Routing in Express.js
var expr=require("express")
var app=expr()
app.get("/",(req,res)=>{
    res.send("<h1>This is home page</h1>")
})
app.get("/about",(req,res)=>{
    res.send("<h1>This is about page</h1>")
})
app.get("/contact",(req,res)=>{
    res.send("<h1>This is contact page</h1>")
})
app.listen(5006)