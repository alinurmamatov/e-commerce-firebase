import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import * as actions from '../../context/actions';

function Product({id, data}) {
    const [quantity, setQuantity] = useState(0);
    const {dispatch} = useContext(CartContext);
    
    const handleAddToCart = () => {
      dispatch({type: actions.ADDTOCART, payload: {...data, id: id, quantity: quantity}})
      setQuantity(0)
    }

  return (
    <div>
        <img src={data.image} width="200px"/>
        <p>{data.name}</p>
        <p>${data.price}</p>
        <button onClick={() => setQuantity(quantity - 1)}>-</button>
        <button onClick={() => handleAddToCart()}>add to cart</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  )
}

export default Product;