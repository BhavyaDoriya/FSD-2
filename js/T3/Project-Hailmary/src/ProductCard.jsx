// Task-3 for Props
// Build a React app that displays a list of products using props.

// Create a ProductCard component to show product details like title, price, rating, and image.

// Use a ProductList component to store product data and display multiple ProductCard components using .map().


import React from 'react'

export default function ProductCard(props) {
  return (
    <div>
        <div>
            <h1>Product details:</h1>
            <img src={props.image} alt={props.title} height={200} width={200} />
            <p>Title:{props.title}</p>
            <p>Price:{props.price}</p>
            <p>Rating:{props.rating}</p>
        </div>
        
        
    </div>
  )
}
