import React from "react";
import { useSelector, useDispatch} from "react-redux";

import { selectItemById } from "./itemsSlice";
import { setActiveItemId } from "../shop/shopSlice";

export const ItemPreview = ({itemId}) => {
    const dispatch = useDispatch();
    const item = useSelector(state => selectItemById(state, itemId));

    return (
        <article className="item-preview" onClick={() => dispatch(setActiveItemId(itemId))}>
            <img src={item.imgSource} alt="thumbnail for item"/>
            <h2>{item.title}</h2>
            <span>${item.price}</span>
        </article>
    )
}