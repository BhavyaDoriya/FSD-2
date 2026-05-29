import React, { useState } from 'react'

export default function Todo() {
    const [task,settask]=useState('')
    const [todolist,settodolist]=useState([])
    const [id,setId]=useState(1)
    const hs=()=>{
        settodolist([...todolist,{name:task,id:id}])
        setId(id+1)
        settask("")
    }
    const deletetask=(id)=>{
        settodolist(todolist.filter((task)=>task.id!=id))
        if(length(todolist)===0){
            setId(1)
        }
    }
  return (
    <div>
        <>
            <input value={task} onChange={(e)=>settask(e.target.value)} />
            <button onClick={hs}>Add</button>
            {todolist.map((task)=>(
                <div>
                    <h3>{task.name}</h3>
                    <button onClick={()=>{deletetask(task.id)}}>Delete</button>
                </div>
            ))}
        </>
    </div>
  )
}
