var a={
    "name":"abc",
    "age":28,
    "address":{"city":"ahmedabad","state":"gujarat"},
    "ispass":false,
    "subjects":["english","hindi","gujarati"],
    "rank":null

}
console.log(a);
const obj=require("../../json/p.json");
console.log(obj);

var a={
    "YOU":[
        {
            "id":1,
            "name":"php",
            "version":"2nd",
            "author":["abc","pqr"]
        },
        {
            "id":2,
            "name":"Java",
            "version":"3rd",
            "author":"J.Shephered"
        }
    ]
}
 console.log(a.YOU[1])
 console.log(a.YOU[0].author[1])
 console.log(`We have ${a.YOU[1].name} but version is ${a.YOU[1].version} and author is ${a.YOU[1].author}`)

let p={"name":"Shubhra jyoti","age":30}
p.age=30
console.log(p.age)
