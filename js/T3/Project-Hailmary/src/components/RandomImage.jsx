import React, { useState } from 'react'

export default function RandomImage() {
    const arr=["nilesh.jpeg","laptop.jpg","mobile.jpg"]
    const [pic,setpic]=useState(arr[0])
    const changePic=()=>{
        var index=Math.floor(Math.random()*arr.length)
        setpic(arr[index])
    }
  return (
    <div>
        <img src={pic} height={200} width={200}/>
        <button onClick={changePic}>Change Picture</button>
    </div>
  )
}
