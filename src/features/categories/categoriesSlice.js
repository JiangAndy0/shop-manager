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
    reducers: {
        addItemToCategory(state, action){
            const {itemId, categoryId} = action.payload;
            state[categoryId].items[itemId] = true;
        },
        removeItemFromCategory(state, action){
            const {itemId, categoryId} = action.payload;
            console.log(categoryId)
            delete state[categoryId].items[itemId];
        }
    }
})

export default categoriesSlice.reducer
export const {addItemToCategory, removeItemFromCategory} = categoriesSlice.actions;

export const selectAllCategories = state => state.categories
export const selectCategoryById = (state, categoryId) => state.categories[categoryId]
