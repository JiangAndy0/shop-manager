import React from "react";
import { useNavigate } from "react-router-dom";

import { ItemBasicInfo } from "./ItemBasicInfo";

export const ItemPreview = ({itemId}) => {
    const navigate = useNavigate();
    return (
        <article className="item-preview" onClick={() => navigate(`/items/${itemId}`)}>
            <ItemBasicInfo itemId={itemId}/>
        </article>
    )
}