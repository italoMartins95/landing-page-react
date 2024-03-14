import { ReactNode } from "react";

export interface IButton {
    text: string;
    style: string;
    children?: ReactNode;
    handleClick(): void;
}