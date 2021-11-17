import Bar from '../../atoms/Bar/Bar';
import { IVisualizer } from "./Visualizer.interface";
import styles from './Visualizer.module.css';

const Visualizer = (props: IVisualizer) => {

    const barWidth = window.innerWidth / (props.elements.length * 2);
    const heightMultiplier = 3;

    return (
        <div className={styles.visualizer}>
            {props.elements.map((e, i) =>
                <Bar
                    key={i}
                    width={barWidth}
                    height={e * heightMultiplier}
                    color="processing" />
            )}
        </div>
    );
};

export default Visualizer;