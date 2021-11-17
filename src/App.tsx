import React, { useState } from 'react';
import { AlgorithmEnum } from './algorithms/algorithm.interface';
import './App.css';
import Header from './components/organisms/Header/Header';
import Layout from './components/organisms/Layout/Layout';
import Visualizer from './components/organisms/Visualizer/Visualizer';
// generate function
const generateElements = (num: number): number[] => {
  let arr: number[] = [];
  for (let i = 0; i < num; i++) {
    arr.push(Math.floor(Math.random() * 200) + 20);
  }
  return arr;
}

const App = () => {

  const [currentAlgorithm, setCurrentAlgorithm]
    = useState<AlgorithmEnum>(AlgorithmEnum.BubbleSort);
  const handleAlgorithmChange = (algo: AlgorithmEnum) => {
    setCurrentAlgorithm(algo)
  };

  const [isRunning, setIsRunning] = useState<boolean>(false);
  const handleStartButtonClick = () => {
    if (!isRunning) {
      setIsRunning(true);
    }
    setTimeout(() => {
      setIsRunning(false);
    }, 3000);
  }

  const [elements, setElements] = useState<number[]>(generateElements(20));
  const handleNumChange = (num: number) => {
    setElements(generateElements(num));
  };

  return (
    <Layout>
      <Header
        currentAlgorithm={currentAlgorithm}
        isRunning={isRunning}
        onNumChange={handleNumChange}
        onStartButtonClick={handleStartButtonClick}
        onAlgorithmChange={handleAlgorithmChange} />

      <Visualizer
        currentAlgorithm={currentAlgorithm}
        elements={elements} />

    </Layout>
  );
};

export default App;
