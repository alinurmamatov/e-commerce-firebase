import React, { useContext } from 'react';
import Header from '../components/commons/Header';
import {Grid, Button} from '@mui/material';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import * as actions from '../context/actions';

function CartList() {
    const {cartProducts, dispatch} = useContext(CartContext);

    const handleDelete = (id) => {
        dispatch({type: actions.REMOVEPRODUCT, payload: id})
    }
    
  return (
    <>
        <Header/>
        <Grid container spacing={2}>
            <Grid item md={2}><h2>Image</h2></Grid>
            <Grid item md={2}><h2>Product Name</h2></Grid>
            <Grid item md={2}><h2>Quantity</h2></Grid>
            <Grid item md={2}><h2>Price</h2></Grid>
            <Grid item md={3}></Grid>
            {
                cartProducts.map((product) => (
                    <>
                        <Grid item md={2}><img src={product.image} alt={product.name} width="200px"/></Grid>
                        <Grid item md={2}>{product.name}</Grid>
                        <Grid item md={2}>{product.quantity}</Grid>
                        <Grid item md={2}>{product.price}</Grid>
                        <Grid item md={3}><Button onClick={() => handleDelete(product.id)}>X</Button></Grid>
                    </>
                  /*   <div key={product.id}>
                        <img src={product.image} alt={product.name} width="200px"/>
                        {product.quantity} {product.name} {product.price}
                        <Button>X</Button> 
                    </div> */
                    )
                )
            }
            <Grid item md={2}><h2>Num of Products</h2></Grid>
            <Grid item md={2}><h2>-------</h2></Grid>
            <Grid item md={2}><h2>Quantity</h2></Grid>
            <Grid item md={2}><h2>-------</h2></Grid>
            <Grid item md={3}><Link to="/make-order"><Button>Order</Button></Link></Grid>
        </Grid>
    </>
  )
}

export default CartList;