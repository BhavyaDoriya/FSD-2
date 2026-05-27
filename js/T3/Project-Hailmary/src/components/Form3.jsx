import React, { useState } from 'react'

export default function Form2() {
    const [name,setname]=useState("")
    const [text,settext]=useState("")
    const [car,setCar]=useState("volvo")
    const hc=(e)=>{
        alert(`welcome ${name},review: ${text}, car: ${car}`)
    }
  return (
    <div>
    <form onSubmit={hc}>
        <input type="text" name="fname" onChange={(e)=>{setname(e.target.value)}} />
        <textarea name="review" onChange={(e)=>{settext(e.target.value)}}></textarea>
        <select name="car" onChange={(e)=>{setCar(e.target.value)}}>
            <option value="volvo">Volvo</option>
            <option value="Punch">Punch</option>
            <option value="Ford">Ford</option>
        </select>
        
        <input type="submit"/>
        <h1>User Name:{name}</h1>
    </form>
     

    </div>
  )
}
