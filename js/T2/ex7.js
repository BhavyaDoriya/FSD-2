// // Custom middlewares
// var cb=(req,res,next)=>{
//     console.log("This is cb")
//     next()
// }
// var cb1=(req,res,next)=>{
//     console.log("This is cb1")
//     res.type("text/html")
//     res.write("This is cb1")
//     next()
// }
// var expr=require("express")
// var app=expr()
// app.use("/ee",cb,cb1)
// app.get("/ee",(req,res)=>{
//     res.write("<h1>This is home page</h1>")
//     res.send()
// })
// app.listen(5006)

// Task
var name_middleware=(req,res,next)=>{
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
