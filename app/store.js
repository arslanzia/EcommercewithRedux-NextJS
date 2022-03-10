import {configureStore} from '@reduxjs/toolkit';
import productReducers from '../features/productSlice';
import cardReducers from '../features/cardSlice';

export const store = configureStore({

    reducer:{
        products: productReducers, 
        cards: cardReducers,
    },
})

export default store;