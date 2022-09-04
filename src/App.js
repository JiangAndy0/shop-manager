import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import { Outlet } from 'react-router-dom';

import { NavBar } from './app/NavBar';
import { selectAllItems } from './features/items/itemsSlice';
import { ItemPreview } from './features/items/ItemPreview';
import { ItemPage } from './features/items/ItemPage';
import { selectAllCategories } from './features/categories/categoriesSlice';



const App = () => {

  const activeItemId = useSelector(state => state.shop.activeItemId)
  const items = useSelector(selectAllItems)
  const activeCategoryId = useSelector(state => state.shop.activeCategoryId)
  const categories = useSelector(selectAllCategories)

  let page
  if(activeItemId){
    page = <ItemPage itemId={activeItemId}/>
  } else {
    let itemIds
    if(activeCategoryId){
      itemIds = Object.keys(categories[activeCategoryId].items);
    } else {
      itemIds = Object.keys(items);
    }
    page = itemIds.map(itemId => <ItemPreview itemId={itemId} key={itemId} />)
  }

  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
