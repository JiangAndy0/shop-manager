import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { selectCategoryById } from "./categoriesSlice";
import { ItemPreview } from "../items/ItemPreview";

export const CategoryPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const category = useSelector(state => selectCategoryById(state, params.categoryId));
    const categoryItems = Object.keys(category.items).map(itemId => <ItemPreview itemId={itemId} key={itemId}/>)
    
    return(
        <div className="category-page">
            {categoryItems}
            <button onClick={() => navigate('addItem')}>Add Item</button>
        </div>
    )
}