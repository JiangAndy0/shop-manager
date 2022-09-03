import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import { NavBar } from './app/NavBar';
import { selectAllItems } from './features/items/itemsSlice';
import { ItemPreview } from './features/items/itemPreview';
import { selectAllCategories } from './features/categories/categoriesSlice';


const App = () => {
  const items = useSelector(selectAllItems);
  let itemIds = Object.keys(items);

  const categories = useSelector(selectAllCategories);
  const activeCategoryId = useSelector(state => state.shop.activeCategoryId);
  if(activeCategoryId){
    itemIds = Object.keys(categories[activeCategoryId].items);
  }

  const itemPreviews = itemIds.map(itemId => <ItemPreview itemId={itemId} key={itemId} />)

  return (
    <div className="App">
      <NavBar />
      {itemPreviews}
    </div>
  );
}

export default App;
