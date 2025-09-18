import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
const store = configureStore({
    reducer: {
      cart: cartReducer, // "cart" is the slice name in state
    },
  });
export default store
