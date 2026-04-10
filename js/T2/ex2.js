var expr=require("express")
var app=expr()
data={name:"XYZ",age:24}
app.get("/",(req,res)=>{
    // res.write(JSON.stringify(data))
    
    // res.send(data)
    // res.json(data)
    res.write(data.age+"")
    res.send()
})
app.listen(5006)