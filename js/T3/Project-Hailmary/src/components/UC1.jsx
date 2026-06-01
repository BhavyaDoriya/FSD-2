import React from 'react'
import {createContext} from 'react'
import UC2 from './UC2.jsx'
const Fname=createContext()
const Lname=createContext()
function UC1() {

  return (
    <div>
      <Fname.Provider value="Shubhra Jyoti">
      <Lname.Provider value="Brahma">
      <UC2/>
      </Lname.Provider>
      </Fname.Provider>
    </div>
  )
}
export default UC1
export {Fname,Lname}
