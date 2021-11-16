import { NavLink } from 'react-router-dom';
import Button from '../../atoms/Button/Button';
import RangeSlider from '../../atoms/RangeSlider/RangeSlider';
import { IHeader } from './Header.interface';
import styles from './Header.module.css';


const Header = (props: IHeader) => {

    const navStyle = ({ isActive }: { isActive: boolean }) => {
        return {
            color: isActive ? "red" : "white"
        };
    };

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <NavLink to="/">Sorting Visualizer</NavLink>
            </div>
            <RangeSlider min={1} max={100} onChange={props.onNumChange} />
            <Button label="Start Sorting!" />
            <nav className={styles.nav}>
                <NavLink
                    to="/merge-sort"
                    className={styles['nav-item']}
                    style={navStyle}>Merge Sort</NavLink>
                <NavLink
                    to="/quick-sort"
                    className={styles['nav-item']}
                    style={navStyle}>Quick Sort</NavLink>
            </nav>
        </div>
    );
};

export default Header;