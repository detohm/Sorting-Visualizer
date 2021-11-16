import Bar from '../../atoms/Bar/Bar';
import { IVisualizer } from "./Visualizer.interface";
import styles from './Visualizer.module.css';

const Visualizer = (props: IVisualizer) => {

    return (
        <div className={styles.visualizer}>
            {props.elements.map((e, i) =>
                <Bar key={i} value={e} color="processing" />
            )}
        </div>
    );
};

export default Visualizer;