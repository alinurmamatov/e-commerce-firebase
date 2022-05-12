import React, { useContext } from 'react';
import { FirestoreContext } from '../context/FirestoreContext';
import {Grid, Button} from '@mui/material';


function SeeProducts() {

  const {allProducts} = useContext(FirestoreContext);

  return (
    <>
      {
        allProducts.map((product) => (
          <>
            <Grid item sx={2}>{product.name}</Grid>
            <Grid item sx={2}>{product.price}</Grid>
            <Grid item sx={2}>{product.image}</Grid>
            <Grid item sx={2}><Button>Edit</Button></Grid>
            <Grid item sx={2}><Button>Delete</Button></Grid>
          </>
        ))
      }
    </>
  )
}

export default SeeProducts;