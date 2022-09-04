import { createSlice } from "@reduxjs/toolkit";

import shoes from '../../resources/shoes.jpg'
import socks from '../../resources/socks.jpg'
import top from '../../resources/top.jpeg'


const initialState = {
    "1001": {
        title: "Men's brown leather shoes everyday wear business casual",
        imgSource: shoes,
        price: 25.99,
        categoryId: "101",
        features: [
            'Made of the finest, most durable Texan leather',
            'Waterproof: withstand the toughest rain in these boots',
            'Patent-pending UltraSoft insoles ensure your feet stay comfortable all day long'
        ]
    },
    "1002": {
        title: "Men's black gray athletic sweatproof cotton socks six pairs",
        imgSource: socks,
        price: 14.99,
        categoryId: "101",
        features: [
            'Made with 100% breathable, soft cotton',
            "Fits Men's sizes 6-12, Women's 10-15",
            "Padded ankle and heel regions",
            "Machine-washable on warm settings"
        ]
    },
    "1003": {
        title: "Women's navy blue breathable workout top relaxed fit",
        imgSource: top,
        price: 17.99,
        categoryId: "102",
        features: [
            "Form fitting design shows off your figure",
            "Sweat and stain resistant so that nothing stops your gym sessions",
            "Darker dye will not stain your other clothes, just throw it in the wash!"
        ]
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