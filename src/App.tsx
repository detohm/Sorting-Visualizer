import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/organisms/Layout/Layout';
import Home from './pages/Home/Home';
import MergeSort from './pages/MergeSort/MergeSort';
import QuickSort from './pages/QuickSort/QuickSort';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="merge-sort" element={<MergeSort />} />
          <Route path="quick-sort" element={<QuickSort />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
