import React, { useContext } from 'react';
import Header from '../components/commons/Header';
import { Grid, ListItemButton, List, Divider } from '@mui/material';
import FormProducts from '../components/FormProducts';
import { AuthContext } from '../context/AuthContext';
import { Navigate, Outlet, Link } from 'react-router-dom';

function Dashboard() {
  const {userMain} = useContext(AuthContext);

  return (
    <>
      {
        userMain ? (
          <>
          <Header/>
          <Grid container spacing={2}>
            <Grid item sx={2} md={3}>
              <List>
                <ListItemButton>
                  <Link to='see-products'>See All Products</Link>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                  <Link to='all-orders'>Orders</Link>
                </ListItemButton>
                <Divider/>
                <ListItemButton>
                  <Link to='add-product'>Add Product</Link>
                </ListItemButton>
                <Divider/>
              </List>
            </Grid>
            <Grid item sx={2} md={5}><Outlet/></Grid>
          </Grid>
          </>
        ) : (<Navigate to="/login"/>)
      }
    </>
  )
}

export default Dashboard;