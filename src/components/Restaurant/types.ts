export type TRestaurant = {
    id: number;
    rate: number;
    name: string;
    categories: string[];
    openAt: string;
    closed?: boolean;
    distance: number;
    picture: any;
};

export type TRestaurantProps = TRestaurant;
