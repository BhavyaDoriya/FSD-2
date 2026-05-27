import React, { useState } from 'react'

export default function Form2() {
    const [data,setdata]=useState({})
    const hc=(e)=>{
        const {name,value}=e.target
        setdata({...data,[name]:value})
    }
  return (
    <div>
      <input type="text" name="fname" onChange={hc} />
      <input type="text" name="lname" onChange={hc} />
        <h1>First Name:{data.fname}</h1>
        <h1>Last Name:{data.lname}</h1>
    </div>
  )
}
