//install session third party module
//npm install express-session
var expr=require("express")
var app=expr()
ss=require("express-session")
app.use(ss({
    secret:"hello123",
    resave:true,
    saveUninitialized:true
}))
app.get("/",(req,res)=>{
    if(req.session.page_views){
        req.session.page_views++;
        res.send(`You visited page ${req.session.page_views}`)
    }
    else{
        req.session.page_views=1
        res.send("welcome you visited page")
    }
})
//once the session is deleted by going to console-->application-->cookies-->connect:sid(deleted), the page starts counting from zero
app.listen(5006)