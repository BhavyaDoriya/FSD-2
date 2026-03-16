var EventEmitter=require("events")
var ee=new EventEmitter()
// There are three ways
// ee.addListener("wedding",()=> {console.log("You may kiss the bride")})
// ee.on("wedding",()=> {console.log("You may kiss the bride")})
//ee.once(Event name,listner)(will only execute once)
ee.on(
"wedding",
()=> {console.log("You may kiss the bride")}
)
//ee.emit(event name......)
ee.emit("wedding")

//to remove event listners
// ee.removeListener(event,listner)
// ee.removeAllListeners([event])

// to get count of listeners
// ee.listenerCount(event)

//example
var event2=new EventEmitter()
var photo=function(){
    console.log("photo grapher present");
}
var caterer=function(){
    console.log("catering present");
}
var bridegroom=function(){  
    console.log("bride & groom present");
}
var decorator=function(){
    console.log("decorator present");
}
event2.on("mrgfunction",decorator)
event2.on("mrgfunction",caterer)
event2.on("mrgfunction",photo)
event2.on("mrgfunction",bridegroom)
console.log("YOOO DUDE CHECK THAT GIRL OUT!!")
event2.emit("mrgfunction")
console.log("Karyakram samapt!!")

// Triggering function with arguments
ee.on("trig",(a,b)=>{
    console.log(`The sum of ${a} and ${b} is ${a+b}`);
})
ee.emit("trig",5,10)


// Some example
console.log("Variation 1:")
let l1=function listner1()
{
    console.log("listner 1 executed")
}
let l2=function listner2()
{
    console.log("listner 2 executed")
}
ee.addListener("conn",l1)
ee.once("conn",l2)
ee.emit("conn")
console.log(ee.listenerCount("conn"))
ee.emit("conn")