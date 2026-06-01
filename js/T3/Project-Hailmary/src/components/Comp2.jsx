import React from 'react'
import Comp3 from './Comp3.jsx'
import {createContext} from 'react'
const StudentName=createContext()
export default function Comp2() {
  return (
    <div>
      <StudentName.Provider value="maithil">
        <Comp3/>
      </StudentName.Provider>
    </div>
  )
}
export {StudentName}