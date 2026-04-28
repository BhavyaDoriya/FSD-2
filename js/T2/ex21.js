//Task-3
// Node mailer task
// Perform the following tasks as asked:
// 1) Create a HTML file for response form and this file should be loaded on home(‘/’) page.
// •Fields are : Name, Email and Submit button.
// 2) Once Response is submitted, message “Thank you for your response.” Will be displayed on page ‘/response’ and also send mail to the entered email id with the submitted response.
otp=""
for (let i=0;i<6;i++){
        otp+=Math.floor(Math.random()*(9-0+1))+0
}
var expr=require("express")
var app=expr()
var nm=require("nodemailer")
var path=require("path")
var multer = require("multer");
require("dotenv").config({path:path.join(__dirname,"../../.env")})
var upload = multer({ dest: 'uploads/' });
htmlPath=path.join(__dirname,"../../html/T2")
app.use(expr.static(htmlPath,{index:"nodemailer.html"}))
app.use(expr.urlencoded({extended:true}))
app.post("/response",upload.single("mypic"),(req,res)=>{
    var trans=nm.createTransport(
    {
        host:"smtp.gmail.com",
        port:587,
        auth:{
            user:process.env.GMAIL,
            pass:process.env.APP_PASS
        }
    }
    )
    var toEmail=req.body.email
    var pic=req.file
    var mailOption={
    from:process.env.GMAIL,
    to:toEmail,
    subject:"Song",
    html:"Your otp is: "+otp+"<br> You can find your attachments here:",
    attachments:[{
        filename:"poster.jpg",
        path:pic.path
    }
]
}
    trans.sendMail(mailOption,(err,info)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(info)
        }
    })
    
    res.send(`<form action="/verify" method="POST">
    <input type="number" name="otp" placeholder="Enter OTP" required>
    <button>Submit</button>
</form>`)
})
app.post("/verify",(req,res)=>{
    if(req.body.otp===otp){
        res.send(`YOu are welcome`)
    }
    else{
        res.send("Incorrect OTP")
    }
})
app.listen(5006)


