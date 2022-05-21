import React, { useContext, useState } from 'react';
import { FirestoreContext } from '../context/FirestoreContext';
import {Grid, Button, Dialog, DialogContent, FormControl, Input, DialogTitle} from '@mui/material';


function SeeProducts() {
  const {allProducts, deleteProduct, editProduct} = useContext(FirestoreContext);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dataToChange, setDataToChange] = useState({});

  const handleDelete = (id, imgToDelete) => {
    imgToDelete = [...imgToDelete];
    const start = imgToDelete.indexOf("%");
    const end = imgToDelete.indexOf("?");
    imgToDelete = imgToDelete.slice(start + 3, end).join("");
    deleteProduct(id, imgToDelete);
  }

  const handleCloseDialog = () => {
    setDialogOpen(!dialogOpen);
  }

  const handleEditProduct = (data) => {
    setDialogOpen(true);
    setDataToChange(data);
  }

  const updateProduct = () => {
    editProduct(dataToChange);
  }

  return (
    <>
      <Grid container spacing={2}>
      {
        allProducts.map(({data, id}) => (
          <div>
            <Grid item sx={2}>{data.name}</Grid>
            <Grid item sx={2}>${data.price}</Grid>
            <Grid item sx={2}><img src={data?.image} width='100px'/></Grid>
            <Grid item sx={2}><Button onClick={() => handleEditProduct({...data, id: id})}>Edit</Button></Grid>
            <Grid item sx={2}><Button onClick={() => handleDelete(id, data?.image)}>Delete</Button></Grid>
          </div>
        ))
      }
      </Grid>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          <Input placeholder='product name' fullWidth value={dataToChange.name} onChange={(e) => setDataToChange({...dataToChange, name: e.target.value})}/>
          <Input placeholder='price' fullWidth value={dataToChange.price} onChange={(e) => setDataToChange({...dataToChange, price: e.target.value})}/>
          <Input type='file' onChange={(e) => setDataToChange({...dataToChange, newImage: e.target.files[0]})}/>
          <Button variant='outlined' color='secondary' onClick={handleCloseDialog}>Cancel</Button>
          <Button variant='contained' onClick={() => updateProduct()}>Save Changes</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default SeeProducts;