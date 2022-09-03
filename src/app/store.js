import { configureStore } from '@reduxjs/toolkit';
import shopReducer from '../features/shop/shopSlice.js';
import itemsReducer from '../features/items/itemsSlice.js';
import categoriesReducer from '../features/categories/categoriesSlice.js';


export const store = configureStore({
  reducer: {
    shop: shopReducer,
    items: itemsReducer,
    categories: categoriesReducer
  },
});
