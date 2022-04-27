import RestaurantImage from "assets/img/restaurant1.jpg";
import FoodImage1 from "assets/img/food-card-image-1.png";
import FoodImage2 from "assets/img/food-card-image-2.png";
import { TRestaurant } from "components/Restaurant/types";
import { TFood } from "components/Food/types";
import { Variants } from "framer-motion";

export const foods : TFood[] = [
    {
        id: 0,
        name: "Salmon & Leek Dumplings",
        price: 26,
        discount: 30,
        rate: 4,
        orderTime: 45,
        picture: FoodImage1,
    },
    {
        id: 1,
        name: "Salmon & Leek Dumplings",
        price: 30,
        rate: 4.8,
        orderTime: 25,
        picture: FoodImage2,
    },
    {
        id: 2,
        name: "Salmon & Leek Dumplings",
        price: 42,
        discount: 45,
        rate: 3.9,
        orderTime: 28,
        picture: FoodImage1,
    },
    {
        id: 3,
        name: "Salmon & Leek Dumplings",
        price: 26,
        discount: 30,
        rate: 4,
        orderTime: 45,
        picture: FoodImage2,
    },
    {
        id: 4,
        name: "Salmon & Leek Dumplings",
        price: 30,
        rate: 4.8,
        orderTime: 25,
        picture: FoodImage2,
    },
    {
        id: 5,
        name: "Salmon & Leek Dumplings",
        price: 42,
        discount: 45,
        rate: 3.9,
        orderTime: 28,
        picture: FoodImage1,
    },
    {
        id: 6,
        name: "Salmon & Leek Dumplings",
        price: 26,
        discount: 30,
        rate: 4,
        orderTime: 45,
        picture: FoodImage1,
    },
    {
        id: 7,
        name: "Salmon & Leek Dumplings",
        price: 30,
        rate: 4.8,
        orderTime: 25,
        picture: FoodImage2,
    },
    {
        id: 8,
        name: "Salmon & Leek Dumplings",
        price: 42,
        discount: 45,
        rate: 3.9,
        orderTime: 28,
        picture: FoodImage1,
    },
];

export const restaurants : TRestaurant[] = [
    {
        id: 0,
        name: "Fast Food X",
        categories: ["Cake", "Bread"],
        distance: 1.8,
        openAt: "10:00 AM",
        rate: 4.3,
        picture: RestaurantImage,
        closed: false,
    },
    {
        id: 1,
        name: "Fast Food X",
        categories: ["Cake", "Bread"],
        distance: 1.8,
        openAt: "10:00 AM",
        rate: 4.3,
        picture: RestaurantImage,
        closed: true,
    },
    {
        id: 2,
        name: "Fast Food X",
        categories: ["Cake", "Bread"],
        distance: 1.8,
        openAt: "10:00 AM",
        rate: 4.3,
        picture: RestaurantImage,
        closed: true,
    },
    {
        id: 3,
        name: "Fast Food X",
        categories: ["Cake", "Bread"],
        distance: 1.8,
        openAt: "10:00 AM",
        rate: 4.3,
        picture: RestaurantImage,
        closed: false,
    },
    {
        id: 4,
        name: "Fast Food X",
        categories: ["Cake", "Bread"],
        distance: 1.8,
        openAt: "10:00 AM",
        rate: 4.3,
        picture: RestaurantImage,
        closed: false,
    },
];

/**
 *  Framer motion variants
 */

export const searchSectionsVariants: Variants = {
    hide: {
        opacity: 0,
        x: -20,
        transition: {
            duration: 0.15,
            opacity: {
                duration: 0.1,
            },
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            type: "spring",
        },
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.15,
            opacity: {
                duration: 0.1,
            },
        },
    },
};

export const searchResultVariants: Variants = {
    hide: {
        opacity: 0,
        y: 5,
        scale: 0.98,
        transition: {
            duration: 0.15,
            opacity: {
                duration: 0.1,
            },
        },
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.25,
            type: "spring",
        },
    },
};