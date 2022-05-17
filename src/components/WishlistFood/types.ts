export type TWishlistFood = {
    id: number;
    picture: string;
    price: number;
    discount?: number;
    name: string;
    restaurant: number;
};

export type TWishlistFoodProps = { fullWidth?: boolean } & TWishlistFood;
