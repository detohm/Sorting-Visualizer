import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/organisms/Header/Header';
import Layout from './components/organisms/Layout/Layout';
import Home from './pages/Home/Home';
import Sort from './pages/Sort/Sort';
function App() {

  const [num, setNum] = useState<number>(20);
  const handleNumChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(parseInt(e.target.value))
  };


  return (
    <BrowserRouter>
      <Header onNumChange={handleNumChange} />
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="" element={<Home />} />
          <Route path="merge-sort" element={<Sort num={num} />} />
          <Route path="quick-sort" element={<Sort num={num} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
