import {configureStore} from '@reduxjs/toolkit';
import productReducers from '../features/productSlice';
import cardReducers from '../features/cardSlice';
import counterReducers from '../features/counterSlice';

export const store = configureStore({

    reducer:{
        products: productReducers, 
        cards: cardReducers,
        counter : counterReducers,
    },
})

export default store;