const http=require("http")
//Task-1 
// display a json object on server
// let data={"name":"RAju","RUN":69}
// let server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"application/json"})
//     res.end(JSON.stringify(data))
// })
// server.listen(6969,()=>{
//     console.log("Server connected")
// })
//Task -2 
// Jump to different pages 
// let server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.write("<h1>Home page</h1>")
//         res.end()
//     }
//     else if(req.url==="/about"){
//         res.writeHead(200,{"Content-Type":"text/plain"})
//         res.write("<h1>About page</h1>")
//         res.end()
//     }
//     else{
//     res.writeHead(404,{"Content-Type":"text/html"})
//         res.end('Page  Not Found')    }
// })
// server.listen(6969,()=>{
//     console.log("Server connected")
// })

//Task-3
//Combining with image
// fs=require("fs")
// let server=http.createServer((req,res)=>{
//     if(req.url==="/"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.write("Home page <img src='../../util/nilesh.jpeg'>")
//         res.end()
//     }
//     else if(req.url==="/image"){
//         data=fs.readFileSync("../../util/nilesh.jpeg")
//         res.writeHead(200,{"Content-Type":"image/jpeg"})
        
//         res.end(data)
//     }
//     else{
//     res.writeHead(404,{"Content-Type":"text/html"})
//         res.end('Page  Not Found')    }
// })
// server.listen(6969,()=>{
//     console.log("Server connected")
// })

//Task-4
// Create http webpage and display message “Welcome to Priyen sir's class” in h1 tag after 10 seconds.
 
let server=http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type":"text/html"})  
    setTimeout(()=>{res.write("<h1>Welcome to Priyen sir's class</h1>")
         res.end()  
    },10000)
   
})
server.listen(6969,()=>{
    console.log("Server connected")
})
