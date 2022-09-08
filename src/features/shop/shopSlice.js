import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Your Store Name',
    searchQuery: ''
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        changeShopName(state, action){
            state.name = action.payload
        },
        setSearchQuery(state, action){
            state.searchQuery = action.payload
        }
    }
})

export default shopSlice.reducer
export const {changeShopName, setSearchQuery} = shopSlice.actions

export const selectShopName = state => state.shop.name





