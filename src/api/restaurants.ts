import RestaurantImage from "assets/img/restaurant1.jpg";
import { TRestaurant } from "components/Restaurant/types";
import { drinksMenu, fakeFoods, friedMenu, humberMenu, tacoMenu } from "./foods";
import { shuffleArray } from "./utils";

const menuTitles = ["Breakfast", "Lunch", "Beverage", "Fast Food", "Dinner", "Dessert"];

export const fakeRestaurants: TRestaurant[] = [
    {
        id: 1,
        name: "Some Restaurant",
        rate: 3,
        picture: RestaurantImage,
        distance: 1.6,
        closed: false,
        openAt: "10.00 AM",
        categories: ["Bread", "Cake"],
        menu: [
            {
                foods: friedMenu,
                title: "Fried",
            },
            {
                foods: tacoMenu,
                title: "Taco",
            },
            {
                foods: humberMenu,
                title: "Humber",
            },
            {
                foods: drinksMenu,
                title: "Drinks",
            },
        ],
        popularFoods: shuffleArray(fakeFoods).slice(0, 10),
    },
    {
        id: 2,
        name: "Some Restaurant 1",
        rate: 3,
        picture: RestaurantImage,
        distance: 1.6,
        closed: false,
        openAt: "10.00 AM",
        categories: ["Bread", "Cake"],
        menu: [
            {
                foods: friedMenu,
                title: "Fried",
            },
            {
                foods: tacoMenu,
                title: "Taco",
            },
            {
                foods: humberMenu,
                title: "Humber",
            },
            {
                foods: drinksMenu,
                title: "Drinks",
            },
        ],
        popularFoods: shuffleArray(fakeFoods).slice(0, 10),
    },
    {
        id: 3,
        name: "Some Restaurant 2",
        rate: 3,
        picture: RestaurantImage,
        distance: 1.6,
        closed: false,
        openAt: "10.00 AM",
        categories: ["Bread", "Cake"],
        menu: [
            {
                foods: friedMenu,
                title: "Fried",
            },
            {
                foods: tacoMenu,
                title: "Taco",
            },
            {
                foods: humberMenu,
                title: "Humber",
            },
            {
                foods: drinksMenu,
                title: "Drinks",
            },
        ],
        popularFoods: shuffleArray(fakeFoods).slice(0, 10),
    },
    {
        id: 4,
        name: "Some Restaurant 3",
        rate: 3,
        picture: RestaurantImage,
        distance: 1.6,
        closed: false,
        openAt: "10.00 AM",
        categories: ["Bread", "Cake"],
        menu: [
            {
                foods: friedMenu,
                title: "Fried",
            },
            {
                foods: tacoMenu,
                title: "Taco",
            },
            {
                foods: humberMenu,
                title: "Humber",
            },
            {
                foods: drinksMenu,
                title: "Drinks",
            },
        ],
        popularFoods: shuffleArray(fakeFoods).slice(0, 10),
    },
    {
        id: 5,
        name: "Some Restaurant 4",
        rate: 3,
        picture: RestaurantImage,
        distance: 1.6,
        closed: false,
        openAt: "10.00 AM",
        categories: ["Bread", "Cake"],
        menu: [
            {
                foods: friedMenu,
                title: "Fried",
            },
            {
                foods: tacoMenu,
                title: "Taco",
            },
            {
                foods: humberMenu,
                title: "Humber",
            },
            {
                foods: drinksMenu,
                title: "Drinks",
            },
        ],
        popularFoods: shuffleArray(fakeFoods).slice(0, 10),
    },
];
