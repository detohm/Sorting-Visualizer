import { AlgorithmEnum } from "../../../algorithms/algorithm.interface";

export interface IHeader {
    isRunning: boolean;
    currentAlgorithm: AlgorithmEnum;
    onAlgorithmChange: (algo: AlgorithmEnum) => void;
    onNumChange: (num: number) => void;
    onStartButtonClick: () => void;
};