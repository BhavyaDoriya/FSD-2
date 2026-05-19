var expr=require("express")
var app=expr()
var path=require("path")
htmlPath=path.join(__dirname,"../../html/T2/")
cssPath=path.join(__dirname,"../../css/T2/")
utilPath=path.join(__dirname,"../../util")
//when we want to use css file which is not in the same directory as html file
//if you command the code below on line 8 then it will not give any css styling
app.use(expr.static(cssPath))
app.use(expr.static(utilPath))
app.get("/",(req,res)=>{
    res.sendFile(htmlPath+"index.html")
})
app.listen(5006,()=>{
    console.log("Server is running on port 5006")
})