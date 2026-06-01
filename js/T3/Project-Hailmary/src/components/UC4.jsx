import {createContext} from 'react'
import UC5 from './UC5.jsx'
const N1=createContext()
const N2=createContext()
function UC4(){
    return(
        <>
        <N1.Provider value="5">
            <N2.Provider value="10">
                <UC5/>
            </N2.Provider>
        </N1.Provider>
        </>
    )
}
export default UC4
export {N1,N2}