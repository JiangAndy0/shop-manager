import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useParams } from "react-router-dom";

import { ItemBasicInfo } from "./ItemBasicInfo";
import { selectItemById } from "./itemsSlice";

export const ItemPage = () => {
    const params = useParams();
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
        </div>
    )
}