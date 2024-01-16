export interface IButton {
    text: string;
    style: string;
    icon?: boolean
    handleClick(): void;
}