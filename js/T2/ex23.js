var expr=require("express")
var app=expr()
var multr=require("multer")
var fs=require("fs")
app.get("/",(req,res)=>{
    res.send(`
        <form action="/upload" method="post" enctype="multipart/form-data">
        <input type="file" name="myimage" accept=".jpg,.jpeg,.png">
        <input type="submit" value="Upload Image">
        </form>
        `)
})
var storage=multr.diskStorage({
    destination:"IMAGES",
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
var upload=multr({storage})
app.post("/upload",upload.single("myimage"),(req,res)=>{
    const file=req.file
    var mime=file.mimetype
    var isImage=mime.startsWith("image/")
    if(isImage){
        res.send(`${file.originalname} has been uploaded`)
    }
    else{
        fs.unlinkSync(file.path);
        res.send("Please upload an image file")
    }
    
})
app.listen(5006)