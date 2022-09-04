import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    "101": {
        name: "Men",
        items: { "1001": true, "1002": true}
    },
    "102": {
        name: "Women",
        items: { "1003": true}
    }
}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {}
})

export default categoriesSlice.reducer

export const selectAllCategories = state => state.categories
export const selectCategoryById = (state, categoryId) => state.categories[categoryId]
