export interface IItemShopping {
    id: number;
    name: string;
    image: string;
    qtd: number;
    plus(itemId: number): void;
    minus(itemId: number): void;
    remove(itemId: number): void;
}