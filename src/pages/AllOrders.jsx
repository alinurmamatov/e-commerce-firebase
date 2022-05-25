import React, { useContext, useEffect } from 'react';
import { FirestoreContext } from '../context/FirestoreContext';
import {Grid} from '@mui/material';

function AllOrders() {
  const {getAllOrders, allOrders} = useContext(FirestoreContext);
  
  useEffect(() => {
    getAllOrders()
  }, [])

  return (
    <>
      <div>AllOrders</div>
      <Grid container spacing={2}>
        <Grid item sx={2}>Order ID</Grid>
        <Grid item sx={2}>Name</Grid>
        <Grid item sx={2}>Address</Grid>
        <Grid item sx={2}>Description</Grid>
        <Grid item sx={2}>Status</Grid>
        <Grid item sx={2}>Delete</Grid>
        </Grid>
        <Grid container spacing={2}>
        {
          allOrders.map(({data, id}) => (
            <>
              <Grid item sx={2}>{id}</Grid>
              <Grid item sx={2}>{data.name}</Grid>
              <Grid item sx={2}>{data.address}</Grid>
              <Grid item sx={2}>Description</Grid>
              <Grid item sx={2}>Status</Grid>
              <Grid item sx={2}>Delete</Grid>
            </>
          ))
        }
      </Grid>
    </>
  )
}

export default AllOrders;