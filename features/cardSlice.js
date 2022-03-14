import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [],
  totalQuantity: 0,
  totalAmount:0,
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
   totalDecreament :(state, action) => {
        state.totalQuantity -= action.payload;
   },
   getTotal: (state, action) =>{
     
   },
    addCard: (state, action) => {
    //   const pseudoId = new Date().getTime();
    //   id: pseudoId;
      const itemIndex = state.value.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.value[itemIndex].cartQuantity += 1;
        state.totalQuantity +=1;
      } else {
        // const data = {
        //     // id: pseudoId,
        //     productId: action.payload.id,
        //     productName: action.payload.name,
        //     productPrice: action.payload.price.formatted_with_symbol,
        //   };
        const temp = { ...action.payload, cartQuantity: 1 };
        state.totalQuantity +=1;
        state.value.push(temp);
        // productImage:action.payload.image.url,
        //   });
      }
      console.log("Card Slice Component", action.payload);

      // alert(action.payload);
    },

    //deleting an item
    deleteCard: (state, action) => {
      const nextCardItems = state.value.filter(
        (value) => value.name !== action.payload.name
      );
      console.log("next card Items are", nextCardItems);
      state.value = nextCardItems;
    },

    // increament: (state, action) => {
    
    //   state.value.cartQuantity += 1;
    // },
    // decreament :(state, action )=>{
    //   const itemIndex = state.value.findIndex(
    //     (item) => item.id === action.payload.id
    //   )
    //   if(state.value[itemIndex].cardQuantity > 1){
    //     state.value[itemIndex].cardQuantity -= 1;
        
    //   }else if(state.value[itemIndex].cardQuantity === 1){
    //     const nextCardItems = state.value.filter(
    //       (value) => value.id !== action.payload.id
    //     );
    //     state.value = nextCardItems;
    //   }
    // },

  },
});

// export const getCartItems = state => state.cart.value;
export const { addCard, deleteCard, increament, decreament, totalDecreament, getTotal} = cardSlice.actions;
export default cardSlice.reducer;
