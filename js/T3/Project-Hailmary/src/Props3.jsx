//Task-1 for Props
// Create a React application using props to display student details.

// Requirements:

// 1. 	Create a parent component Prop1.js.

// 2. 	Pass the following data to child component Prop2.js using props:

// o	student name

// o	roll number

// o	marks

// 3. 	In child component:

// o	display student details

// o	increase marks by 1 and display updated marks
import React from 'react'

export default function Props3(props) {
  return (
    <div>
      <h1>Student details:</h1>
      <p>Name: {props.studentName}</p>
      <p>Roll Number: {props.rollNumber}</p>
      <p>Marks: {props.marks}</p>
      <p>Updated Marks: {parseInt(props.marks) + 1}</p>
    </div>
  )
}
