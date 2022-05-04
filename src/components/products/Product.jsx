import React, { useState } from 'react';

function Product({id, data}) {
    const [quantity, setQuantity] = useState(0);

  return (
    <div>
        <img src={data.image} width="200px"/>
        <p>{data.name}</p>
        <p>${data.price}</p>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button>add to cart</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  )
}

export default Product;