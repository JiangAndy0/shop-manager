import React from 'react';
import { Outlet } from 'react-router-dom';

import { NavBar } from './app/NavBar';




const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;
