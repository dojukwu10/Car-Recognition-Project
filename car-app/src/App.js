import logo from './logo.svg';

import { Link } from 'react-router-dom';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Camera from './pages/Camera'
import Home from './pages/Home';





function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/camera" element={<Camera/>} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
