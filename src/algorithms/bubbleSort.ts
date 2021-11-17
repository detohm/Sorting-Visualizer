import { animationFrame, animationType } from './animation';
const bubbleSort = (
    elements: number[]
): animationFrame[] => {

    let arr = elements.slice(0);

    let animations: animationFrame[] = [];

    let sortedIdx: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {

            animations.push({
                type: animationType.Probe,
                idx1: j,
                idx2: j + 1
            });

            if (arr[j] > arr[j + 1]) {

                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

                animations.push({
                    type: animationType.Swap,
                    idx1: j,
                    idx2: j + 1
                });

                animations.push({
                    type: animationType.ChangeElements,
                    elements: arr.slice(0)
                });
            }
        }
        sortedIdx.push(arr.length - 1 - i);
        animations.push({
            type: animationType.ChangeSortedIdx,
            sortedIdx: sortedIdx.slice(0)
        });
    }
    sortedIdx.push(0);
    animations.push({
        type: animationType.ChangeSortedIdx,
        sortedIdx: sortedIdx.slice(0)
    });
    return animations;
};

export default bubbleSort;