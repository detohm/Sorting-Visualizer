import React, { useState } from "react";
import { IRangeSlider } from "./RangeSlider.interface";

const RangeSlider = (props: IRangeSlider) => {
    const [value, setValue] = useState("20");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValue(e.target.value);
        if (props.onChange) {
            props.onChange(e);
        }
    };

    return (
        <input type="range"
            className={props.className}
            min={props.min}
            max={props.max}
            value={value}
            disabled={props.disabled}
            onChange={handleChange} />
    );
};

export default RangeSlider;