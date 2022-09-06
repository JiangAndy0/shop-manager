import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Your Store Name',
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        changeShopName(state, action){
            state.name = action.payload
        }
    }
})

export default shopSlice.reducer
export const {changeShopName} = shopSlice.actions

export const selectShopName = state => state.shop.name





