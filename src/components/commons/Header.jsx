import React from 'react';
import {Grid, Button, Box, Typography, CardMedia} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Grid container spacing={2} style={{justifyContent: 'space-around'}} >
      <Grid item sx={12} md={2}>
        <Link to='/'>
          <CardMedia component="img" image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ermenegildo_Zegna_Logo.svg/2560px-Ermenegildo_Zegna_Logo.svg.png' height=''/>
        </Link>
      </Grid>
      <Grid item sx={12} md={10}>Menu</Grid>
    </Grid>
  )
}

export default Header;