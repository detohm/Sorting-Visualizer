import { animationFrame, animationType } from './animation';

const mergeSort = (elements: number[]): animationFrame[] => {
    let animations: animationFrame[] = [];
    let tempArr = elements.slice(0);
    let actualElements = elements.slice(0);
    split(tempArr, actualElements, 0, actualElements.length - 1, animations);

    return animations;
};

const split = (
    tempArr: number[],
    elements: number[],
    begin: number,
    end: number,
    animations: animationFrame[]
) => {
    if (end === begin) {
        return;
    }
    let middle = Math.floor((end + begin) / 2);

    // technique - alternate between element & tempArray per each recursive
    split(elements, tempArr, begin, middle, animations);
    split(elements, tempArr, middle + 1, end, animations);
    merge(tempArr, elements, begin, middle, end, animations);
};

const merge = (
    tempArr: number[],
    elements: number[],
    begin: number,
    middle: number,
    end: number,
    animations: animationFrame[]
) => {
    let i: number = begin;
    let j: number = middle + 1;
    let k: number = begin;

    let finalMerge: boolean = (begin === 0 && end === elements.length - 1);

    while (i <= middle && j <= end) {

        animations.push({
            type: animationType.Probe,
            idx1: k, idx2: k
        });
        if (tempArr[i] <= tempArr[j]) {
            elements[k] = tempArr[i];
            i++;
        } else {
            elements[k] = tempArr[j];
            j++;
        }
        animations.push({
            type: animationType.ChangeElements,
            elements: elements.slice(0)
        });
        k++;
        if (finalMerge) {
            animations.push({
                type: animationType.ChangeSortedIdx,
                sortedIdx: range(0, k)
            });
        }
    }

    while (i <= middle) {

        animations.push({
            type: animationType.Probe,
            idx1: k, idx2: k
        });
        elements[k] = tempArr[i];
        animations.push({
            type: animationType.ChangeElements,
            elements: elements.slice(0)
        });
        i++;
        k++;
        if (finalMerge) {
            animations.push({
                type: animationType.ChangeSortedIdx,
                sortedIdx: range(0, k)
            });
        }
    }
    while (j <= end) {

        animations.push({
            type: animationType.Probe,
            idx1: k, idx2: k
        });
        elements[k] = tempArr[j];
        animations.push({
            type: animationType.ChangeElements,
            elements: elements.slice(0)
        });
        j++;
        k++;
        if (finalMerge) {
            animations.push({
                type: animationType.ChangeSortedIdx,
                sortedIdx: range(0, k)
            });
        }
    }

};

const range = (start: number, end: number): number[] => {
    let arr: number[] = [];
    for (let i = start; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}

export default mergeSort;