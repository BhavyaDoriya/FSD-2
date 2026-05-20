import React from 'react'

export default function Event() {
    const hc=()=>{
        alert("Button clicked")
    }
  return (
    <div>
      <button onClick={hc}>Click me</button>
    </div>
  )
}
