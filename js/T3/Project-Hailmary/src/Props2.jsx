//Task-1 For Props
// Create a React application using props to display student details.

// Requirements:

// 1. 	Create a parent component Prop2.js.

// 2. 	Pass the following data to child component Prop3.js using props:

// o	student name

// o	roll number

// o	marks

// 3. 	In child component:

// o	display student details

// o	increase marks by 1 and display updated marks
import React from 'react'
import Props3 from './Props3.jsx'
export default function Props2() {
  return (
    <div>
      <Props3 studentName="Jyoti" rollNumber="123" marks="85" />
    </div>
  )
}
