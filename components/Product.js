import React from 'react';
import Grid from "@mui/material/Grid"
import Card from "../Components/Card"
const Product = () => {
  return (
  <>
        <div className="main-product">
            <div className="product-container">
            
            <Grid container spacing={1}  >
                <Grid item xs={2} >
                  <Card/>
                </Grid>
                {/* <Grid item xs={4} >
                <Card/>
                </Grid> */}
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
                </Grid> */}
                </Grid>  
      
            </div>
        </div>
  </>
  );
};

export default Product;
