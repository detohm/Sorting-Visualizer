import { useEffect, useState } from "react";
import Visualizer from "../../components/organisms/Visualizer/Visualizer";
interface ISort {
    num: number;
};
const Sort = (props: ISort) => {
    const [arr, setArr] = useState<number[]>([]);

    useEffect(() => {
        let arr: number[] = [];
        for (let i = 0; i < props.num; i++) {
            arr.push(Math.floor(Math.random() * 200) + 20);
        }
        setArr(arr);

    }, [props.num])

    return (
        <Visualizer elements={arr} />
    );
};

export default Sort;