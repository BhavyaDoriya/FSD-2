import React, { useState } from 'react'

export default function Form1() {
    const [fname,setfname]=useState("")
    const [lname,setlname]=useState("")
    const hc=(e)=>{
        setfname(e.target.value)
    }
    const hl=(e)=>{
        setlname(e.target.value)
    }
  return (
    <div>
      <input type="text" name="fname" value={fname} onChange={hc}/>
      <input type="text" name="lname" value={lname} onChange={hl}/>
      <h1> {fname}:{lname}</h1>
    </div>
  )
}
