import { animationFrame, animationType } from './animation';

const mergeSort = (elements: number[]): animationFrame[] => {
    let animations: animationFrame[] = [];
    let auxElements = elements.slice(0);
    let actualElements = elements.slice(0);
    let sortedElements = elements.slice(0); // for visualizing
    split(auxElements, actualElements, 0,
        actualElements.length - 1, animations, sortedElements);

    return animations;
};

const split = (
    auxElements: number[],
    elements: number[],
    begin: number,
    end: number,
    animations: animationFrame[],
    sortedElements: number[]
) => {
    if (end === begin) {
        return;
    }
    let middle = Math.floor((end + begin) / 2);

    // technique - alternate between element & auxElements per each recursive
    split(elements, auxElements, begin, middle, animations, sortedElements);
    split(elements, auxElements, middle + 1, end, animations, sortedElements);
    merge(auxElements, elements, begin, middle, end, animations, sortedElements);
};

const merge = (
    auxElements: number[],
    elements: number[],
    begin: number,
    middle: number,
    end: number,
    animations: animationFrame[],
    sortedElements: number[]
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
        if (auxElements[i] <= auxElements[j]) {
            elements[k] = auxElements[i];
            i++;
        } else {
            elements[k] = auxElements[j];
            j++;
        }
        sortedElements[k] = elements[k];
        animations.push({
            type: animationType.ChangeElements,
            elements: sortedElements.slice(0)
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
        elements[k] = auxElements[i];
        i++;

        sortedElements[k] = elements[k];
        animations.push({
            type: animationType.ChangeElements,
            elements: sortedElements.slice(0)
        });
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
        elements[k] = auxElements[j];
        j++;

        sortedElements[k] = elements[k];
        animations.push({
            type: animationType.ChangeElements,
            elements: sortedElements.slice(0)
        });
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