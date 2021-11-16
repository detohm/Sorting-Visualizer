import React from "react";

export interface IHeader {
    isRunning: boolean;
    onNumChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onStartButtonClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};