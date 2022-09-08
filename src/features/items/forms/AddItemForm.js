import { nanoid } from "@reduxjs/toolkit"
import React from "react"
import { useSelector} from "react-redux"
import { useParams } from "react-router-dom"

import { selectAllCategories } from "../../categories/categoriesSlice"
import { ItemForm } from "./ItemForm"

export const AddItemForm = () => {
    const params = useParams()
    const categories = useSelector(selectAllCategories)

    return(
        <ItemForm
            itemId={nanoid()}
            title={''}
            imgSource={''}
            list={''}
            percentOff={'0'}
            stock={''}
            category={params.category ? params.category : categories[0]}
            features={[]}
            numFeatures={1}
            isFeatured={false}
            formType="add"
        />
    )
}