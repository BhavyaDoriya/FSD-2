import React from 'react'

export default function HomeWorkProduct(props) {
  return (
    <div>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"/>
        <div className="border border-3 border-warning p-3">
                <img src={props.productImage} height={200} width={240} alt={props.productName}/> 
                <h1 className='text-center text-white'>{props.productName}</h1>
                <p className="text-center text-white">{props.productDescription}</p>
                <p className="text-center fs-3 text-white">{props.productPrice} $</p>
                <button className="btn btn-warning btn-outline-dark d-block mx-auto mb-3">Buy Now</button>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" integrity="sha384-FKyoEForCGlyvwx9Hj09JcYn3nv7wiPVlz7YYwJrWVcXK/BmnVDxM+D2scQbITxI" crossorigin="anonymous"></script>
    </div>
  )
}
