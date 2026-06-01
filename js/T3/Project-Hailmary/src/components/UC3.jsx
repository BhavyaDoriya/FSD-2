import React from 'react'
import {useContext} from 'react'
import {Fname,Lname} from './UC1.jsx'
export default function UC3() {
    const first=useContext(Fname)
    const last=useContext(Lname)
  return (
    <div>
      <h1>The Name Given by king is : {first} {last}</h1>
    </div>
  )
}
