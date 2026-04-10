//  Write an express js script to define one JSON array of 3 objects having properties name and age.
//  Short these objects according to age. If user request sorted names in url then all names along with
//  age should be printed according to descending order of age. Also, display these sorted values on “Sort page”
//  and display JSON object on “Home page”.

var arr=[{name:"XYZ",age:24},
{name:"ABC",age:22},
{name:"PQR",age:26}]
var sorted_arr=arr.sort((a,b)=>b.age-a.age)
var expr=require("express")
var app=expr()
app.get("/",(req,res)=>{
    res.json(arr)
})
app.get("/sort",(req,res)=>{
    res.json(sorted_arr)
})
app.listen(5006)