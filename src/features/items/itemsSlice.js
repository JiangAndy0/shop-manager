import { createSlice, nanoid } from "@reduxjs/toolkit";

const id1 = nanoid();
const id2 = nanoid();

const initialState = {
    [id1]: {
        title: "Men's black leather shoes everyday wear business casual",
        imgSource: "https://cdn.shopify.com/s/files/1/0472/7118/2499/products/62163450839_480x480.jpg?v=1638759200",
        price: 7.99
    },
    [id2]: {
        title: "Men's athletic sweatproof cotton socks 5 pairs",
        imgSource: "https://oldnavy.gap.com/webcontent/0015/244/786/cn15244786.jpg",
        price: 4.99
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