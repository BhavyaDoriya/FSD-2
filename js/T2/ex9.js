//Serving files on browser using express js
var expr=require("express")
var path=require("path")
var app=expr()
utilPath=path.join(__dirname,"../../util")
htmlPath=path.join(__dirname,"../../html/T2/")
// app.use(expr.static(utilPath))
// app.listen(5006,()=>{
//     console.log("Server is running on port 5006")
// })

//following by default take index.html file to serve on browser
//if you want to server any other file then you have to specify the file name is static middleware
// app.use(expr.static(htmlPath,{index:"newFile.html"}))
app.use(expr.static(htmlPath))
app.listen(5006,()=>{
    console.log("Server is running on port 5006")
})