import React from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import { selectCategoryItemIds } from "./categoriesSlice";
import { ItemPreview } from "../items/ItemPreview";

export const CategoryPage = () => {
    const navigate = useNavigate()
    const params = useParams()
    const category = params.category
    const itemIds = useSelector(state => selectCategoryItemIds(state, category))
    const itemPreviews = itemIds.map(itemId => <ItemPreview itemId={itemId} key={itemId}/>)
    
    return(
        <div className="category-page">
            {itemPreviews}
            <button onClick={() => navigate('addItem')}>Add Item</button>
        </div>
    )
}