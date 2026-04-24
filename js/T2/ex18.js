// Tasks for API
// Task (Restful API)-1: Write an expressJS code in which RESTapi is created for json object named data which contains name,id,branch,city and contact properties. 

// On “/api” page it should display all the content.

// Upon passing id on the browser url it should display the content having that id. (i.e. on localhost:7899/api/101) 

// Upon passing branch on the browser url it should display the content having that branch. (i.e. on localhost:7899/api/cse)
//connected with server2.js

var expr=require("express")
var api=require("./server2.js")
var app=expr()
app.use("/",api)
app.listen(5006)