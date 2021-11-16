import React from "react";

export interface IRangeSlider {
    min: number;
    max: number;
    disabled: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};