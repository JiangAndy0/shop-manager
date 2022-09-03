import React from "react";
import { useSelector } from "react-redux";

import { selectItemById } from "./itemsSlice";

export const ItemPreview = ({itemId}) => {
    const item = useSelector(state => selectItemById(state, itemId));

    return (
        <article className="item-preview">
            <img src={item.imgSource} alt="thumbnail for item"/>
            <h2>{item.title}</h2>
            <span>${item.price}</span>
        </article>
    )
}