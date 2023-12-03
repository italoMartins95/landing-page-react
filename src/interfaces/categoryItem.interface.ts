export interface ICategoryItem {
    image: string;
    category: string;
    description: string;
    selected: boolean;
    selectItem(): void;
}