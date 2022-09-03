import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { selectAllCategories } from '../features/categories/categoriesSlice';
import { setActiveCategoryId } from '../features/shop/shopSlice';

export const NavBar = () => {
    const dispatch = useDispatch();

    const storeName = useSelector(state => state.shop.name)
    const categories = useSelector(selectAllCategories)
    const categoryIds = Object.keys(categories)
    
    return (
        <nav>
            <button 
                id="store-name"
                onClick={() => {
                    dispatch(setActiveCategoryId(''))
                }}
            >
                {storeName}
            </button>
            {        
                categoryIds.map(categoryId => {
                    return(
                        <button 
                            key={categoryId} 
                            onClick={() => {
                                dispatch(setActiveCategoryId(categoryId))
                            }}
                        >
                            {categories[categoryId].name}
                        </button>
                    )
                })
            }
        </nav>

    );
}