import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import { addItemToCategory, selectAllCategories, removeItemFromCategory } from "../../categories/categoriesSlice"
import { modifyItem } from "../itemsSlice"

export const ItemForm = (props) => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const categories = useSelector(selectAllCategories)
    const categoryIds = Object.keys(categories)

    const [title, setTitle] = useState(props.title)
    const [imgSource, setImgSource] = useState(props.imgSource)
    const [list, setList] = useState(props.list)
    const [percentOff, setPercentOff] = useState(props.percentOff)
    const [stock, setStock] = useState(props.stock)
    const [categoryId, setCategoryId] = useState(props.categoryId)
    const [features, setFeatures] = useState(props.features)
    const [numFeatures, setNumFeatures] = useState(props.numFeatures)

    const canSubmit = title && imgSource && list && percentOff !== '' && stock && categoryId && features && numFeatures;

    const categoryOptions = categoryIds.map(categoryId =>
        <option value={categoryId} key={categoryId}>
            {categories[categoryId].name}
        </option>
    )

    const saveButton = <button
        disabled={!canSubmit}
        onClick={e => {
            e.preventDefault()
            if (props.formType === 'edit') {
                dispatch(removeItemFromCategory({
                    itemId: props.itemId,
                    categoryId: props.prevCategoryId
                }))
            }

            const item = {
                title,
                imgSource,
                list,
                percentOff,
                stock,
                categoryId,
                features,
            }
            dispatch(modifyItem({ itemId: props.itemId, item }))
            dispatch(addItemToCategory({ itemId: props.itemId, categoryId }))
            navigate(`/items/${props.itemId}`)
        }}
    >
        Save
    </button>

    //add text area and delete button for each feature
    let featureBoxes = [];
    for (let i = 0; i < numFeatures; i++) {
        featureBoxes.push(
            <li key={`featurebox${i}`}>
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
            {saveButton}
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