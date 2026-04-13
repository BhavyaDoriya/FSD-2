//first install express in your current working directory(which is rn FSD-2/js/T2/).
//To install express, run the command "npm install express" in your terminal.

var expr=require("express")
//create express instance
var app=expr()
//get method: get method is used to fetch data from the server.
app.get("/",(req,res)=>{
    //you can use res.type("text/html") or the following to set the header of the webserver page
    res.set("Content-Type","text/html")
    //res.send will close the connection between server and client
    res.send("<h1>Hello, World!fjjfjj JJDJJDJJJ fdfdifij</h1>")
    //note: in node.js we could pass res.write with some message inside it followed by res.end(also containing a message) but in express
    //if you have written res.write(with some content inside it) and then you follow it with res.send(with some content inside it) then
    //it will throw "Cannot set headers after they are sent to the client" error because res.send will always try to set header if it 
    //has some content inside it
    //So if you want to write something in res.write then leave res.send empty or just use res.send(with content) without res.write()
})
//parameters of listen: port number, host name, callback function
//port number and callback function are same as node.js 's http module
//hostname is used to run the server on a specific host. If you want to run the server on your local machine then you can just leave it empty
//"0.0.0.0" was used to as an example to run the server on all networks so that other users from different setup can also access the same code via ip address of that system
app.listen(6969,"0.0.0.0",()=>{
    console.log("Server is running on port 6969")
})