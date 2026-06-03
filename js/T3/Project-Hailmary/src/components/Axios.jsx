import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Axios() {
    const [joke,setJoke]=useState("")
    function fJoke(){
        axios.get(" https://official-joke-api.appspot.com/random_joke").then((res)=>{setJoke(res.data)}).catch((err)=>{console.log(err)})
    }
    // Erase useState every 8 seconds
    useEffect(fJoke,[])
    useEffect(()=>{
        setInterval(()=>{setJoke("")},8000)
    })
  return (
    <div>
      <h1>{joke.setup}</h1>
      <p>{joke.punchline}</p>
      <button onClick={fJoke}>Get Joke</button>
    </div>
  )
}
