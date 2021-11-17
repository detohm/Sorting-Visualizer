import Bar from '../../atoms/Bar/Bar';
import { IVisualizer } from "./Visualizer.interface";
import styles from './Visualizer.module.css';

const mainColor: string = "darkcyan";
const highlightColor: string = "red";
const highlightSecondColor: string = "blue";

const sortedColor: string = "#59db71";
const heightMultiplier = 3;

const Visualizer = (props: IVisualizer) => {

    const barWidth = window.innerWidth / (props.elements.length * 2);

    return (
        <div className={styles.visualizer}>
            {props.elements.map((e, i) =>
                <Bar
                    key={i}
                    width={barWidth}
                    height={e * heightMultiplier}
                    color={props.highlightSecondIdx.includes(i) ?
                        highlightSecondColor : props.highlightIdx.includes(i) ?
                            highlightColor : props.sortedIdx.includes(i) ?
                                sortedColor : mainColor} />
            )}
        </div>
    );
};

export default Visualizer;