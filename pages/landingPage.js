import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../Components/Banner';
import Product from '../Components/Product'
import Footer from '../Components/Footer';


const LandingPage = () => {
  return (
  <>
        <Navbar/>
        <Banner/>
        <Product/>
        <Footer/>
  </>
  );
};

export default LandingPage;
