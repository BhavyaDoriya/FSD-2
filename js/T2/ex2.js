var expr=require("express")
var app=expr()
data={name:"XYZ",age:24}
app.get("/",(req,res)=>{
    // Case -1
    //following will set header to plain/text by default cause it sees string first
    // res.write(JSON.stringify(data))

    // Case-2 (error)--> as mentioned in ex1.js
    // res.write("some content")
    // res.send("some content")
    
    //Case-3 res.json()--> You can use res.json to pass a json object to the server
    //This method will automatically set header to application/json and will close the connection between server and client
    // res.json(data)

    //Case-4  Following will n ot set page header as integer but it will set page header as string
    // res.write(data.age+"")
    // res.send()
})
app.listen(5006)