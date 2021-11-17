import React from 'react';
import { AlgorithmEnum } from '../../../algorithms/algorithm.interface';
import Button from '../../atoms/Button/Button';
import RangeSlider from '../../atoms/RangeSlider/RangeSlider';
import { IHeader } from './Header.interface';
import styles from './Header.module.css';


const Header = (props: IHeader) => {

    const min = 2, max = 50;
    const handleRangeSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onNumChange(parseInt(e.target.value));
    };

    const handleClick = (algo: AlgorithmEnum) => {
        return (e: React.MouseEvent<HTMLElement>) => {
            props.onAlgorithmChange(algo);
        };
    }

    return (
        <div className={styles.header}>
            <div className={styles.title}>
                Sorting Visualizer
            </div>

            <RangeSlider
                min={min}
                max={max}
                disabled={props.isRunning}
                onChange={handleRangeSliderChange} />

            <Button
                label={props.isRunning ? "Running!" : "Start!"}
                disabled={props.isRunning}
                onClick={props.onStartButtonClick} />

            <nav className={styles.nav}>
                <div
                    onClick={handleClick(AlgorithmEnum.MergeSort)}
                    className={
                        (props.currentAlgorithm ===
                            AlgorithmEnum.MergeSort) ?
                            styles['nav-item-active'] : styles['nav-item']}
                >Merge Sort</div>

                <div
                    onClick={handleClick(AlgorithmEnum.QuickSort)}
                    className={
                        (props.currentAlgorithm ===
                            AlgorithmEnum.QuickSort) ?
                            styles['nav-item-active'] : styles['nav-item']}
                >Quick Sort</div>

                <div
                    onClick={handleClick(AlgorithmEnum.BubbleSort)}
                    className={(props.currentAlgorithm ===
                        AlgorithmEnum.BubbleSort) ?
                        styles['nav-item-active'] : styles['nav-item']}
                >Bubble Sort</div>
            </nav>
        </div>
    );
};

export default Header;