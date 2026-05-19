//Why react?
//1. It is a library for building user interfaces.
//2. It is component based and reusable.
//3. It is declarative and efficient.
//react builds everything in components. for exmample if i need a same navbar on every page of the website then i have to just create navbar.jsx 
//and then i can import it in every page and use it. so it is reusable and also it is efficient because we are not writing same code again and again.

// installation
// 1. change to your cwd in terminal
// 2. type npm create vite@latest and enter
// 3. give whatever project name you want and for module name just press enter 
// 4. select react and then select javascript

//After installation you will get folders like public and src.
//in src folder you will get app.jsx, main.jsx, app.css, index.css. 
//flow of code: first it will read index.html then it will read main.jsx and then it will read app.jsx and then to the browser

//How to run code?
//1. open terminal and change to your cwd(your Project folder)
//2. type npm run dev and enter
//3. you will get a localhost link in terminal, click on it and you will see output in your vs code in a file named on your project name.

//import other app jsx file
import App2 from "./App2.jsx"
//to import css file(will apply automatically to all jsx files)
import './App.css'
//to import image file from assets folder(if you wanna import from other folder then give that specific path.)
import hero from "./assets/hero.png"
//outer comment is just like javascript comment and inner comment in return statement of below function is jsx comment.
function App() {
  //assigning variable
  var fuel="astrophage"
  var fruits=["apple","banana","grapes"]
  //variable types are necessary like const,var,let otherwise it will not give any output.
  var css={backgroundColor:"cyan"}
  
  return (
    //below is jsx code. till now everything was javascript. below everything between fragmented tags is jsx.
    <>
      {/* comment in jsx */}
      <h1>Welcome to the Jungle</h1>
      {/* using variable in jsx and css as well*/}
      {/* you have to write your css in twwo curly braces {{}}. and to use a variable you can write single curly braces {} */}
      <h2 style={{color:"green",fontStyle:"italic"}}>I only have one fuel-{fuel}</h2>
      {/* using array in jsx */}
      {/* Below is also part of task on the website. the task is simply to print entire array in list. */}
      <h3>Fruits I like:</h3>
      {/* instead of class jsx has className, instead of font-size it has fontSize. */}
      <ol className="a">
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ol>
      {/* it by default looks for image from public folder hence you don't need to specify path, you can directly pass file name. */}
      <img src="nilesh.jpeg" height={300}px width={300}px alt="nilesh" style={{display:"block",margin:"0 auto"}} />
      {/* using imported image from assets folder */}
      <img src={hero} alt="hero" />
      {/* Few cases: */}
      {/* Case-1 */}
      {/* in following case css variable overwrites {color:"Pink"} even if its properties are different. Hence only background color cyan 
      will be applied and text won't have pink colors */}
      <h1 style={{color:"pink"},css}>I am fattest boi</h1>
      {/*Another case, this will apply color:blue and no background color*/}
      <h1 style={{color:"blue",css}}>I am fattest boi2</h1>
      {/* calling App2.jsx component  */}
      <App2 />
    </>
  )
}
//exporting the component to use it in other files like main.jsx
export default App
