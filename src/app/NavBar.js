import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectAllCategories } from '../features/categories/categoriesSlice';

export const NavBar = () => {

    const storeName = useSelector(state => state.shop.name)
    const categories = useSelector(selectAllCategories)
    const categoryIds = Object.keys(categories)
    
    return (
        <nav>
            <Link to='/'>{storeName}</Link>
            { 
                categoryIds.map(categoryId => 
                    <Link 
                        to={`/categories/${categoryId}`}
                        key={categoryId}
                    >
                        {categories[categoryId].name}
                    </Link>
                )
            }
        </nav>

    );
}