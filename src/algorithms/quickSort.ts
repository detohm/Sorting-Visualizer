import { animationFrame, animationType } from "./animation";

const quickSort = (elements: number[]): animationFrame[] => {
    let animations: animationFrame[] = [];
    sort(elements.slice(0), 0, elements.length - 1, animations);
    return animations;
};

const sort = (
    elements: number[],
    begin: number,
    end: number,
    animations: animationFrame[]) => {
    if (begin >= end) {
        return;
    }
    let pivotIdx: number = partition(elements, begin, end, animations);
    sort(elements, begin, pivotIdx - 1, animations);
    sort(elements, pivotIdx + 1, end, animations);
}

const partition = (
    elements: number[],
    begin: number,
    end: number,
    animations: animationFrame[]): number => {

    let pivot: number = elements[end];
    let i = begin - 1;
    for (let j = begin; j <= end - 1; j++) {
        animations.push({ type: animationType.Probe, idx1: j, idx2: end });
        if (elements[j] <= pivot) {
            i += 1;
            animations.push({ type: animationType.Swap, idx1: i, idx2: j });
            [elements[i], elements[j]] = [elements[j], elements[i]];
            animations.push({ type: animationType.ChangeElements, elements: elements.slice(0) });
        }
    }
    animations.push({ type: animationType.Swap, idx1: i + 1, idx2: end });
    [elements[i + 1], elements[end]] = [elements[end], elements[i + 1]];
    animations.push({ type: animationType.ChangeElements, elements: elements.slice(0) });
    return i + 1;
}

export default quickSort;