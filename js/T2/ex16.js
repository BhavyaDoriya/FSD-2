//api
var expr=require("express")
app=expr()
const mvi=[{
    id:"101",
    name:"Don-1",
    year:'2006'
},
{
    id:"102",
    name:"Don-2",
    year:'2012'
},
{
    id:"103",
    name:"Don-3",
    year:'2103'
}]
app.get("/m",(req,res)=>{
    res.json(mvi)
})
app.get("/m/:id",(req,res)=>{
    cm=mvi.filter((a)=>a.id==req.params.id)
    if(cm.length===1){
        res.json(cm[0])
    }
    else{
        res.send("No data found")
    }
})
app.listen(5006)


