// Session with form
// const expr=require("express")
// const app=expr()
// const ss=require("express-session")
// const path=require("path")
// app.use(ss({
//     secret:"potato",
//     resave:true,
//     saveUninitialized:false
// }))
// htmlPath=path.join(__dirname,"../../html/T2")
// app.use(expr.static(htmlPath,{index:"sessionForm.html"}))
// app.get("/submit",(req,res)=>{
//     res.type("text/html")

//     req.session.fname=req.query.uname
//     req.session.pass=req.query.pass
//     res.redirect("/fetch")
// })
// app.get("/fetch",(req,res)=>{
//     res.type("text/html")
//     res.write("Welcome "+req.session.fname)
//     res.write(`<a href='/destroy'>Logout</a>`)
//     res.send()
// })
// app.get("/destroy",(req,res)=>{
//     res.type("text/html")
//     req.session.destroy()
//     res.clearCookie("connect.sid")
//     res.redirect("/")

// })
// app.listen("5006")


//Task -5 (Session)

// Write a script to meet following requirements:

//  Create session.html file page which contains form (username,password,login button). and open it on localhost.

// After clicking submit button, it should jump on “save” page. Store username and password in session.

// After saving session, redirect to “fetchdata” page and read value. Put a LOGOUT link button here. On this page check authentication of user. User name and password must be “admin” and “admin@123” respectively.

// If this condition is true then display welcome admin and display logout link on this page(fetchdata).

// By clicking on logout link user should jump to “destroy” page and destroy the session there and display the message “Session destroyed”.  And give the link of “login” under that message. By clicking that link user will be redirected to the home page.

// Else display “Please enter valid username and password” and login link on this page(fetchdata).
// const expr=require("express")
// const app=expr()
// const ss=require("express-session")
// const { connect } = require("http2")
// const path=require("path")
// app.use(ss({
//     secret:"potato",
//     resave:true,
//     saveUninitialized:false
// }))
// htmlPath=path.join(__dirname,"../../html/T2")
// app.use(expr.static(htmlPath,{index:"sessionForm.html"}))
// app.get("/submit",(req,res)=>{
//     res.type("text/html")
//     req.session.uname=req.query.uname
//     req.session.pass=req.query.pass
//     res.redirect("/fetchdata")
// })
// checkadmin=(req,res)=>{
    
//     res.type("text/html")
//     if(req.session.uname==="admin" & req.session.pass==="admin@123"){
//         res.write("Welcome "+req.session.uname)
//         res.write(`<a href="/destroy">Logout</a>`)
//         res.send()
//     }
//     else{
//         req.session.destroy()
//         res.clearCookie("connect.sid")
//         res.write("<h1>Please Enter valid username or password</h1>")
//         res.write(`<a href="/">Login</a>`)
//         res.send()
//     }
    
    
// }
// app.get("/fetchdata",checkadmin)
// app.get("/destroy",(req,res)=>{
//         res.type("text/html")
//         req.session.destroy()
//         res.clearCookie("connect.sid")
//         res.write("<h1>Session Destroyed</h1>")
//         res.write(`<a href="/">Login</a>`)
//         res.send()

    

// })
// app.listen("5006")


// Write a Node.js script using Express framework to meet the following requirements:

// Create a folder named public and add a file index.html which contains a login form (username, password, login button). This page should open on localhost.

// After clicking the submit button, the request should be sent to /login using POST method. Store the username in session and redirect the user to order.html.

// Create an order.html page which contains a form (product name, quantity, submit button).

// After submitting the order form, the request should be sent to /order using POST method. Store product and quantity in session and redirect to /summary page.

// On /summary page (using GET method):

// Read session data (username, product, quantity)

// Display all values on the page

// Provide a logout link:

// On clicking logout, destroy the session

// Redirect user to login page


const expr=require("express")
const app=expr()
const ss=require("express-session")
const path=require("path")
app.use(ss({
    secret:"potato",
    resave:true,
    saveUninitialized:false
}))
htmlPath=path.join(__dirname,"../../html/T2")
app.use(expr.static(htmlPath,{index:"sessionForm2.html"}))
app.use(expr.urlencoded({extended:true}))
app.post("/submit",(req,res)=>{
    req.session.uname=req.body.uname
    res.redirect("/order.html")
})
app.post("/order",(req,res)=>{
    req.session.oname=req.body.oname
    req.session.qty=req.body.qty
    res.redirect("/summary")
})
app.get("/summary",(req,res)=>{
    res.write(`<h1>Username : ${req.session.uname} 
                Ordername:${req.session.oname}
                Order quantity: ${req.session.qty}</h1>`)
    res.write(`<a href="/destroy">Logout</a>`)
    res.send()
})
app.get("/destroy",(req,res)=>{
        res.type("text/html")
        req.session.destroy()
        res.clearCookie("connect.sid")
        res.write("<h1>Session Destroyed</h1>")
        res.write(`<a href="/">Order again</a>`)
        res.send()
})
app.listen("5006")