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

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const handleStartButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isRunning) {
      setIsRunning(true);
    }
    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
  }

  return (
    <BrowserRouter>
      <Header
        isRunning={isRunning}
        onNumChange={handleNumChange}
        onStartButtonClick={handleStartButtonClick} />

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
