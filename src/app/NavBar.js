import React from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { selectAllCategories } from '../features/categories/categoriesSlice';

export const NavBar = () => {
    const navigate = useNavigate();

    const storeName = useSelector(state => state.shop.name)
    const categories = useSelector(selectAllCategories)
    
    return (
        <nav>
            <Link to='/'>{storeName}</Link>
            { 
                categories.map(category => 
                    <Link 
                        to={`/${category}`}
                        key={category}
                    >
                        {category.charAt(0).toUpperCase() + category.slice(1)}
                    </Link>
                )
            }
            <button
                onClick={e => {
                    e.preventDefault()
                    navigate('/edit')
                }}
            >
                Edit
            </button>
        </nav>

    );
}