import { useEffect, useState } from "react";
import Bar from '../../atoms/Bar/Bar';
import styles from './Visualizer.module.css';

const Visualizer = () => {
    // mock random bars
    const [bars, setBars] = useState<number[]>([]);
    useEffect(() => {
        let arr: number[] = [];
        for (let i = 0; i < 20; i++) {
            arr.push(Math.floor(Math.random() * 200) + 20);
        }
        setBars(arr)
    }, []);

    return (
        <div className={styles.visualizer}>
            {bars.map((e, i) =>
                <Bar key={i} value={e} color="processing" />
            )}
        </div>
    );
};

export default Visualizer;