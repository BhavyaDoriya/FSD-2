// Write a program to build React app to perform the tasks as asked below.

// Add three buttons “Change Text”, “Change Color”, “Hide/Show”.

// Add heading “LJ University” in red color(initial) and also add “React Js Hooks” text in h2 tag.

// By clicking on “Change text” button text should be changed to “Welcome students” and vice versa.

// By clicking on “Change Color” button change color of text to “blue” and vice versa. This color change should be performed while double clicking on the button.

// Initially button text should be “Hide”. While clicking on it the button text should be changed to “Show” and text “React Js Hooks” will not be shown.

import React from 'react'
import {useState} from 'react'

export default function UseStateTask3() {
    const [btntext,ct]=useState('LJ University')
    const [col,cc]=useState("red")
    const [headertxt,hc]=useState("React Js Hooks")
    const [hidebuttontxt,hideshowbutton]=useState("Hide")
    const ctf=()=>{
        if(btntext==="Change text"){
            ct("Welcome students")
        }
        else{
            ct("Change text")
        }
    }
    const ccf=()=>{
        if(col==="red"){
            cc("blue")
        }
        else{
            cc("red")
        }
    }
    const hideshowbuttonf=()=>{
        if(hidebuttontxt==="Show"){
            hideshowbutton("Hide")
            hc("React Js Hooks")
        }
        else{
            hideshowbutton("Show")
            hc("")
        }
    }
  return (
    <div>
        <h1 style={{color:col}}>{btntext}</h1>
        <h2>{headertxt}</h2>
      <button onClick={ctf}>{btntext}</button>
      <button onDoubleClick={ccf}>Change color</button>
      <button onClick={hideshowbuttonf}>{hidebuttontxt}</button>
    </div>
  )
}
