import React from 'react';
import './App.css';
import Authentication from './components/Authentication';
import Coffees from './components/Coffees';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 style={{ textAlign: 'center' }}>EL AROMA MAGICO</h1>
      </div>
      <div className="container">
        {/* Add an image from link */}
        {/* <img src="https://www.cafeselabra.com/wp-content/uploads/2019/03/cafetera-italiana.jpg" alt="Cafetera" /> */}
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
