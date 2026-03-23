// syntax: http.createServer(serverlistnerfunction).listen()
// Syntax: serverlistner: (req,res)=>{}
const http=require("http")
// let server=http.createServer((req,res)=>{
//     res.writeHead(200,{'content-Type':'text/html'})

//     res.write("Hi")// try commenting and commenting --> you will understand the need of writeHead(it describes mimetype)
//     res.write("<h1>Yellow yelloww dirty Fellow<h1>")
//     res.end("How you doing feff")
// })
// server.listen(6969,()=>{
//     console.log("Server connected")
// })

//Fetch URL
let server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type':'text/html'})

    res.write(req.url+"<br>")
    res.end("URL fetched")
})
server.listen(6969,()=>{
    console.log("Server connected")
})