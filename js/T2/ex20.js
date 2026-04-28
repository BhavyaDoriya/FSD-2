const path = require('path');
require("dotenv").config({path: path.resolve(__dirname, '../../.env') })
var expr=require("express")
var nm=require("nodemailer")
app=expr()

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
var mailOption={
    from:process.env.GMAIL,
    to:process.env.GMAIL_TO,
    subject:"Song",
    html:"<h1>What if we could rewrite the stars</h1>"
}
trans.sendMail(mailOption,(err,info)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(info)
    }
})