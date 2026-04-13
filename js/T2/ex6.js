// Middle wares in Express
// app.use("path","middleware function")
// when you give no path then it will be executed for all the requests
// when you give path then it will be executed for that path and the paths under it only
var expr=require("express")
var app=expr()
// extended:true will allow us to parse nested objects in the query string while extended:false will not allow us to parse nested objects in the query string
app.use(expr.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    res.send(`
        <form action="/data" method="post">
        <label for="uname">Username</label>
        <input type="text" name="uname">
        <label for="age">Age</label>
        <input type="number" name="age">
        <button type="submit">Submit</button>
        </form>
        `)
    
})
app.post("/data",(req,res)=>{
        name=req.body.uname
        age=req.body.age
        res.send(`Name: ${name}, Age: ${age}`)
    })
app.listen(5006)