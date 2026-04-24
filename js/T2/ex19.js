// Multer middleware
var expr=require("express")
var app=expr()
var multer=require("multer")
var path=require("path")
htmlPath=path.join(__dirname,"../../html/T2")
app.use(expr.static(htmlPath,{index:"multer.html"}))
var storage=multer.diskStorage({
    destination:"hello",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload=multer({storage})
app.post("/data",upload.single("mypic"),(req,res)=>{
    const file=req.file
    if(file){
        res.send("File exists")
    }
})
app.listen(5006)