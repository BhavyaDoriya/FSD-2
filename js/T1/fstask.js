// Write a NodeJS code to create a folder named tempReports and inside it, create a file called daily.txt containing the
//  initial text "Report Start". Then, it should add three entries to the file: "Entry 1: Success", "Entry 2: Warning",
//  and "Entry 3: Success". After writing, the program must read the file and count how many times the word "Success" appears. 
// If the word "Success" appears three or more times, the program should delete the tempReports folder. Ensure all file operations
//  are asynchronous.
fs=require("fs")
fs.mkdir("../../util/tempReports",(err)=>{
    if(err){
        throw err;
    }
    else{
        fs.writeFile("../../util/tempReports/daily.txt","Report Start",(err)=>{
            if(err) throw err
            fs.appendFile("../../util/tempReports/daily.txt","\n"+"Entry 1: Success"+"\n"+"Entry 2: Warning"+"\n"+"Entry 3: Success",(err)=>{
                if(err) throw err
                else{
                    data=fs.readFile("../../util/tempReports/daily.txt","utf-8",(err,data)=>{
                        if(err) throw err
                    var count=data.split("Success").length-1
                    if(count>=3){
                        fs.rm("../../util/tempReports/daily.txt",(err)=>{
                            if(err) throw err
                        fs.rmdir("../../util/tempReports",(err)=>{
                            if(err) throw err
                        })
                        })
                    }
                    })
                    
                }
            })
        })
    }
})