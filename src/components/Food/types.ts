export type TFoodIngredient = {
    title: string;
    picture: string;
};

export type TFoodInformations = {
    freeGluten: boolean;
    organic: boolean;
    kal: number;
};

export type TFood = {
    id: number;
    discount?: number;
    description: string;
    price: number;
    name: string;
    rate: number;
    orderTime: number;
    picture: string;
    restaurant: number[];
    ingredients: TFoodIngredient[];
    informations: TFoodInformations;
};

export type TFoodProps = {
    fullWidth?: boolean;
    onClick?: () => void;
    variant?: "column" | "row";
    navigateTo?: string;
} & Omit<TFood, "ingredients" | "informations" | "description">;
