
import React, { useState } from 'react';
import HomeWorkProduct from './HomeWorkProduct';

export default function HomeWorkProductList() {
    const products = [
        { productName: "Laptop", productDescription: "This is a laptop", productPrice: 100000, productImage: "laptop.jpg" },
        { productName: "Mobile", productDescription: "This is a mobile", productPrice: 50000, productImage: "mobile.jpg" },
        { productName: "Tablet", productDescription: "This is a tablet", productPrice: 30000, productImage: "tablet.jpg" },
        { productName: "Headphones", productDescription: "These are headphones", productPrice: 20000, productImage: "headphone.jpg" },
        { productName: "Smartwatch", productDescription: "This is a smartwatch", productPrice: 15000, productImage: "smartwatch.jpg" }
    ];

    const [filteredProducts, setFilteredProducts] = useState(products);

    const clearFilter = () => setFilteredProducts(products);
    
    const filterByType = (type) => {
        const filtered = products.filter(p => 
            p.productName.toLowerCase() === type.toLowerCase()
        );
        setFilteredProducts(filtered);
    };

    return (
        <div className="container mt-4">
            <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
                <button className="btn btn-warning" onClick={clearFilter}>Clear Filter</button>
                <button className="btn btn-danger" onClick={() => filterByType("laptop")}>Laptop</button>
                <button className="btn btn-danger" onClick={() => filterByType("mobile")}>Mobile</button>
                <button className="btn btn-danger" onClick={() => filterByType("tablet")}>Tablet</button>
                <button className="btn btn-danger" onClick={() => filterByType("headphones")}>Headphones</button>
                <button className="btn btn-danger" onClick={() => filterByType("smartwatch")}>Smartwatch</button>
            </div>

            <div className="d-flex flex-wrap justify-content-center gap-4 border border-2 p-4">
                {filteredProducts.map((product, index) => (
                    <HomeWorkProduct 
                        key={index} 
                        productName={product.productName} 
                        productDescription={product.productDescription} 
                        productPrice={product.productPrice} 
                        productImage={product.productImage}
                        
                    />
                ))}
            </div>
        </div>
    );
}