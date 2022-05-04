import React, { useContext } from 'react';
import { FirestoreContext } from '../../context/FirestoreContext';
import Product from './Product';

function AllProducts() {
    const {allProducts} = useContext(FirestoreContext);

  return (
      <>
        <div>AllProducts</div>
        {
            allProducts.map((product) => (
                <Product data={product.data} id={product.id} key={product.id}/>
            ))
        }
      </>
  )
}

export default AllProducts;