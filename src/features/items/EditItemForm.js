import React, {useState} from "react"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom"

import { selectItemById } from "./itemsSlice";
import { selectAllCategories } from "../categories/categoriesSlice";
import { removeItemFromCategory } from "../categories/categoriesSlice";
import { addItemToCategory } from "../categories/categoriesSlice";
import { modifyItem } from "./itemsSlice";

export const EditItemForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const itemId = params.itemId;
    const item = useSelector(state => selectItemById(state, itemId));

    const categories = useSelector(selectAllCategories)
    const categoryIds = Object.keys(categories)

    const prevCategoryId = item.categoryId;

    const [title, setTitle] = useState(item.title)
    const [imgSource, setImgSource] = useState(item.imgSource)
    const [list, setList] = useState(item.list)
    const [percentOff, setPercentOff] = useState(item.percentOff)
    const [stock, setStock] = useState(item.stock)
    const [categoryId, setCategoryId] = useState(item.categoryId)
    const [features, setFeatures] = useState(item.features)
    const [numFeatures, setNumFeatures] = useState(item.features.length)

    const canSubmit = title && imgSource && list && percentOff !== '' && stock && categoryId && features && numFeatures;

    const categoryOptions = categoryIds.map(categoryId =>
        <option value={categoryId} key={categoryId}>
            {categories[categoryId].name}
        </option>
    )

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
            <button
                disabled={!canSubmit}
                onClick={e => {
                    e.preventDefault()
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
                    console.log('The previous category Id was: ', prevCategoryId);
                    dispatch( removeItemFromCategory({itemId, categoryId: prevCategoryId}) )
                    dispatch( modifyItem(item) ) 
                    dispatch( addItemToCategory({itemId, categoryId}) )
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