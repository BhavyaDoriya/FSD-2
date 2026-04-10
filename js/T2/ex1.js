var expr=require("express")
var app=expr()
app.get("/",(req,res)=>{
    res.set("Content-Type","text/html")
    res.send("<h1>Hello, World!fjjfjj JJDJJDJJJ fdfdifij</h1>")
})
app.listen(6969,"0.0.0.0",()=>{
    console.log("Server is running on port 6969")
})