import { TFood } from "components/Food/types";

type TMenu = {
    title: string;
    foods: TFood[];
};

export type TRestaurant = {
    id: number;
    rate: number;
    name: string;
    categories: string[];
    openAt: string;
    closed?: boolean;
    distance: number;
    picture: any;
    popularFoods: TFood[];
    menu: TMenu[];
    fullWidth?: boolean;
};

export type TRestaurantProps = Omit<TRestaurant, "popularFoods" | "menu">;
