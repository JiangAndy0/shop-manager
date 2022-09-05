import { nanoid } from "@reduxjs/toolkit"
import React from "react"
import { useSelector} from "react-redux"
import { useParams } from "react-router-dom"

import { selectAllCategories } from "../../categories/categoriesSlice"
import { ItemForm } from "./ItemForm"

export const AddItemForm = () => {
    const params = useParams();
    const categories = useSelector(selectAllCategories);
    const categoryIds = Object.keys(categories);
    console.log(categoryIds[0])

    return(
        <ItemForm
            itemId={nanoid()}
            title={''}
            imgSource={''}
            list={''}
            percentOff={'0'}
            stock={''}
            categoryId={params.categoryId !== '0' ? params.categoryId : categoryIds[0]}
            features={[]}
            numFeatures={1}
            formType="add"
        />
    )
}