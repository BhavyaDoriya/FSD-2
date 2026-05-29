import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import NoPage from './NoPage.jsx'
import Product from './Product.jsx'
import UseStateTask3 from './UseStateTask3.jsx'
import RandomImage  from './RandomImage.jsx'
import Form1 from './Form1.jsx'
import Form2 from './Form2.jsx'
import Form3 from './Form3.jsx'
import Todo from './Todo.jsx'
import UseStateTask10 from './UseStateTask10.jsx'
import UseStateTask11 from './UseStateTask11.jsx'
import UseStateTask13 from './UseStateTask13.jsx'
import UseReducer from './UseReducer.jsx'
export default function MainR() {

  return (
    <div>
      {/* <Router>
        <div className='main-route'>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="*" element={<NoPage/>}/>
        </Routes>
      </Router> */}



      {/* Task -1:
      Create a React app to perform the following tasks using functional components:

        Implement the following components in your React application:

        Main.js to set up the router and define the routes.

        Home.js for the Home page.

        Product.js for the Product page.

        Create a React Router:

        Include two routes: Home and Product. Implement navigation between these routes.

        Create the following routes and components:

        When a user clicks on the Home page link, it should navigate to the Home page and display "Welcome Students" within an <h1> heading with blue color. Also, include link to product page.

        A Product page that displays three products' information (name, price, and image) using props. When a user clicks on the Product page link, it should navigate to the Product page and display three products' information name, price and product image using props.
      */}

        {/* <Router>
            <div className='main-route'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Product">Product</Link></li>
                </ul>
            </div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/Product" element={<Product/>}/>
                <Route path="*" element={<NoPage/>}/>
            </Routes>
        </Router> */}
      
        {/* <UseStateTask3 /> */}
          {/* <RandomImage/> */}
          {/* <Form1/> */}
          {/* <Form2/>
          <Form3 /> */}


          {/* <Todo /> */}
          {/* <UseStateTask10 /> */}
          {/* <UseStateTask11/> */}
          {/* <UseStateTask13 /> */}
          <UseReducer />
    </div>


  )
}
