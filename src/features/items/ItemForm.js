import { nanoid } from "@reduxjs/toolkit"
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"

import { addItemToCategory, selectAllCategories } from "../categories/categoriesSlice"
import { addItem } from "./itemsSlice"

export const ItemForm = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();
    const params = useParams();

    const categories = useSelector(selectAllCategories)
    const categoryIds = Object.keys(categories)

    const [title, setTitle] = useState('')
    const [imgSource, setImgSource] = useState('')
    const [list, setList] = useState('')
    const [percentOff, setPercentOff] = useState('')
    const [stock, setStock] = useState('')
    const [categoryId, setCategoryId] = useState(params.categoryId !== '0' ? params.categoryId : categoryIds[0])
    const [features, setFeatures] = useState([])
    const [numFeatures, setNumFeatures] = useState(1)

    const canSubmit = title && imgSource && list && percentOff && stock && categoryId && features && numFeatures;

    const categoryOptions = categoryIds.map(categoryId =>
        <option value={categoryId} key={categoryId}>
            {categories[categoryId].name}
        </option>
    )

    //add text area and delete button for each feature
    let featureBoxes = [];
    for (let i = 0; i < numFeatures; i++) {
        featureBoxes.push(
            <li>
                <textarea
                    value={features[i]}
                    onChange={e => setFeatures(prev => {
                        const newFeatures = prev.slice()
                        newFeatures[i] = e.target.value
                        return newFeatures
                    })}
                />
                <button
                    onClick={e => {
                        e.preventDefault();
                        setFeatures(prev => prev.slice(0, i).concat(prev.slice(i + 1)))
                        setNumFeatures(prev => prev - 1) //trigger refresh 
                    }}
                >
                    Delete
                </button>

            </li>
        );

    }

    return (
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
                disabled={!canSubmit}
                onClick={e => {
                    e.preventDefault()
                    const itemId = nanoid();
                    const item = {
                        itemId,
                        title,
                        imgSource,
                        list,
                        percentOff,
                        stock,
                        categoryId,
                        features,
                    }
                    dispatch(addItem(item))
                    dispatch(addItemToCategory({itemId, categoryId}))
                    navigate(`/items/${itemId}`)
                }}
            >
                Save
            </button>
            <form>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label htmlFor="imgSource">Image Source</label>
                <input
                    type="text"
                    id="imgSource"
                    value={imgSource}
                    onChange={e => setImgSource(e.target.value)}
                />
                <label htmlFor="list">List Price</label>
                <input
                    type="number"
                    id="list"
                    value={list}
                    onChange={e => setList(e.target.value)}
                />
                <label htmlFor="percentOff">Percent Off</label>
                <input
                    type="number"
                    id="percentOff"
                    value={percentOff}
                    onChange={e => setPercentOff(e.target.value)}
                />
                <label htmlFor="stock">Stock</label>
                <input
                    type="number"
                    id="stock"
                    value={stock}
                    onChange={e => setStock(e.target.value)}
                />
                <label htmlFor="categoryId">Select Category</label>
                <select
                    id="categoryId"
                    value={categoryId}
                    onChange={e => setCategoryId(e.target.value)}
                >
                    {categoryOptions}
                </select>
                <label htmlFor="featuresInput">Features</label>
                {featureBoxes}
                <button onClick={e => {
                    e.preventDefault()
                    setNumFeatures(prev => prev + 1)
                }
                }>
                    Add Feature
                </button>
            </form>
        </div>

    )
}