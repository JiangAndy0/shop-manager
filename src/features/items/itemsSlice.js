import { createSlice, nanoid } from "@reduxjs/toolkit";

import shoes from '../../resources/shoes.jpg'
import socks from '../../resources/socks.jpg'
import top from '../../resources/top.jpeg'


const initialState = {
    "1001": {
        title: "Men's brown leather shoes everyday wear business casual",
        imgSource: shoes,
        price: 25.99,
        categoryId: "101"
    },
    "1002": {
        title: "Men's black gray athletic sweatproof cotton socks six pairs",
        imgSource: socks,
        price: 14.99,
        categoryId: "101"
    },
    "1003": {
        title: "Women's navy blue breathable workout top relaxed fit",
        imgSource: top,
        price: 17.99,
        categoryId: "102"
    }
}
const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {

    }
})

export default itemsSlice.reducer

export const selectAllItems = state => state.items;
export const selectItemById = (state, itemId) => state.items[itemId];