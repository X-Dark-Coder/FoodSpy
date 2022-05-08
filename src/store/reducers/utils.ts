export const calculateDiscount = (price: number, discount: number = 0) => {
    return Math.round((price / 100) * discount);
};
