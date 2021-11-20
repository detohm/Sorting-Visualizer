import React from "react";

export interface IRangeSlider {
    className?: string;
    min: number;
    max: number;
    disabled: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};