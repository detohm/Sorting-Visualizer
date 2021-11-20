import { animationFrame, animationType } from "./animation";

const quickSort = (elements: number[]): animationFrame[] => {
    let animations: animationFrame[] = [];
    let sortedIdx: number[] = [];
    sort(elements.slice(0), 0, elements.length - 1, sortedIdx, animations);
    return animations;
};

const sort = (
    elements: number[],
    begin: number,
    end: number,
    sortedIdx: number[],
    animations: animationFrame[]) => {

    if (begin >= end) {

        sortedIdx.push(begin);
        animations.push({
            type: animationType.ChangeSortedIdx,
            sortedIdx: sortedIdx.slice(0)
        });
        return;
    }
    let pivotIdx: number = partition(elements, begin, end, sortedIdx, animations);
    sort(elements, begin, pivotIdx - 1, sortedIdx, animations);
    sort(elements, pivotIdx + 1, end, sortedIdx, animations);
}

const partition = (
    elements: number[],
    begin: number,
    end: number,
    sortedIdx: number[],
    animations: animationFrame[]): number => {

    let pivot: number = elements[end];
    let i = begin - 1;
    for (let j = begin; j <= end - 1; j++) {
        animations.push({
            type: animationType.Probe,
            idx1: j,
            idx2: end
        });
        if (elements[j] <= pivot) {
            i += 1;

            [elements[i], elements[j]] = [elements[j], elements[i]];
            animations.push({
                type: animationType.ChangeElements,
                elements: elements.slice(0)
            });
        }
    }

    [elements[i + 1], elements[end]] = [elements[end], elements[i + 1]];
    animations.push({
        type: animationType.ChangeElements,
        elements: elements.slice(0)
    });

    sortedIdx.push(i + 1);
    animations.push({
        type: animationType.ChangeSortedIdx,
        sortedIdx: sortedIdx.slice(0)
    });

    return i + 1;
}

export default quickSort;