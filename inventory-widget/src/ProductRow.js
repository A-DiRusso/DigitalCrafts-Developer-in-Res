import React from 'react'

export default function ({ product : { inStock, name, price }}) {
  let productClass = '';
  let fontStyle = {};

  if(!inStock){
    productClass = "text-danger";
    fontStyle = {
      fontWeight: "bold"
    };
  }

  return (
      <tr>
        <td style={fontStyle} className={productClass}>{name}</td>
        <td>{price}</td>
      </tr>
  )
}
