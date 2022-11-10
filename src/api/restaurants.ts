import RestaurantImage1 from "assets/img/restaurants/stove-restaurant.jpg";
import RestaurantImage2 from "assets/img/restaurants/gril-restaurant.jpg";
import RestaurantImage3 from "assets/img/restaurants/vegan-restaurant.jpg";
import RestaurantImage4 from "assets/img/restaurants/escape-restaurant.jpg";
import RestaurantImage5 from "assets/img/restaurants/kitchen-restaurant.jpg";
import { TRestaurant } from "components/Restaurant/types";
import { drinksMenu, fakeFoods, friedMenu, humberMenu, tacoMenu } from "./foods";
import { shuffleArray } from "./utils";

const menuTitles = ["Breakfast", "Lunch", "Beverage", "Fast Food", "Dinner", "Dessert"];

export const fakeRestaurants: TRestaurant[] = [
    {
        id: 1,
        name: "Munch Grill",
        rate: 4.5,
        picture: RestaurantImage2,
        distance: 0.8,
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
        name: "Sweet Escape",
        rate: 4.8,
        picture: RestaurantImage4,
        distance: 1,
        closed: false,
        openAt: "8.00 AM",
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
        name: "Veganic Corner",
        rate: 4,
        picture: RestaurantImage3,
        distance: 1.1,
        closed: false,
        openAt: "8.00 AM",
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
        name: "Freddy’s Stove",
        rate: 2.5,
        picture: RestaurantImage1,
        distance: 2,
        closed: false,
        openAt: "9.00 AM",
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
        name: "Paterro’s Kitchen",
        rate: 3.5,
        picture: RestaurantImage5,
        distance: 2.4,
        closed: false,
        openAt: "8.30 AM",
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
