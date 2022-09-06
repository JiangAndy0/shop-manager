import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import { selectAllItems } from "../features/items/itemsSlice"
import { ItemPreview } from "../features/items/ItemPreview"

export const Home = () => {
    const navigate = useNavigate()
    const items = useSelector(selectAllItems)
    const itemIds = Object.keys(items)
    const itemPreviews = itemIds.map(itemId => <ItemPreview itemId={itemId} key={itemId}/>);

    return(
        <main>
            {itemPreviews}
            <button onClick={() => navigate('/categories/0/addItem')}>Add Item</button>
        </main>
    )

}