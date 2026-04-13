//Write express JS script to load in html file having username, password and submit button. On clicking of submit button, 
// it should jump on check page using post method. If username is “admin” then jump on next middleware to print “welcome admin”.
//  For any other username it should stay on same middleware to print warning message in red color. 


// var expr=require("express")
// var app=expr()
// var adminMiddleware=(req,res,next)=>{
//     console.log("Admin middleware")
//     res.write("WElcome admin")
//     res.send()
// }
// var checkUser=(req,res,next)=>{
//     username=req.body.uname 
//     if(username=="admin"){
//         next()
//     }
//     else{
//         res.send('<p style="color: red;">Invalid username or password</p>')
//     }
// }
// app.use(expr.urlencoded({extended:true}))
// app.get("/",(req,res)=>{
//     res.send(`
//         <form method="post" action="/check">
//         <label for="uname">Username:</label>
//         <input type="text" id="uname" name="uname">
//         <label for="password">Password:</label>
//         <input type="password" id="pass" name="pass">
//         <button type="submit">Submit</button>
//     </form>`)

// })
// app.post("/check",checkUser,adminMiddleware,(req,res)=>{
    
// })
// app.listen(5006)







//                                                      WORK IN PROGRESS(*IGNORE*)


// Develop web app that simulates exam hall entry using middlewares.
//1.when student access /class then log student entered the campus
//2. verify wheather student has valid id card or not
//3. if valid then allow entry and display welcome message if not valid then deny acceess saying you cannot enter in class
var expr=require("express")
var app=expr()
var classMiddleware=(req,res)=>{
    console.log("Student entered the campus")
    res.write("Student entered the campus\n")
    next()
   
}
var checkId=(req,res,next)=>{
     if(req.params.id=="69"){
        next()
    }
    else{
        res.write("You cannot enter in class")
        res.send()
    }
}
var welcomestudent=(req,res)=>{
    res.write("Welcome student")
    console.log("Welcome student")
    res.send()
}
app.get("/class/:id",classMiddleware,checkId,welcomestudent,(req,res)=>{
    
})
app.listen(5006)