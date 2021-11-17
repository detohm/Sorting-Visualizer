import React, { useState } from 'react';
import { AlgorithmEnum } from './algorithms/algorithm.interface';
import { animationFrame, animationType } from './algorithms/animation';
import bubbleSort from './algorithms/bubbleSort';
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
    setCurrentAlgorithm(algo);
    clearVisual();
  };

  const [elements, setElements] = useState<number[]>(generateElements(20));
  const handleNumChange = (num: number) => {
    setElements(generateElements(num));
    clearVisual();
  };

  const [sortedIdx, setSortedIdx] = useState<number[]>([]);
  const [highlightIdx, setHighlightIdx] = useState<number[]>([]);


  const [isRunning, setIsRunning] = useState<boolean>(false);
  const handleStartButtonClick = () => {
    if (!isRunning) {
      setIsRunning(true);
    }

    switch (currentAlgorithm) {
      case AlgorithmEnum.BubbleSort: { animate(bubbleSort(elements)); }
    }
  }

  const clearVisual = () => {
    setHighlightIdx([]);
    setSortedIdx([]);
  };

  // recursive approach for animating the bars.
  const animate = (animations: animationFrame[]) => {
    if (animations.length === 0) {
      setIsRunning(false);
      setHighlightIdx([]);
      return;
    }
    let frame: animationFrame = animations[0];
    switch (frame.type) {
      case animationType.Probe:
        setHighlightIdx([frame.idx1!, frame.idx2!]);
        break;
      case animationType.ChangeSortedIdx:
        setSortedIdx(frame.sortedIdx!);
        break;
      case animationType.ChangeElements:
        setElements(frame.elements!);
    }
    animations.shift();
    let timer = setTimeout(() => {
      clearTimeout(timer); // preventing memory leak.
      animate(animations);
    }, 50);
  }

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
        elements={elements}
        sortedIdx={sortedIdx}
        highlightIdx={highlightIdx}
      />

    </Layout>
  );
};

export default App;
