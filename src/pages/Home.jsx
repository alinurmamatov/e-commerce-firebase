import React from 'react';
import Header from '../components/commons/Header';
import AllProducts from '../components/products/AllProducts';
import Hero from '../components/commons/Hero';

function Home() {
  return (
    <>
      <Header/>
      <Hero />
      <AllProducts/>
    </>
  )
}

export default Home;