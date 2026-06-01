// Use multiple contexts in a React application by creating and consuming them across different components.

// UCTask2.js: Creates a context for CSS styling and provides it to Comp2.

// comp2.jsx: Creates a context for a string value ("Students") and provides it to Comp3.

// comp3.jsx: Consumes both contexts and displays a message with the provided styles and string.

import {createContext} from 'react'
import Comp2 from './Comp2.jsx'
const Style=createContext()
function UCTask2(){
    return(
        <>
        <Style.Provider value={{backgroundColor:"blue",fontSize:"20px"}}>
            <Comp2/>
        </Style.Provider>
        </>
    )
}
export default UCTask2
export {Style}