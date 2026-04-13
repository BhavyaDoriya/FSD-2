// Middlewares in Express
//Middleware is simply a layer between server and client such that server does not have to take load of every processes.
//Example: Think of atm machine, atm machine has a middleware that sends otp to user's mobile number. Only after the user passes
// through middleware layer by entering right otp, the system established connection to the server.

//Method to set a middleware:
// app.use("path","middleware function")
// when you give no path then it will be executed for all the requests (by default path:"/")
// when you give path then it will be executed for that path and the paths under it only(for example path:"contact" 
// then the middleware will be executable on pages such as "/contact/" or "/contact/email/" or "contact/blah blah blah/so on")

var expr=require("express")
var app=expr()
//urlencoded is an inbuilt middleware in express: it parses html body response when data is transferred through post method
// extended:true will allow us to parse nested objects in the query string while extended:false will not allow us to parse nested objects in the query string(extended false will only parse 1d objects)
app.use(expr.urlencoded({extended:true}))
app.get("/",(req,res)=>{
    //creating a form on homepage to understand how post method works to send data in html body format to the server but in between the way it is encoded by the middleware
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
//on path /data we will see encoded information live
app.post("/data",(req,res)=>{
        //Third method of req as mentioned in ex5.js: res.body
        name=req.body.uname
        age=req.body.age
        res.send(`Name: ${name}, Age: ${age}`)
    })
app.listen(5006)