// // Custom middlewares:MAke your own middle var function
//Example 1:
// //middle ware func-1
// var cb=(req,res,next)=>{
//     console.log("This is cb")
       // //next will move it to next middleware function(explaination: in app.use you can pass multiple middlewares so if you execute first middleware then you tell it to move forward to the next one that is why we use next())
//     next()
// }
// //Middle ware function 2
// var cb1=(req,res,next)=>{
//     console.log("This is cb1")
//     res.type("text/html")
//     res.write("This is cb1")
//     next()
// }
// var expr=require("express")
// var app=expr()
//Passing both middleware functions
// app.use("/ee",cb,cb1)
// app.get("/ee",(req,res)=>{
//     res.write("<h1>This is home page</h1>")
//     res.send()
// })
// app.listen(5006)

// Example 2: set name,subjects and marks using three different middleware functions and show all setted values on home page

var name_middleware=(req,res,next)=>{
    //setting new parameters like following to the request object is called mutation
    req.name="Nigga"
    console.log("name added")
    next()
}
var subjects_middleware=(req,res,next)=>{
    console.log("Subjects added")
    req.subjects=["Maths","Science","English"]
    next()
}
var marks_middleware=(req,res,next)=>{
    console.log("Marks added")
    res.marks=[89,34,78]
    next()
}
var expr=require("express")
var app=expr()
app.use(name_middleware,subjects_middleware,marks_middleware)
app.get("/",(req,res)=>{
    name=req.name
    subjects=req.subjects
    marks=res.marks 
    res.json({name,subjects,marks})
    res.send()
})
app.listen(5006)
