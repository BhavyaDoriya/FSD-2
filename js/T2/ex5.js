// Methods of req
var expr=require("express")
var app=expr()
app.get("/:name",(req,res)=>{
    res.send(`<h1>Welcome ${req.params.name}</h1>`)
})
// Imagine url is like below
// var addr="localhost:5678/user/23?name=Pratham&age=19";
// then you can access query as req.query
app.get("/user/:id",(req,res)=>{
    uid=req.params.id
    name=req.query.name
    age=req.query.age
    // res.json({uid,name,age})
    res.json({"message":"Data received","Params":{uid},"Query":{name,age}})
})
app.listen(5006)


