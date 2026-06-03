// Calculator using useReducer
import React from 'react'
import { useReducer } from 'react'  
export default function UseReducer2() {
    const[state,dispatch]=useReducer(reducer,{num1:"0",num2:"0",op:"add",result:"0"})
    function reducer(state, action) {
  const num1 = Number(state.num1);
  const num2 = Number(state.num2);

  switch (action.type) {
    case "SET_NUM1":
      return { ...state, num1: action.value };
    case "SET_NUM2":
      return { ...state, num2: action.value };
    case "ADD":
      return { ...state, result: num1 + num2 };
    case "SUB":
      return { ...state, result: num1 - num2 };
    case "MUL":
      return { ...state, result: num1 * num2 };
    case "DIV":
      return {
        ...state,
        result: num2 !== 0 ? num1 / num2 : "Cannot divide by zero",
      };
    default:
      return state;
  }
}

  return (
    <div>
        <form>
            <input type="text" name="n1" onChange={(e)=>{dispatch({"type":"SET_NUM1","value":e.target.value})}} required/>
        <br></br>
        <input type="text" name="n2" onChange={(e)=>{dispatch({"type":"SET_NUM2","value":e.target.value})}} required/>
        <br></br>
           <button onClick={() => dispatch({ type: "ADD" })}>Add</button>
            <button onClick={() => dispatch({ type: "SUB" })}>Subtract</button>
            <button onClick={() => dispatch({ type: "MUL" })}>Multiply</button>
            <button onClick={() => dispatch({ type: "DIV" })}>Divide</button>
            <h1>{state.result}</h1>

        </form>

    </div>
  )
}
