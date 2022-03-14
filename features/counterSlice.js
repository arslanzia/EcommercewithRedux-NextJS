import {createSlice} from "@reduxjs/toolkit"

const initialState ={
    value:0,
    quantity:[],
}

export const counterSlice =createSlice ({
    name:"counter",
    initialState,
    reducers:{
        increament: (state)=>{
            state.value +=1;
        },
        decreament:(state)=>{
            state.value -= 1;
        },
        // quantityincreament:()=>{
        //     state.push(
        //         state.quantity += 1
        //         )
        // },
        // quantitydecreament:()=>{
        //     state.quantity -= 1
        // },
        // increamentByValue:(state, action)=>{
        //     state.value += action.payload;
        // }
        quantity: (state)=>{
            state.quantity = state.value;
        },
    },
});

export const { increament, decreament,quantity} = counterSlice.actions;
export default counterSlice.reducer;