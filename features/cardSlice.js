import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: [],
};


export const cardSlice =createSlice ({
    name:"card",
    initialState,
    reducers:{
        addCard :(state, action) =>{
            const pseudoId = (new Date()).getTime();

            state.value.push ({
                id:pseudoId,
                productId: action.payload.data.id,
                productName: action.payload.data.name,
                productPrice:action.payload.data.price.formatted_with_symbol,
            });
            console.log("Card Slice Component", action.payload);

            // alert(action.payload);
        },
    },
});

// export const getCartItems = state => state.cart.value;
export const  {addCard} = cardSlice.actions;
export default cardSlice.reducer;
