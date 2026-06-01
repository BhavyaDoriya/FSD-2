import React from 'react'
import {N1,N2} from './UC4'
import {useContext} from 'react'
export default function UC7() {
  const value1 = parseInt(useContext(N1))
  const value2 = parseInt(useContext(N2))
  return (
    <div>
        <h1>Answer is {value1 * value2}</h1>
    </div>
  )
}
