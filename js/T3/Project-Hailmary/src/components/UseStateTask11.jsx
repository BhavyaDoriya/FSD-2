// Task-11

// Create react app which contains form with fields Name, Email Id, Password and Confirm Password. When the form submitted the values of 
// password and confirm password fields must be same else it will give an error message in alert box.  If form submitted successfully then
//  display entered name and email id in alert box.
import React, { useState } from 'react'

export default function UseStateTask10() {
    const [data,setdata]=useState({})
    const hc=(e)=>{
        e.preventDefault()
        if(data.cpwd===data.pwd){
           document.getElementById("nameh1").innerHTML=data.uname
           document.getElementById("emailh1").innerHTML=data.email
        }
        else{
            alert("ERROR:password does not match")
        }
    }
  return (
    <div>
      <form onSubmit={hc} >
        Username
        <input type="text" name="uname" onChange={(e)=>{setdata({...data,["uname"]:e.target.value})}}/>
        <br></br>
        Password:
        <input type="text" name="pwd" onChange={(e)=>{setdata({...data,["pwd"]:e.target.value})}}/>
        <br></br>
        Confirm Password
        <input type="text" name="cpwd" onChange={(e)=>{setdata({...data,["cpwd"]:e.target.value})}}/>
        <br></br>
        Email:
        <input type="email" name="email"  onChange={(e)=>{setdata({...data,["email"]:e.target.value})}} />
        <input type="submit"/>
      </form>
      <h1 id="nameh1"></h1>
      <h1 id="emailh1"></h1>
    </div>
  )
}
