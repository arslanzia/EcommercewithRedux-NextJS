import React, { useEffect, useState } from 'react'
import {  useDispatch,useSelector } from 'react-redux';
import { addProduct } from '../features/productSlice';
import { commerce } from '../lib/commerce'

const ComerceData = () => {
    const [commerceData, setCommerceData] =useState([]);
    
    const dispatch =useDispatch();   
  
    const fetchProducts = async()=>{
        const data =await commerce.products.list();
        setCommerceData(data);
        if(!data) return;
        dispatch(addProduct(data));
        console.log("Data Sending CommerceData Component")
        
    }
    
    useEffect(()=>{
         fetchProducts();
        
    },[])


    // const handleAddProducts =()=>{
    //     if(!commerceData) return;
    // }
 

    return (
    <>
            {/* {console.log('')} */}
    </>
  )
}

export default ComerceData