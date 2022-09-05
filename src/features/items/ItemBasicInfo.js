import React from "react";
import { useSelector} from "react-redux";

import { selectItemById } from "./itemsSlice";

export const ItemBasicInfo = ({itemId}) => {
    const item = useSelector(state => selectItemById(state, itemId));

    let price = <p>{item.list}</p>;
    if(item.percentOff !== "0"){
        const finalPrice = (item.list * (1 - item.percentOff / 100)).toFixed(2);
        price = <p>$<del>{item.list}</del> {finalPrice}</p>
    }

    return (
        <section>
            <img src={item.imgSource} alt="thumbnail for item"/>
            <h2>{item.title}</h2>
            {price}
            <p>{item.stock} left</p>
        </section>
    )
}