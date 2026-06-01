import React from 'react'
import {Style} from './UCTask2'
import {StudentName} from './Comp2'
import {useContext} from 'react'

export default function Comp3() {
  const style = useContext(Style)
  const studentName = useContext(StudentName)
  return (
    <div>
        <h1 style={style}>Hello {studentName}!</h1>
      
    </div>
  )
}
