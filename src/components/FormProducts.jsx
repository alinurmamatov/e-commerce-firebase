import React, { useState } from 'react';
import { useContext } from 'react';
import { FirestoreContext } from '../context/FirestoreContext';


function FormProducts() {
    const {addProduct} = useContext(FirestoreContext);

    const [newProduct, setNewProduct] = useState({name: "", price: ""});
    const [newImage, setNewImage] = useState("");

  return (
    <>
        <input onChange={(e) => setNewProduct({...newProduct, name: e.target.value})} placeholder="name"/>
        <input onChange={(e) => setNewProduct({...newProduct, price: e.target.value})} placeholder="price"/>
        <input onChange={(e) => setNewImage(e.target.files[0])} type="file"/>
        <button onClick={() => addProduct(newProduct, newImage)}>Add product</button>
    </>
  )
}

export default FormProducts;