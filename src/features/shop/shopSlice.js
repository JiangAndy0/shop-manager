import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Your Store Name',
    query: '',
    activeItemId: '',
    activeCategoryId: '',
    isEditingShop: false,
    isEditingItem: false
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setActiveCategoryId(state, action){
            state.activeCategoryId = action.payload;
        }
    }
})

export default shopSlice.reducer
export const { setActiveCategoryId } = shopSlice.actions





