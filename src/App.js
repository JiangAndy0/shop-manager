import React from 'react';
import { useSelector } from 'react-redux/es/exports';

import { selectAllItems } from './features/items/itemsSlice';
import { ItemPreview } from './features/items/itemPreview';

const App = () => {
  const items = useSelector(selectAllItems);
  const itemIds = Object.keys(items);
  const itemPreviews = itemIds.map(itemId => <ItemPreview itemId={itemId} key={itemId} />)
  return (
    <div className="App">
      {itemPreviews}
    </div>
  );
}

export default App;
