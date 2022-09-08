import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { ItemBasicInfo } from "./ItemBasicInfo";
import { selectAllItems } from "./itemsSlice";

export const ItemPreview = ({itemId}) => {
    const navigate = useNavigate();
    const items = useSelector(selectAllItems)
    const category = items[itemId].category

    return (
        <article 
            className="item-preview" 
            onClick={() => navigate(`/${category}/${itemId}`)}
        >
            <ItemBasicInfo itemId={itemId}/>
        </article>
    )
}