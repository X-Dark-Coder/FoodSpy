export type TShoppingCartFoodItem = {
    id: number;
    count: number;
    instructions?: string;
};

export type TShoppingCartState = {
    restaurant: number | null;
    products: TShoppingCartFoodItem[];
    totalPrice: number;
    productsCount: number;
};

export type TAppState = {
    showBottomNavbar : boolean;
};

export type TRootState = {
    cart: TShoppingCartState;
    app: TAppState;
};
