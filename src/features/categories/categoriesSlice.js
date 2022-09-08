import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    "Men": {"1001": true, "1002": true},
    "Women": {"1003": true}
}
const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        addItemToCategory(state, action){
            const {itemId, category} = action.payload;
            state[category.toLowerCase()][itemId] = true;
        },
        removeItemFromCategory(state, action){
            const {itemId, category} = action.payload
            delete state[category.toLowerCase()][itemId]
        },
        modifyCategories(state, action){
            const newCategories = action.payload
            const newCategoriesState = newCategories.map(category => {
                return [category, state[category] ? state[category] : {}]
            })

            //delete previous categories
            const prevCategories = Object.keys(state)
            prevCategories.forEach(category => delete state[category])

            //set new categories
            newCategoriesState.forEach(([category, items]) => state[category] = items)
        }
    }
})

export default categoriesSlice.reducer
export const {addItemToCategory, removeItemFromCategory, modifyCategories} = categoriesSlice.actions;

export const selectAllCategories = state => Object.keys(state.categories)
export const selectCategoryItemIds = (state, category) => Object.keys(state.categories[category])
