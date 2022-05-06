import React, { useContext } from 'react';
import { FirestoreContext } from '../../context/FirestoreContext';
import Product from './Product';
import {Grid} from '@mui/material';

function AllProducts() {
    const {allProducts} = useContext(FirestoreContext);

  return (
      <>
      <h1>All Products</h1>
        <Grid container spacing={2}>
          {
              allProducts.map((product) => (
                <Grid key={product.id} item xs={6} md={3}>
                  <Product data={product.data} id={product.id}/>
                </Grid>
              ))
          }
        </Grid>
      </>
  )
}

export default AllProducts;