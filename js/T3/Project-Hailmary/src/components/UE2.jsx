import {useState,useEffect} from 'react'
import React from 'react'

// syntax: useEffect(functionname,[dependecy on state])
// (,[state])
// (,[])-->first time
// ()-->continuous
export default function UE1() {
    const [stateA,setStateA]=useState(0)
    const [stateB,setStateB]=useState(0)
    const [stateC,setStateC]=useState(0)
    const SA=()=>{
        setStateA(stateA+1)
    }
    const SB=()=>{
        setStateB(stateB+1)
    }
    const SC=()=>{
        setStateC(stateC+1)
    }
    useEffect(()=>{
        alert('state changed')
    },[stateA,stateB])
  return (
    <div>
      <button onClick={SA}>State A: {stateA}</button><br />
      <button onClick={SB}>State B: {stateB}</button>
      <button onClick={SC}>State C: {stateC}</button>
    </div>
  )
}
