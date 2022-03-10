import React from 'react';
import Link from 'next/link';
import Footer from '../Components/Footer';
import Head from 'next/head';
import  {useSelector} from 'react-redux'

const cart = () => {
  const cartItem = useSelector((state)=>state.cards.value);
  console.log(cartItem);
  return (
    <>
  <Head>
    <title>card</title>
  </Head>
    {cartItem && cartItem.map ((data, index)=>(
    <div className ="card" key={index} >    
        <div className ="card-body">
    <span className="card-number card-circle subtle">{data.id}</span>
        <span className ="card-author subtle" >{data.productPrice}</span>
      <h2 className="card-title">{data.productName}</h2>
   </div>   
</div>
))}
<Footer/>
</>
  )
}

export default cart