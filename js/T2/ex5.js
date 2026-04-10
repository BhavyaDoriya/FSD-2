var expr=require("express")
var app=expr()
app.get("/:name",(req,res)=>{
    res.send(`<h1>Welcome ${req.params.name}</h1>`)
})
app.listen(5006)