// Build a React component called Calculator that performs basic arithmetic operations using a single state object.

// •	Two number inputs (num1, num2) and a dropdown to select operation (add, sub, mul, div)

// •	All fields are required

// •	Use useState with one object for all inputs

// •	On form submit:

// o	Validate all fields

// o	Prevent divide by zero
// import React, { useState } from 'react'

// export default function UseStateTask13() {
//     const [data,setdata]=useState({op:"add"})
//     const hc=(e)=>{
//         e.preventDefault()
//         var n1=parseInt(data.n1)
//         var n2=parseInt(data.n2)
//         var op=data.op
//         var out=0
//         if(n1 && n2){
//             if(op==="div" && n2==="0"){
//                 alert("Cannot divide by zero")
//             }
//             else{
//                 switch(op){
//                     case "add":
//                         out=n1+n2;
//                         break
//                     case "mul":
//                         out=n1*n2
//                         break
//                     case "div":
//                         out=n1/n2 
//                         break
//                     case "sub":
//                         out=n1-n2 
//                         break

//                     }
//                 document.getElementById("ans").innerHTML="<h1>Ans:"+out+"</h1>"
//             }
//         }
//         else{
//             alert("Something wrong")
//         }
//     }
//   return (
//     <div>
//       <form onSubmit={hc} >
//         Number 1:
//         <input type="text" name="n1" onChange={(e)=>{setdata({...data,["n1"]:e.target.value})}} required/>
//         <br></br>
//         Number 2:
//         <input type="text" name="n2" onChange={(e)=>{setdata({...data,["n2"]:e.target.value})}} required/>
//         <br></br>
//         <select name="op" required onChange={(e)=>{setdata({...data,["op"]:e.target.value})}}>
//             <option value="add">Add</option>
//             <option value="mul">Mul</option>
//             <option value="sub">Sub</option>
//             <option value="div">Div</option>
//         </select>
//         <input type='submit'/>
//       </form>
//       <h1 id="ans"></h1>
//     </div>
//   )
// }


// Using useReducer
import React, { useReducer } from 'react'

export default function UseStateTask13() {
    const reducer=(state,action)=>{
        
    }
    const [state,dispatch]=useReducer(reducer,{n1:"0",n2:"0",op:"add"})

    const hc=(e)=>{
        e.preventDefault()
        var n1=parseInt(data.n1)
        var n2=parseInt(data.n2)
        var op=data.op
        var out=0
        if(n1 && n2){
            if(op==="div" && n2==="0"){
                alert("Cannot divide by zero")
            }
            else{
                switch(op){
                    case "add":
                        out=n1+n2;
                        break
                    case "mul":
                        out=n1*n2
                        break
                    case "div":
                        out=n1/n2 
                        break
                    case "sub":
                        out=n1-n2 
                        break

                    }
                document.getElementById("ans").innerHTML="<h1>Ans:"+out+"</h1>"
            }
        }
        else{
            alert("Something wrong")
        }
    }
  return (
    <div>
      <form onSubmit={hc} >
        Number 1:
        <input type="text" name="n1" onChange={(e)=>{setdata({...data,["n1"]:e.target.value})}} required/>
        <br></br>
        Number 2:
        <input type="text" name="n2" onChange={(e)=>{setdata({...data,["n2"]:e.target.value})}} required/>
        <br></br>
        <select name="op" required onChange={(e)=>{setdata({...data,["op"]:e.target.value})}}>
            <option value="add">Add</option>
            <option value="mul">Mul</option>
            <option value="sub">Sub</option>
            <option value="div">Div</option>
        </select>
        <input type='submit'/>
      </form>
      <h1 id="ans"></h1>
    </div>
  )
}
