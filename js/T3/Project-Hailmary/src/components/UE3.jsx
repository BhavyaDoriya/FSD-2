import React from 'react'
import {useState,useEffect} from 'react'
export default function UE3() {
    const [date,setDate]=useState(new Date())
    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        }, 1000)
    })
  return (
    <div>
      time={date.toLocaleTimeString()}<br></br>
      hr={date.getHours()}<br></br>
      min={date.getMinutes()}<br></br>
      sec={date.getSeconds()}
    </div>
  )
}
