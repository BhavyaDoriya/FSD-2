//Cookies tasks


//Task-2
//You have been assigned to develop a user feedback form for a website using Express.js and cookies. 

// Implement the following requirements:

// Create a form with the following fields:

// Name (input field)

// Email (input field)
// Message (textarea field)

// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent)

// When the user submits the form, store their feedback information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds.

// Display a confirmation message to the user after successfully submitting the form & Create a link to display the feedback details stored in the "feedback" cookie. 

// When the user click to the link, retrieve the feedback information from the cookie and display it on the page also include a link on the feedback details page to Logout.

// When the user clicks the link, user redirected to home page
var expr=require("express")
var app=expr()
var path=require("path")
htmlPath=path.join(__dirname,"../../html/T2")
var cp=require("cookie-parser")
app.use(cp())
app.use(expr.static(htmlPath,{index:"task2cookie.html"}))
app.use(expr.urlencoded({extended:true}))
app.post("/submit-feedback",(req,res)=>{
    const {name,email,msg,rating}=req.body
    const fb={name,email,msg,rating}
    res.cookie("feedback",fb,{maxAge:10000})
    res.send(`Thank you for your feedback <a href="/feedback-details">Check Feedback</a>`)

})
app.get("/feedback-details",(req,res)=>{
    data=req.cookies.feedback
    if(data){
        res.send(data)
    }
    else{
        res.write("No cookie available")
    }
})
app.listen(5006)