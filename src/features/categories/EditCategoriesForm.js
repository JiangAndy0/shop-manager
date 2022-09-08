import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux"

import { changeShopName, selectShopName } from "../shop/shopSlice"
import { modifyCategories, selectAllCategories } from "./categoriesSlice"
import { useNavigate } from "react-router-dom"
import { removeOrphanedItems } from "../items/itemsSlice"


export const EditCategoriesForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const categoriesObj = useSelector(state => state.categories)
    const prevShopName = useSelector(selectShopName)
    const prevCategories = useSelector(selectAllCategories)

    const [shopName, setShopName] = useState(prevShopName)
    const [categories, setCategories] = useState(prevCategories)

    let categoryBoxes = []
    for(let i = 0; i < categories.length; i++){
        categoryBoxes.push(
            <li key={`categoryBox#${i}`}>
                <textarea
                    value={categories[i]}
                    onChange={ e => {
                        setCategories(prev => {
                            const newCategories = prev.slice()
                            newCategories[i] = e.target.value
                            return newCategories
                        })
                    }}
                />
                <button
                    onClick={ e => {
                        e.preventDefault()
                        setCategories(prev => prev.slice(0, i).concat(prev.slice(i+1)))
                    }}
                >
                    Delete
                </button>
            </li>
        )
    }
    return(
        <div>
            <button
                onClick={e => {
                    e.preventDefault()
                    navigate(-1)
                }}
            >
                Cancel
            </button>
            <button
                onClick={e => {
                    e.preventDefault()
                    dispatch(changeShopName(shopName))
                    //create a new categories state object
                    dispatch(modifyCategories(categories))
                    dispatch(removeOrphanedItems(categoriesObj))
                    navigate('/')
                }}
            >
                Save
            </button>
            <form>
                <label htmlFor="shopName">Shop Name</label>
                <input
                    type="text"
                    value={shopName}
                    onChange={e => {
                        setShopName(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1))
                    }}
                />
                <label htmlFor="categories">Categories</label>
                <ul>
                    {categoryBoxes}
                </ul>
                <button
                    onClick={e => {
                        e.preventDefault()
                        setCategories(prev => prev.concat(['']))
                    }}
                >
                    Add Category
                </button>
            </form>
        </div>
    )
}