import React from 'react'
import ProductCard from './ProductCard';
export default function Product() {
        const products = [
        { productName: "Laptop", productDescription: "This is a laptop", productPrice: 100000, productImage: "laptop.jpg" },
        { productName: "Mobile", productDescription: "This is a mobile", productPrice: 50000, productImage: "mobile.jpg" },
        { productName: "Tablet", productDescription: "This is a tablet", productPrice: 30000, productImage: "tablet.jpg" },
        { productName: "Headphones", productDescription: "These are headphones", productPrice: 20000, productImage: "headphone.jpg" },
        { productName: "Smartwatch", productDescription: "This is a smartwatch", productPrice: 15000, productImage: "smartwatch.jpg" }
    ];
  return (
    <div>
      {
        products.map((product) => ( // Changed { to ( for implicit return
          <ProductCard 
            key={product.productName} // Added missing key prop
            productName={product.productName} 
            productPrice={product.productPrice} 
            productDescription={product.productDescription} 
            productImage={product.productImage}
          />
        ))
      }
    </div>
  )
}
