import React,{useEffect} from 'react'
import  {useSelector, useDispatch} from 'react-redux'
import { addCard,deleteCard,decreament, increament,totalDecreament, getTotal} from '../features/cardSlice';

const CartItems = () => {
    const cartItem = useSelector((state)=>state.cards.value);
    const quantity = useSelector ((state)=> state.cards.totalQuantity);
    const totalAmount = useSelector((state)=> state.cards.totalAmount);
    const card = useSelector((state)=> state.cards)

  
    console.log("total amount is:", totalAmount);
    console.log("products in cartItem",cartItem);
    const dispatch = useDispatch();
    //removing item 
    const handleRemoveCardItem =(data)=>{
        dispatch(deleteCard(data));
        dispatch(totalDecreament(data.cartQuantity));
    }

    //decreasing particular item
    
    return (
    <>
    
    <div id='cart-wrapper' >
    <h1>Shopping Cart</h1>
            <div id='cart'>
            {cartItem && cartItem.map ((data, index)=>(
                console.log("new cartItem Data",data),
                <div id="cart-products-wrapper" key={index}>
                    <table id="cart-table">
                      <thead id="cart-table-header">
                         <th className="name-col">{data.name}</th> 
                         {/* <th className="quantity-col" onClick={()=> handleDecreaseItem (data)}>-</th> */}
                         <th className='quantity'>{data.cartQuantity}</th>
                         {/* <th className="quantity-col" onClick={()=>dispatch(increament())}>+</th> */}
                         <th className="price-col">{data.price.formatted_with_symbol}</th>
                         <th className="updated-price-col">${data.price.formatted * data.cartQuantity}</th>
                         <th className="remove-col" onClick={()=> handleRemoveCardItem(data)}>Remove</th>
                        </thead>
                    <tbody id="cart-table-body"></tbody>
                    </table>
                </div>
                ))}
            </div>
            {/* <div id='amount-controls'>
                <div id="cart-amount-wrapper">
                    <table>
                        <tbody>
                            <tr id='subtotal-wrappper'>
                                <td id="subtotal-label">Total Amount</td>
                                <td id="subtotal">0.00</td>
                            </tr>
                        </tbody>
                     </table>
                </div>
             </div> */}
        </div>
    </>
  )
}

export default CartItems