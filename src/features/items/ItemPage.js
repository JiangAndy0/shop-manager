import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import { ItemBasicInfo } from "./ItemBasicInfo";
import { selectItemById } from "./itemsSlice";
import { removeItem } from "./itemsSlice";
import { removeItemFromCategory } from "../categories/categoriesSlice";

export const ItemPage = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const navigate = useNavigate();

    const itemId = params.itemId
    const item = useSelector(state => selectItemById(state, itemId));
    const category = item.category;
    return (
        <div id="item-page">
            <ItemBasicInfo itemId={params.itemId} />
            <ul>
                {item.features.map((feature, index) => {
                    return (
                        <li key={`feature #${index}`}>{feature}</li>
                    )
                })}
            </ul>
            <button 
                onClick={ e => {
                    e.preventDefault()
                    dispatch(removeItemFromCategory({itemId, category}))
                    dispatch(removeItem(itemId))
                    navigate(`/${category}`)
                }}
            >
                Delete
            </button>
            <button
                onClick={ e => {
                    e.preventDefault()
                    navigate('edit')
                }}
            >
                Edit
            </button>
        </div>
    )
}