//BAKI HAI
// Create react app which to perform following task using function component:

// Create one main file name UCTask3.js & other 2 component files F2.js & F3.js.

// Main file contains form with following fields:

// o First Name (Input type text)

// o Last Name (Input type text)

// o Message (Textarea)

// o City (Dropdown)

// o Gender (Radio Button)

// Pass values of all fields from UCTask3.js file to F3.js file. And display all submitted values in alert box using useContext & useState hook. No need to write App.js file.

import {useState} from 'react'
import React from 'react'
import {useContext} from 'react'
const AppContext=createContext()
const [data,setData]=useState({})
const [formData,setFormData]=useState({})
export default function UCTask3() {
    function handleChange(e){
        setformData({...formData,[e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault()
        setData(formData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='First Name' value={formData.firstName} onChange={handleChange}/><br />
        <input type="text" placeholder='Last Name' value={formData.lastName} onChange={handleChange}/><br />
        <textarea placeholder='Message' value={formData.message} onChange={handleChange}></textarea><br />
        <select value={formData.city} onChange={handleChange}>
          <option value="">Select City</option>
          <option value="City1">City 1</option>
          <option value="City2">City 2</option>
          <option value="City3">City 3</option>
        </select><br />
        <label>
          <input type="radio" name="gender" value="Male" onChange={handleChange}/> Male
        </label>
        <label>
          <input type="radio" name="gender" value="Female"/> Female
        </label>
      </form>
    </div>
  )
}
