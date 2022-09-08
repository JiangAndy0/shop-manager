import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import { CategoryPage } from './features/categories/CategoryPage';
import { ItemPage } from './features/items/ItemPage';
import { Home } from './app/Home';
import { AddItemForm } from './features/items/forms/AddItemForm';
import { EditItemForm } from './features/items/forms/EditItemForm';
import { EditCategoriesForm } from './features/categories/EditCategoriesForm';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />}/>
            <Route path=":category" element={<CategoryPage />}/>
            <Route path=":category/:itemId" element={<ItemPage />}/>
          </Route>
          <Route path=":category/addItem" element={<AddItemForm />}/>
          <Route path=":category/:itemId/edit" element={<EditItemForm />}/>
          <Route path="edit" element={<EditCategoriesForm/>} />
          <Route path="addItem" element={<AddItemForm />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
