// Task-3
// Build a React app that displays a list of products using props.

// Create a ProductCard component to show product details like title, price, rating, and image.

// Use a ProductList component to store product data and display multiple ProductCard components using .map().


import React from 'react'
import ProductCard from "./ProductCard.jsx"
export default function ProductList() {
    const products=[{title:"Washing machine",price:30000,image:"washing.jpg",rating:4.5},
                    {title:"Refrigerator",price:50000,image:"refridge.jpg",rating:4.7},
                    ]
  return (
    <div>
      {products.map((product, index) => (
        <ProductCard
          key={index} //necessary for react to use
          title={product.title}
          price={product.price}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  )
}
