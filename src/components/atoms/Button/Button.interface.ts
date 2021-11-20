import React from "react";

export interface IButton {
    className?: string;
    label: string;
    disabled: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};