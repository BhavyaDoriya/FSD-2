// Task 1
// Write a Node.js program using the events module to simulate a sequence of events: 

// When a "connection" event occurs, print "Connection successfully" and trigger a "data-received" event.

// When the "data-received" event occurs, print "Data received successfully".

// Finally, print "Thanks" at the end of execution.

var ee=require("events")
var e=new ee()
e.on("connection",()=>{
    console.log("Connection successfully")
    e.emit("data-received")
})
e.on("data-received",()=>{
    console.log("Data received successfully")
}
)
e.emit("connection")
// Task 2
// Write a NodeJs script to create two listeners for a common event. 
// Call their respective callbacks. Print no. of events associated with an emitter. 
// Remove one of the listener and  print no of remaining listeners. 

let l1=function listner1()
{
    console.log("listner 1 executed")
}
let l2=function listner2()
{
    console.log("listner 2 executed")
}
e.addListener("conn",l1)
e.once("conn",l2)
e.emit("conn")
console.log(e.listenerCount("conn"))
e.removeListener("conn",l1)
console.log(e.listenerCount("conn"))
// Task 3
// Write a node js script to write the text “This is data” to new.txt file. 
// After that append the text “that is data” to same ne .txt file. 
// After that read the file and print file concept on console. After finishing read operation,
//  print the line “Thanks for using my program” on console. All read/write operations are asynchronous. (using Event)
fs=require("fs")
e.on("create",()=>{
    fs.writeFile("../../util/new.txt","This is data",(err)=>{
        if(err) throw err;
        console.log("File created")
        e.emit("update")
    })
})
e.on("update",()=>{
    fs.appendFile("../../util/new.txt","that is data",(err)=>{
        if(err) throw err;
        console.log("Data appended")
        e.emit("read")
    })
})
e.on("read",()=>{
    fs.readFile("../../util/new.txt","utf8",(err,data)=>{
        if(err) throw err;
        console.log("File content:", data)
        console.log("Thanks for using my program")
        e.emit("finished")
    })
})
e.on("finished",()=>{
    console.log("All operations completed.")
})
e.emit("create")

// Task 4
// Write node js script to handle events as asked below.

// 1) Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 

// 2) Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square. 

e.addListener("circle",(r)=>{
    if(r>=0){
        console.log("Perimeter is ",2*3.14*r)
    }
    else{
        console.log("Radius must be positive")
    }
})
e.addListener("square",(s)=>{
    if(s>=0){
        console.log("Perimeter is ",4*s)
    }   
    else{
        console.log("Side must be positive")
    }
})
e.emit("circle",-5)
e.emit("square",10)

// Task 7
// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks
//  and displays the total marks on console as an output.The calculate event fires another event name percentage which takes 
// total marks as argument and percentage should get displayed in console.
e.on("calculate",(marks)=>{
    if(marks.length!=5 || marks.some(m=>m<0 || m>25)){
        console.log("Invalid marks. Please enter marks for 5 subjects, each between 0 and 25.");
    } else {
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        console.log("Total marks:", total);
        e.emit("percentage", total);
    }
});
e.on("percentage",(total)=>{
    const percentage = (total / 125) * 100;
    console.log("Percentage:", percentage + "%");
});
e.emit("calculate",[10,15,24,22,9]);
// events are asynchronus but task inside them are synchronus

// Task 9
// Write a node.js script using Event handling to perform following tasks in sequence:

// Create a folder named Test.

// Create file in it named abc.txt and enter data into it.

// Append data to that file abc.txt and print message “Data Appended Successfully”.

// Read the content of the file abc.txt and print the concsole (Ref*- content on http web server).

// Copy data from abc.txt to pqr.txt.

// Delete old file and Lastly print the message “All operations performed successfully” on console.

// Perform using Synchronous file system module.
e.on("createFolder",()=>{
    if(!fs.existsSync("../../util/Test")){
        fs.mkdirSync("../../util/Test")
        console.log("Folder created")
    }
    e.emit("createFile")
})
e.on("createFile",()=>{
    fs.writeFileSync("../../util/Test/abc.txt","This is abc file");
    console.log("File created")
    e.emit("appendData")
})
e.on("appendData",()=>{
    fs.appendFileSync("../../util/Test/abc.txt","THis is nuts")
    console.log("append done")
})
e.on("readData",()=>
{
    var data=fs.readFileSync("../../util/Test/abc.txt","utf-8")
    console.log(data)
    console.log("File read successfully")
    e.emit("copyData",data)

})
e.on("copyData",(data)=>
{
    fs.writeFileSync("../../util/Test/pqr.txt",data)
    console.log("Copied")
    e.emit("deleteFile")
})
e.on("deleteFile",()=>{ 
    fs.unlinkSync("../../util/Test/abc.txt")
    console.log("File deleted")
})
e.emit("createFolder")