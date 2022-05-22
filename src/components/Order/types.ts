import { TShoppingCartFoodItem } from "store/types";

export type TOrder = {
    id: number;
    payment: number;
    products: TShoppingCartFoodItem[];
    date: Date;
    restaurant: number;
};

export type TOrderProps = TOrder;
