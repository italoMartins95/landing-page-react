import { ReactNode } from "react";

export interface IInput{
    type: string;
    placeholder: string;
    children?: ReactNode
    handleOnChange(value: string): void;
}