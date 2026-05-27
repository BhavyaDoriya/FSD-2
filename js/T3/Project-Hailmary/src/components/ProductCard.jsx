import React from 'react'

export default function ProductCard(props) {
  return (
    <div>
      <div>
        <img src={props.productImage} height={200} width={270}></img>
        <h1>{props.productName}</h1>
        <p>{props.productDescription}</p>
        <h3>{props.productPrice}$</h3>

      </div>
    </div>
  )
}
