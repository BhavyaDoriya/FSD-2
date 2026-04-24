// Tasks for API
// Task (Restful API)-1: Write an expressJS code in which RESTapi is created for json object named data which contains name,id,branch,city and contact properties. 

// On “/api” page it should display all the content.

// Upon passing id on the browser url it should display the content having that id. (i.e. on localhost:7899/api/101) 

// Upon passing branch on the browser url it should display the content having that branch. (i.e. on localhost:7899/api/cse)

// data=[{name:"Samil",id:"1",branch:"cse",contact:"8888",city:"Ahmedabad"},
//     {name:"jyoti",id:"2",branch:"cse",contact:"888dd8",city:"Ahmedabad"},
//     {name:"faizan",id:"3",branch:"ce",contact:"888dds8",city:"Ahmedabawwd"},
//     {name:"Shlok",id:"4",branch:"ce",contact:"888gre8",city:"Ahmedabadwwsw"},
//         {name:"maithil",id:"5",branch:"ce",contact:"88rr88",city:"GujAhmedabad"}]
// var expr=require("express")
// router=expr.Router()
// router.get("/api",(req,res)=>{
//     res.json(data)
// })
// router.get("/api/:id",(req,res)=>{
//     content=data.filter((a)=>a.id===req.params.id)
//     if(content.length>0){
//         res.json(content[0])
//     }
// })
// router.get("/api/branch/:branch",(req,res)=>{
//     content=data.filter((a)=>a.branch.toLowerCase()===req.params.branch.toLowerCase())
//     if(content.length>0){
//         res.json(JSON.stringify(content))
//     }
//     else{
//         res.send("No data found")
//     }
// })
// module.exports=router


//Task-2
// Write an expressJS code in which RESTapi is created for json object named Places I love which contains name,country,state,city and 
// rating out of 10(no decimal points) is given.upon passing ratings on the browser it should display the places having that rating.i.e.
//  on localhost:30001/a/10 should display all the places having 10 ratings. 


const placesILove = [

  { name: 'Ahmedabd',country: 'India', state: 'Gujarat', city: 'Ahmedabad',  rating: 10  },

  {name: 'Mumbai', country: 'India',  state: 'Maharashtra', city: 'Mumbai', rating: 9  },

  { name: 'Nairobi', country: 'Kenya',  state: 'Nairobi County', city: 'Nairobi',  rating: 8  },

  { name: 'Melbourne', country: 'Australia',  state: 'Victoria', city: 'Melbourne',  rating: 10  }

];
var expr=require("express")
var router=expr.Router()
router.get("/a/:rating",(req,res)=>{
    content=placesILove.filter((a)=>a.rating==req.params.rating)
    if(content.length>1){
        res.json(JSON.stringify(content))
    }
    else{
        res.send("No data")
    }
})
module.exports=router