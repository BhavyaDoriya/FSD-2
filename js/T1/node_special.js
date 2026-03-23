// Write a Node.js program using the fs synchronous methods to perform the following tasks:

const { read } = require("fs")

// Create a file score.txt and store player data in JSON format with the following players:


// Rohit = 52

// Kohli = 96

// Gill = 20

// Rahul = 33

// Tilak = 30


// Read the score.txt file and parse the JSON data.

// Add a new player {name: "Hardik", runs: 52} to the existing list.

// Calculate the total runs scored by all players.

// Calculate the run rate for T20 match (20 overs).

// Find players who scored more than 50 runs.

// Write the updated player list, total runs, run rate, and players above 50 runs back to the same file.

// Append the top performers (players above 50 runs) at the end of the file.

fs=require("fs")
var arrObj=[{"name":"Rohit","runs":52},{"name":"Kohli","runs":96},{"name":"Gill","runs":20},{"name":"Rahul","runs":33},{"name":"Tilak","runs":30}]
fs.writeFileSync("../../util/scores.txt",JSON.stringify(arrObj))
var readtext=fs.readFileSync("../../util/scores.txt","utf-8")
console.log(readtext)
var parsedData=JSON.parse(readtext)
parsedData.push({"name":"Hardik","runs":52})
fs.writeFileSync("../../util/scores.txt",JSON.stringify(parsedData))
var totalruns=0
for (i of parsedData){
    totalruns+=i["runs"]
}
console.log("Total runs: "+totalruns)
let runRate=totalruns/20
console.log("Runrate "+runRate)
arrMorethan50=[]
for(i of parsedData){
    if(i["runs"]>50){
        arrMorethan50.push(i)

    }
}
console.log(arrMorethan50)
runrateObj={}
runrateObj["run_rate"]=runRate
totalrunsObj={}
totalrunsObj["totalRuns"]=totalruns
parsedData.push(runrateObj)
parsedData.push(totalrunsObj)

moreThan50Obj={}
moreThan50Obj["moreThan50"]=arrMorethan50
parsedData.push(moreThan50Obj)
console.log(parsedData)

fs.writeFileSync("../../util/scores.txt",JSON.stringify(parsedData))
