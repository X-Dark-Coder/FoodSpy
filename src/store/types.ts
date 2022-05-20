import { THistoryItem } from "pages/SearchPage/components/SearchHistory/types";

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
    discount: number;
};

export type TAppState = {
    showBottomNavbar: boolean;
};

type TUpdate = {
    type: "Order" | "Topup";
    title: string;
    description: string;
    date: string;
};

export type TUserState = {
    account: {
        name: string;
        email: string;
        phone: string;
    } | null;
    walletCredit: number;
    wishlist: number[];
    updates?: TUpdate[];
    searchHistory: THistoryItem[];
    orderHistory?: any[];
};

export type TRootState = {
    cart: TShoppingCartState;
    app: TAppState;
    user: TUserState;
};
