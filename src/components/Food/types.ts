export type TFood = {
    id: number;
    discount?: number;
    price: number;
    name: string;
    rate: number;
    orderTime: number;
    picture: string;
    restaurant: number;
};

export type TFoodProps = { fullWidth?: boolean; onClick?: () => void; variant?: "column" | "row" } & TFood;
