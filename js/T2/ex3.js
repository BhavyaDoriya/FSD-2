//Routing in Express.js
//Routing in express js has been made clearer from http cauase this one does not have nested if and else routing
var expr=require("express")
var app=expr()
//Same as node.js http
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