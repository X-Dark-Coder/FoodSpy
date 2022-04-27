export type TFoodType = {
    id: number;
    icon: any;
    text: string;
    active?: boolean;
};

export type TFoodTypeProps = { onClick: () => void } & Omit<TFoodType, "id">;
