import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { selectAllItems } from "../features/items/itemsSlice"
import { ItemPreview } from "../features/items/ItemPreview"

export const Home = () => {
    const navigate = useNavigate()
    const items = useSelector(selectAllItems)
    const itemIds = Object.keys(items)

    const featuredItemPreviews = itemIds
        .filter(itemId => items[itemId].isFeatured )
        .map(itemId => <ItemPreview itemId={itemId} key={itemId}/>);
    const otherItemPreviews = itemIds
        .filter(itemId => !items[itemId].isFeatured )
        .map(itemId => <ItemPreview itemId={itemId} key={itemId}/>);

    return(
        <main>
            <h2>Featured</h2>
            {featuredItemPreviews.length > 0 ? featuredItemPreviews : <p>No Featured Items.</p>}
            <h2>More Items</h2>
            {otherItemPreviews}
            <button onClick={() => navigate('/addItem')}>Add Item</button>
        </main>
    )

}