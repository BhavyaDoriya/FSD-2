// Create react app which contains form with following fields.

// • Email(Input type email)

// • Password(Input type password)

// • Confirm Password(Input type password)

//  [For Ref.: Add validation using regex to validate email id and password (Must contain at least 8 characters and must contain at least 1 uppercase, 1 lowercase and 1 digit).] Also values of password and confirm password must be same. Display email in alert box. (Using useState Hook)


// IGNORE PASSWORD FORMAT FOR NOW
import React, { useState } from 'react'

export default function UseStateTask10() {
    const [data,setdata]=useState({})
    const hc=()=>{
        if(data.cpwd===data.pwd){
            alert("Password matches")
        }
        else{
            alert("password does not match")
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
        <input type="submit"/>
      </form>
    </div>
  )
}
