// // Task-3

// // Write express js script to perform tasks as asked below. (Get Method)

// // Create one HTML file which contains two number type input fields, one dropdown which contains options like (select, addition, subtraction, multiplication, division) and one submit button.

// // The input fields must contain the value greater than 0 else it will give a message “Please enter the valid message”. Also, user must select any of the formula from the dropdown else give a message “You have not selected any formula”. (Message will be displayed on “/calc” page.)
// // var expr=require("express")
// // var app=expr()
// // var path=require("path")
// // let htmlPath=path.join(__dirname,"../../html/T2/")
// // app.use(expr.static(htmlPath,{index:"ex11.html"}))
// // app.use(expr.urlencoded({extended:true}))
// // app.post("/calc",(req,res)=>{
// //     let num1=req.body.num1
// //     let num2=req.body.num2
// //     let operation=req.body.operation
// //     switch(operation){
// //         case "add":
// //             res.send(`The result of addition is ${Number(num1)+Number(num2)}`)
// //             break           
// //         case "subtract":
// //             res.send(`The result of subtraction is ${Number(num1)-Number(num2)}`)
// //             break
// //         case "multiply":
// //             res.send(`The result of multiplication is ${Number(num1)*Number(num2)}`)
// //             break
// //         case "divide":
// //             res.send(`The result of division is ${Number(num1)/Number(num2)}`)
// //             break
// //     }
// // })
// // app.listen(5006,()=>{
// //     console.log("Server is running on port 5006")
// // })

// // Task-4

// // Write express script to get form data using post method and display First name in Red color,
// // Password in Green Color and Gender in Black color. 

// var expr=require("express")
// var app=expr()
// var path=require("path")
// let htmlPath=path.join(__dirname,"../../html/T2/")
// app.use(expr.static(htmlPath,{index:"ex11Task4.html"}))
// app.use(expr.urlencoded({extended:true}))
// app.post("/print",(req,res)=>{
//     let uname=req.body.uname
//     let pass=req.body.pass
//     let gender=req.body.gender
//     res.send(`<h1 style="color:red">First Name: ${uname}</h1>
// <h1 style="color:green">Password: ${pass}</h1>
// <h1 style="color:black">Gender: ${gender}</h1>`)
//     })
// app.listen(5006,()=>{
//     console.log("Server is running on port 5006")
// })


// //Task-5

// Write express js script to perform the tasks as asked below. (Post method)

// 1)Create one HTML file named ljform.html and add one form which contains username, password and submit button. Data should be submitted by HTTP post method.

// 2)Submit button is of black color with white text. (External CSS)

// 3)On home page form should be displayed and while submitting the form, on next page named “/login” if username is admin then it will display “Welcome admin” else display  “Please login with Admin name”.

// var expr=require("express")
// var app=expr()
// var path=require("path")
// let htmlPath=path.join(__dirname,"../../html/T2/")
// app.use(expr.static(htmlPath,{index:["ljform.html","ljform.css"]}))
// app.use(expr.urlencoded({extended:true}))
// app.post("/login",(req,res)=>{
//     let uname=req.body.uname
//     let pass=req.body.pass
    
//     if(uname==="admin"){
//         res.send("<h1>Welcome admin</h1>")
//     }
//     else{
//         res.send("<h1>Please login with Admin name</h1>")
//     }
// })
// app.listen(5006,()=>{
//     console.log("Server is running on port 5006")
// })


// Task-6
// Write express js script to perform following tasks.  (Middleware)
// Create one html file which contains one text field for name, email field and checkbox for subscription. 
// Html file will be loaded on home page. Email and name fields are required fields.
// On login page welcome user and email id data should be printed.

// a. If user checked the subscription then “Thank you for the subscription” message will be printed  and 
// “logout” link will be displayed under the message. If user clicks logout link then he/she will be redirected 
// to the home page.
// b. If user has not opted for the subscription then “You can subscribe to get daily updates” 
// message will be printed and “subscribe” link will be displayed under the message. If user clicks 
// subscribe link then he/she will be redirected to the subscription page. In this page “Thank you for 
// the subscription” message will be printed and “logout” link will be displayed under the message. If 
// user clicks logout link then he/she will be redirected to the home page. Use concept of the middleware
//  and you can use any of http methods(get/post).

var expr=require("express")
var app=expr()
var path=require("path")
let htmlPath=path.join(__dirname,"../../html/T2/")
app.use(expr.static(htmlPath,{index:"ex11Task6.html"}))
app.use(expr.urlencoded({extended:true}))
m1=(req,res,next)=>{
    let name=req.body.uname
    let email=req.body.email
    let subscription=req.body.subscribe
    res.write(`<h1>Welcome ${name}</h1>
    <h1>Your email id is ${email}</h1>`)
    if(subscription){
        res.write(`<h1>Thank you for the subscription</h1>
            <br>
            <a href="/">Logout</a>`)
        res.send()
    }
    else{
        res.write(`<h1>You can subscribe to get daily updates</h1>
            <br>
            <a href="/subscribe">Subscribe</a>`)
        res.send()
    }
}
app.get("/subscribe",(req,res)=>{
    res.write(`<h1>Thank you for the subscription</h1>`)
    res.write(`<a href="/">Logout</a>`)
    res.send()
})
app.post("/login",m1)
app.listen(5006,()=>{
    console.log("Server is running on port 5006")
})