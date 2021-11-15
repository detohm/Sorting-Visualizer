import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import MergeSort from './pages/MergeSort';
function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/merge-sort">Merge Sort</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/merge-sort" element={<MergeSort />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
