//Cookies
expr=require("express")
app=expr()
cp=require("cookie-parser")
// app.use(cp())
// app.get("/data",(req,res)=>{
//     res.cookie("name","express")
//     res.cookie("age",30)
//     res.cookie("email","exp@gmail.com",{maxAge:20000})  
//     res.send(req.cookies)  
// })
// app.listen(5006)


//Cookies with form
const path=require("path")
const htmlPath=path.join(__dirname,"../../html/T2")
app.use(cp())
app.use(expr.static(htmlPath,{index:"cookieForm.html"}))
app.use(expr.urlencoded({extended:true}))
app.post("/next",(req,res)=>{
    res.cookie("fname",req.body.fname)
    res.cookie("lname",req.body.lname)
    res.cookie("email",req.body.email)
    res.redirect("/data")
})
app.get("/data",(req,res)=>{
    res.send(`Welcome ${req.cookies.fname} ${req.cookies.lname}`)
})
app.listen(5006)