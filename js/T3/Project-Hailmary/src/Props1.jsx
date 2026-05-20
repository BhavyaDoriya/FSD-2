import React from 'react'

export default function Props1(props) {
  return (
    <div>
      <h1>{props.name}:{props.price} , {props.obj.name1}:{props.obj.attribute}</h1>
    </div>
  )
}
