import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: 'Your Store Name',
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {}
})

export default shopSlice.reducer





