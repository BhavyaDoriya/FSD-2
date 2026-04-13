// Methods of req
//(1)req.url same as before
//(2)req.params-->used below
//(3)req.body-->will see in forms
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
    //following commented part will automatically set object as {"uid":"uid_value","name":"name_value","age":"age_value"}- no need to pass key names, it willl automatically set variable names as key names
    // res.json({uid,name,age})
    

    //another example of same
    res.json({"message":"Data received","Params":{uid},"Query":{name,age}})
})
app.listen(5006)


