import React from 'react';
import './App.css';
import Authentication from './components/Authentication';
import Coffees from './components/Coffees';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ marginLeft: '4rem' }}>
          EL AROMA MAGICO
        </h1>
        <div><img style={{ width: '92%', marginLeft: '4rem' }} src='coffee.png' alt='Coffee' /></div>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/coffees" element={<Coffees />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
