import { IBar } from './Bar.interface';
import styles from './Bar.module.css';
const Bar = (props: IBar) => {
    return (
        <div
            className={styles.bar}
            style={
                {
                    width: `${props.width}px`,
                    height: `${props.height}px`,
                    background: `${props.color}`
                }
            }>
            {props.height}
        </div>
    )
};

export default Bar;