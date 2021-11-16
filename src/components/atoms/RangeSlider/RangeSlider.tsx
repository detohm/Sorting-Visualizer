import React, { useState } from "react";
import { IRangeSlider } from "./RangeSlider.interface";

const RangeSlider = (props: IRangeSlider) => {
    const [value, setValue] = useState("50");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.target.value);
        if (props.onChange) {
            props.onChange(e);
        }
    };


    return (
        <input type="range"
            min={props.min}
            max={props.max}
            value={value}
            onChange={handleChange} />
    );
};

export default RangeSlider;