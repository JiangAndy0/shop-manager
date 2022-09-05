import React from "react"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom"

import { ItemForm } from "./ItemForm"
import { selectItemById } from "../itemsSlice";


export const EditItemForm = () => {
    const params = useParams()
    const itemId = params.itemId
    const item = useSelector(state => selectItemById(state, itemId))

    return(
        <ItemForm 
            itemId={itemId}
            title={item.title}
            imgSource={item.imgSource}
            list={item.list}
            percentOff={item.percentOff}
            stock={item.stock}
            categoryId={item.categoryId}
            features={item.features}
            numFeatures={item.features.length}
            formType="edit"
            prevCategoryId={item.categoryId}
        />
    )
}