import { AlgorithmEnum } from "../../../algorithms/algorithm.interface";
export interface IVisualizer {
    currentAlgorithm: AlgorithmEnum;
    elements: number[];

    highlightIdx: number[];

    sortedIdx: number[];
};