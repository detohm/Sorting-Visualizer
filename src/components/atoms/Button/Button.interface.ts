import React from "react";

export interface IButton {
    label: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};