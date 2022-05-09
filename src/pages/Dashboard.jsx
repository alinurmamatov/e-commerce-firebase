import React, { useContext } from 'react';
import Header from '../components/commons/Header';
import {Grid} from '@mui/material';
import FormProducts from '../components/FormProducts';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

function Dashboard() {
  const {userMain} = useContext(AuthContext);

  return (
    <>
      {
        userMain ? (
          <>
          <Header/>
          <Grid container spacing={2}>
            <Grid item sx={2} md={4}>Lateral Menu</Grid>
            <Grid item sx={2} md={4}><FormProducts/></Grid>
          </Grid>
          </>
        ) : (<Navigate to="/login"/>)
      }
    </>
  )
}

export default Dashboard;