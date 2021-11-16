import React from "react";

export interface IButton {
    label: string;
    disabled: boolean;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};