// Multer middleware
// var expr=require("express")
// var app=expr()
// var multer=require("multer")
// var path=require("path")
// htmlPath=path.join(__dirname,"../../html/T2")
// app.use(expr.static(htmlPath,{index:["multer.html","effect.css"]}))
// var storage=multer.diskStorage({
//     destination:"hello",
//     filename:function(req,file,cb){
//         cb(null,file.originalname)
//     }
// })
// var upload=multer({storage})
// //for single file upload.single("mypic")
// app.post("/data",upload.array("mypic",3),(req,res)=>{
//     //for 1 file it is req.file. for multiple files it is req.files
//     const file=req.files
//     if(file){
//         for(i of file){
//             res.write(`your file ${i.originalname} in ${i.destination}`)
//         }
//         res.send()
//     }
//     else{
//         res.send("File not found")
//     }
// })
// app.listen(5006)


//Write an express js script to configure the multer middleware. Perform following tasks.
// 1) Create a html form file named "form.html" in public folder. This file contain centrally oriented heading(h3) "Upload your File" in red color with background-color aqua. Along with

// choose file option(to browse and select file) and submit button(to upload the file). (Must use external css having name “effect.css” in public folder)

// 2) Create a js file to show result after uploading any type of file, message should be displayed

// on "/upload" page "(file original name) has been uploaded".(Css effect must include while running js code)

// 3) Save uploaded files to specific directory named "File". And in this folder file must be stored in format of "data-file.pdf" where "data" is the field name.

var expr=require("express")
var app=expr()
var multer=require("multer")
var path=require("path")
htmlPath=path.join(__dirname,"../../html/T2")
app.use(expr.static(htmlPath,{index:["multer.html","effect.css"]}))
var storage=multer.diskStorage({
    destination:"hello",
    filename:function(req,file,cb){
        cb(null,file.fieldname+"-"+"file"+".pdf")
    }
})
var upload=multer({storage,limits:{fileSize:1024*1024}})
//for single file upload.single("mypic")
app.post("/data",upload.array("mypic",3),(req,res)=>{
    //for 1 file it is req.file. for multiple files it is req.files
    const file=req.files
    if(file){
        for(i of file){
            res.write(`your file ${i.originalname} in ${i.destination}`)
        }
        res.send()
    }
    else{
        res.send("File not found")
    }
})
app.listen(5006)
