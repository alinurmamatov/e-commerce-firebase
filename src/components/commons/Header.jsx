import React from 'react';
import {Grid, Button, Box, Typography, CardMedia} from '@mui/material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Grid container spacing={2} style={{justifyContent: 'space-around'}}>
      <Grid item xs={12} md={4}>
        <Link to='/'>
          <CardMedia component="img" image='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ermenegildo_Zegna_Logo.svg/2560px-Ermenegildo_Zegna_Logo.svg.png' height=''/>
        </Link>
      </Grid>
      <Grid item xs={12} md={10} >
        <Box style={{display: 'flex', alignItems: 'center', textAlign: 'center', justifyContent: 'space-between', margin: '0'}}>
          <Link to='/' style={{textDecoration: 'none', color: 'black'}}>
            <Typography sx={{minWidth: 150}}>Home</Typography>
          </Link>
          <Link to='/dashboard' style={{textDecoration: 'none', color: 'black'}}>
            <Typography sx={{minWidth: 150}}>Dashboard</Typography>
          </Link>
          <Link to='/about' style={{textDecoration: 'none', color: 'black'}}>
            <Typography sx={{minWidth: 150}}>About Zegna</Typography>
          </Link>
          <Button color='secondary' variant='outlined'>Cart</Button>
        </Box>
      </Grid>
    </Grid>
  )
}

export default Header;