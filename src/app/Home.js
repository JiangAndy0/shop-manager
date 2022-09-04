import React from "react"
import { useSelector } from "react-redux"

import { selectAllItems } from "../features/items/itemsSlice"
import { ItemPreview } from "../features/items/ItemPreview"

export const Home = () => {
    const items = useSelector(selectAllItems);
    const itemIds = Object.keys(items);
    const itemPreviews = itemIds.map(itemId => <ItemPreview itemId={itemId} key={itemId}/>);

    return(
        <main>
            {itemPreviews}
        </main>
    )

}