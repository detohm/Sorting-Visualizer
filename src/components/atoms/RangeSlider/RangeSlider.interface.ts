import React from "react";

export interface IRangeSlider {
    min: number;
    max: number;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};