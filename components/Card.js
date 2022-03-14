
import React,{useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { addCard } from '../features/cardSlice';

import Link from 'next/link'
import { increament } from '../features/counterSlice';

const Card = () => {
  
   const product = useSelector((state)=>state.products.value[0]);
  
  const id=0;
  const dispatch =useDispatch();
  // const handleAddCart =(cartData)=>{
  //       setCartItem(cartData)
  //       if(!cartItem) return 
  //       console.log("product Name is ",cartItem);
  //   dispatch(addCart(cartItem))
  
  // }

  const handleAddItem =(data)=>{
      dispatch(addCard(data));
      dispatch(increament());
  }

  console.log(product);

  return (   
        <>    
        <section className='card-container' >

              {product && product.data.map ((data,index)=>(
                
               <div className ="card" key={index} >
               
               {id=id+1}
                  <div className ="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                      <span className ="card-author subtle" >{data.price.formatted_with_symbol}</span>
                        <h2 className="card-title">{data.name}</h2>
                          <span className ="card-description subtle ">
                            {data.description}
                           </span>
                       </div>
                               <img src= {data.image.url}  alt ="imagess" className ="card-media " />
                               {/* <Link href={'cart'}> */}
                               <span className ="card-tag subtle" onClick={()=> handleAddItem(data)}>Order Now  </span>
                               {/* </Link> */}
          
             </div>
            
             ))}
                  
          {/* <div className='new-card'>
          <div className='new-card-image'>
            
          </div>
              <h2>Title</h2>
              <p>description</p>
              <button>Add to Cart</button>
              
          </div>
          
          <div className='new-card'>
          <div className='new-card-image'></div>
              <h2>Title</h2>
              <p>description</p>
              
          </div>
          <div className='new-card'>
          <div className='new-card-image'></div>
              <h2>Title</h2>
              <p>description</p>
              
          </div> */}
        </section>
  </>

   );
};

export default Card;
