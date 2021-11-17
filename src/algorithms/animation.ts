export enum animationType {
    Probe,
    Swap,
    ChangeElements,
    ChangeSortedIdx,
}

export interface animationFrame {
    type: animationType;

    idx1?: number;
    idx2?: number;

    elements?: number[];
    sortedIdx?: number[];
};