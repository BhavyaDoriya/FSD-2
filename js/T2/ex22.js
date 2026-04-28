//EJS
var expr=require("express")
var app=expr()
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    res.render("ex22",{name:"Bhavya"})
})
app.listen(5006)