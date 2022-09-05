import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate, useParams } from "react-router-dom";

import { ItemBasicInfo } from "./ItemBasicInfo";
import { selectItemById } from "./itemsSlice";

export const ItemPage = () => {
    const params = useParams();
    const navigate = useNavigate();
    const item = useSelector(state => selectItemById(state, params.itemId));
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
                    navigate('edit')
                }}
            >
                Edit
            </button>
        </div>
    )
}