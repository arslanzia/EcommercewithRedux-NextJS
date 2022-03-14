import React from 'react';
import Grid from "@mui/material/Grid"
import Card from "../Components/Card"
import Navbar from '../components/Navbar';
const Products = () => {
  return (
  <>
  <Navbar/>
        <div className="main-product">
            <div className="product-container">
            <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Card/>
                </Grid>
                {/* <Grid item xs={4}>
                <Card/>
                </Grid>
                <Grid item xs={4}>
                <Card/>
                </Grid>
                <Grid item xs={4}>
                <Card/>
                </Grid>
                <Grid item xs={4}>
                <Card/>
                </Grid>
                <Grid item xs={4}>
                <Card/>
                </Grid> */}
                </Grid>                   
            </div>
        </div>
  </>
  );
};

export default Products;
