export type TFood = {
    id: number;
    variant?: "column" | "row",
    discount?: number;
    price: number;
    name : string;
    rate: number;
    orderTime : number;
    picture : string;
    fullWidth ?: boolean;
    onClick?: () => void
};

export type TFoodProps = Omit<TFood,"id">;
