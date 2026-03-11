const sub={
            "FSD":[
                {
                    "Topic":"Node",
                    "Course":"Beginner",
                    "Content":["JSON","REPL","Module"]
                },
                {
                    "Topic":"Express",
                    "Course":"Beginner",
                    "Content":["Routing","Validation","Mails"]
                }

            ]
        }
for(x in sub){
    for(y of sub[x])
    {
        for (z in y){
            console.log(y[z]);
        }
    }
}
var a=[{"name":"samil","age":25},{"name":"shubhra","age":30},{"name":"jyoti","age":28}]
.
a.sort((a,b)=>b.age-a.age);
console.log(a)