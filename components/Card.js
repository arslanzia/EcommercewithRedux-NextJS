
import React,{useEffect, useState } from 'react';
import {useSelector, useDispatch} from "react-redux";
import { addCard } from '../features/cardSlice';

import Link from 'next/link'

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


  return (   
        <>    
        <section>
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
                               <span className ="card-tag subtle" onClick={()=>{dispatch(addCard({id,data}))}}>Order Now  </span>
                               {/* </Link> */}
             </div>
             
             ))}
        </section>
  </>

   );
};

export default Card;
