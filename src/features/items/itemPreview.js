import React from "react";
import { useSelector} from "react-redux";

import { selectItemById } from "./itemsSlice";
import { useNavigate } from "react-router-dom";

export const ItemPreview = ({itemId}) => {
    const navigate = useNavigate();
    const item = useSelector(state => selectItemById(state, itemId));

    return (
        <article className="item-preview" onClick={() => navigate(`/items/${itemId}`)}>
            <img src={item.imgSource} alt="thumbnail for item"/>
            <h2>{item.title}</h2>
            <span>${item.price}</span>
        </article>
    )
}