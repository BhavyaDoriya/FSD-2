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
//  This is called server side loading
// let server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})  
//     setTimeout(()=>{res.write("<h1>Welcome to Priyen sir's class</h1>")
//          res.end()  
//     },10000)
   
// })
// server.listen(6969,()=>{
//     console.log("Server connected")
// })

// Example of client side loading
// let server=http.createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.write(`<html>
//     <body>
//         <p id='demo'></p>
//         <script>
//             setTimeout(()=>{document.getElementById('demo').innerHTML='welcome student'},5000)
//         </script>
//     </body>
//     `) 
//     res.end("connected")
// })
// server.listen(5007)

// let server=http.createServer((req,res)=>{
//     if(req.url=="/"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.write(
//         `
//        <html>
//             <body>
//             <p>Welcome to Home</p>
//                 <a href="/about">About</a>
//                 <a href="/contact">Contact</a>
//             </body>
//         </html>
//         `
//     ) 
//     }
//     else if(req.url=="/about"){
//         res.writeHead(301,{'location':'https://www.google.com'})
//         res.write(
//         `
//        <html>
//             <body>
//             <p>Welcome to About</p>
//                 <a href="/">Home</a>
//                 <a href="/contact">Contact</a>
//             </body>
//         </html>
//         `
//     ) 
   

//     }
//     else if(req.url=="/contact"){
//         res.writeHead(200,{"Content-Type":"text/html"})
//          res.write(
//         `
//        <html>
//             <body>
//             <p>Welcome to Contact</p>
//                 <a href="/">Home</a>
//                 <a href="/contact">Contact</a>
//             </body>
//         </html>
//         `
//     ) 

//     }
//     res.end()
    
// })
// server.listen(5007)

// Another task :
// Read login.html file from html/T1/ and write its content on webserver when user is on that specific url. use url module
// let server=http.createServer((req,res)=>{
//     var url=require("url")
//     addr=url.parse(req.url)
//     path=addr.pathname.split("/").pop()
//     res.writeHeader(200,{"Content-Type":"text/html"})

//     if(path==="login"){
//         fs=require("fs")
//         var content=fs.readFileSync("../../html/T1/login.html","utf-8")
//         res.write(`${content}`)
        
//     }
//     else if(path==""){
//         res.write(
//             `
//        <html>
//             <body>
//             <p>Welcome to Home</p>
//                 <a href="/login">login</a>
//             </body>
//         </html>
//         `
//         )
//     }
//     res.end()
// })
// server.listen(5007)

// Task -8
// Write node js script to fetch values from url given below and display output as asked.
// "https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
//   1) Data must be written as below in file named “exam.txt”. File name must be fetched from the url given above.
//           	Output:
//           	Hello!
//           	Welcome to LJU FSD2 T1 Test
//           	#AllTheBest
//   2) Read content from file “exam.txt” and send response to server and display data in “/”  page in same format as above  

//        but in H1 tag and in red color.
//   3) If any other page is requested it shows “Page not found” message in plain text.
// fs=require("fs")
// const url=require("url")
// const addr="https://www.google.com/exam.txt?c1=Hello&c2=FSD2 T1 Test&c3=Welcome to LJU#AllTheBest"
// const q=url.parse(addr,true)
// console.log(q.pathname)
// const c1=q.query.c1
// const c2=q.query.c2
// const c3=q.query.c3
// const hash=q.hash
// const fname="."+q.pathname
// const fcon=c1+"!\n"+c3+" "+c2+"\n"+hash
// fs.writeFileSync("../../util/"+fname,fcon)
// let server=http.createServer((req,res)=>
// {
//     if(req.url=="/"){
//         var data=fs.readFileSync("../../util/"+fname,"utf-8")
//         res.writeHead(200,{"Content-Type":"text/html"})
//         res.end("<h1 style='color:red'><pre>"+data+"</pre></h1>")
    
//     }
//     else{
//         res.writeHead(404,{"Content-Type":"text/html"})
//         res.end("PAge not found")
//     }
// })
// server.listen(5007)

// Special task-3
// Write a NodeJS code to calculate and display the profit or loss incurred by an investor who purchased 100 shares of a company's 
// stock at Rs.50 per share and later sold them at Rs.60 per share. The script should utilize the HTTP module to create an
//  HTTP server that serves the profit or loss details. If there is a profit, the message should be displayed in green color,
//   and if there is a loss, it should be displayed in red color on server.
let server=http.createServer((req,res)=>{
    var numofshares=100
    var stockbuyingprice=50
    var stocksellingprice=60
    var totalbuyingcost=numofshares*stockbuyingprice
    var totalsellingincome=numofshares*stocksellingprice
    var profit=totalsellingincome-totalbuyingcost
    if(profit>0){
        res.writeHeader(200,{"Content-Type":"text/html"})

        res.write("<html><body><p style='color:green;font-size:40px'>You have profit</p></body>")
        res.end()
    }
    else{
        res.writeHeader(200,{"Content-Type":"text/html"})

        res.write("<html><body><p style='color:red;font-size:40px'>You have loss</p></body>")
        res.end()
    }
})
server.listen(5007)