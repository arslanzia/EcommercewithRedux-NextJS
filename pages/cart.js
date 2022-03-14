import React from 'react';
import Link from 'next/link';
import Footer from '../Components/Footer';
import Head from 'next/head';
import CartItems from '../components/CartItems';
import Navbar from "../components/Navbar"

const cart = () => {

  
  return (
    <>
  <Head>
    <title>card</title>
  </Head>
  <Navbar/>
  <CartItems/>
  <Footer/>
</>
  )
}

export default cart