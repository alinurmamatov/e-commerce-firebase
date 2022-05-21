import React, { useContext, useState } from 'react';
import Header from '../components/commons/Header';
import {Grid, List, ListItem, FormControl, Input, Button} from '@mui/material';
import { CartContext } from '../context/CartContext';

function MakeOrder() {
  const {cartProducts} = useContext(CartContext);
  const [customerData, setCustomerData] = useState({});

  const handleMakeOrder = () => {
    console.log(customerData, 'make order No ......');
  }

  return (
      <>
        <Header/>
        <Grid container spacing={2}>
          <Grid item sx={12} md={6}>
            <h2>Make an order for products you added:</h2>
            <List>
              {
                cartProducts.map((el) => (
                  <ListItem key={el.id}>{el.name} {el.quantity}</ListItem>
                ))
              }
            </List>
          </Grid>
          <Grid item sx={12} md={6}>
            <Grid container spacing={2}>
              <FormControl fullWidth>
                <Input placeholder='Fullname' onChange={(e) => setCustomerData({...customerData, name: e.target.value})}/>
              </FormControl>
              <FormControl fullWidth>
                <Input placeholder='Address' onChange={(e) => setCustomerData({...customerData, address: e.target.value})}/>
              </FormControl>
              <FormControl fullWidth>
                <Input placeholder='Phone number' type='number' onChange={(e) => setCustomerData({...customerData, phoneNumber: e.target.value})}/>
              </FormControl>
              <FormControl fullWidth>
                <Input placeholder='Email' type='email' onChange={(e) => setCustomerData({...customerData, email: e.target.value})}/>
                </FormControl>
                <FormControl fullWidth>
                <Input placeholder='Card Number' type='number' onChange={(e) => setCustomerData({...customerData, cardNumber: e.target.value})}/>
              </FormControl>
              <Button variant='outlined' onClick={handleMakeOrder}>Make Order</Button>
            </Grid>
          </Grid>
        </Grid>
      </>
  )
}

export default MakeOrder;