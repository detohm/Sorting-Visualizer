import { IBar } from './Bar.interface';
import styles from './Bar.module.css';
const Bar = (props: IBar) => {
    return (
        <div
            className={styles.bar}
            style={{ height: `${props.value}px` }}>
            {props.value}
        </div>
    )
};

export default Bar;