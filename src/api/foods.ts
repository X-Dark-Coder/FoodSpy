import { TFood } from "components/Food/types";
import FoodIngredientPic1 from "assets/img/food-ingredient-1.jpg";
import FoodIngredientPic2 from "assets/img/food-ingredient-2.jpg";
import FoodIngredientPic3 from "assets/img/food-ingredient-3.jpg";
import FoodIngredientPic4 from "assets/img/food-ingredient-4.jpg";
import FoodIngredientPic5 from "assets/img/food-ingredient-5.jpg";
import BaconBurgerImage from "assets/img/bacon-burger.jpg";
import BolognaSandwichImage from "assets/img/bologna-sandwich.jpg";
import CheeseburgerImage from "assets/img/cheeseburger.jpg";
import ChickenBurgerImage from "assets/img/chicken-burger.jpg";
import CocacolaImage from "assets/img/cocacola.png";
import PepsiImage from "assets/img/pepsi.jpeg";
import FantaImage from "assets/img/fanta.jpg";
import FrenchPotatosImage from "assets/img/french-potatos.jpg";
import HamburgerImage from "assets/img/hamburger.jpg";
import SaladImage from "assets/img/salad1.png";
import TacoChickenImage from "assets/img/taco-chicken.jpg";
import TacoMeatImage from "assets/img/taco-meat.jpg";
import SaladSezarImage from "assets/img/sala-sezar.png";
import HotdogImage from "assets/img/hotdog.jpg";
import KentacyImage from "assets/img/kentacy.jpeg";
import PizzaPepperoniImage from "assets/img/pizza-pepperoni.jpg";
import PizzaVegterianImage from "assets/img/pizza-vegterian.jpg";
import WaterImage from "assets/img/water.jpg";
import NoodleImage from "assets/img/Noodle.png";
import Salad2Image from "assets/img/Salad.png";
import { shuffleArray } from "./utils";

const ingredients = [
    { id: 0, title: "Food1", picture: FoodIngredientPic1 },
    { id: 1, title: "Food2", picture: FoodIngredientPic2 },
    { id: 2, title: "Food3", picture: FoodIngredientPic3 },
    { id: 3, title: "Food4", picture: FoodIngredientPic4 },
    { id: 4, title: "Food5", picture: FoodIngredientPic5 },
];

export const sandwichMenu: TFood[] = [
    {
        id: 2,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Bologna Sandwich",
        rate: 3.9,
        orderTime: 15,
        price: 18,
        picture: BolognaSandwichImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 1850,
            organic: false,
        },
        ingredients: ingredients,
    },
];
export const humberMenu: TFood[] = [
    {
        id: 1,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Bacon Burger",
        rate: 4.6,
        orderTime: 25,
        price: 30,
        picture: BaconBurgerImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 2400,
            organic: false,
        },
        ingredients: ingredients,
        discount: 20,
    },
    {
        id: 3,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Cheese Burger",
        rate: 4.7,
        orderTime: 30,
        price: 32,
        picture: CheeseburgerImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 2450,
            organic: false,
        },
        ingredients: ingredients,
    },
    {
        id: 4,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Chicken Burger",
        rate: 4.3,
        orderTime: 35,
        price: 29,
        picture: ChickenBurgerImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 1970,
            organic: true,
        },
        ingredients: ingredients,
    },
    {
        id: 12,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Hamburger",
        rate: 4.4,
        orderTime: 35,
        price: 23,
        picture: HamburgerImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 1970,
            organic: true,
        },
        ingredients: ingredients,
    },
];
export const hotdogMenu: TFood[] = [
    {
        id: 11,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Hotdog",
        rate: 4,
        orderTime: 0,
        price: 34,
        picture: HotdogImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 750,
            organic: false,
        },
        ingredients: ingredients,
    },
];
export const drinksMenu: TFood[] = [
    {
        id: 5,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Cocacola",
        rate: 4.9,
        orderTime: 0,
        price: 5,
        picture: CocacolaImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 750,
            organic: false,
        },
        ingredients: [],
    },
    {
        id: 6,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Pepsi",
        rate: 4.8,
        orderTime: 0,
        price: 6,
        picture: PepsiImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 780,
            organic: false,
        },
        ingredients: [],
    },
    {
        id: 7,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Water",
        rate: 5,
        orderTime: 0,
        price: 2,
        picture: WaterImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 300,
            organic: true,
        },
        ingredients: [],
    },
    {
        id: 8,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Fanta",
        rate: 4.8,
        orderTime: 0,
        price: 1.5,
        picture: FantaImage,
        restaurant: 2,
        informations: {
            freeGluten: true,
            kal: 300,
            organic: true,
        },
        ingredients: [],
    },
];
export const tacoMenu: TFood[] = [
    {
        id: 15,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Taco Chicken",
        rate: 4.7,
        orderTime: 15,
        price: 32,
        picture: TacoChickenImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 4400,
            organic: true,
        },
        ingredients: ingredients,
        discount: 30,
    },
    {
        id: 16,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Taco Meat",
        rate: 4.8,
        orderTime: 20,
        price: 36,
        picture: TacoMeatImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 5200,
            organic: true,
        },
        ingredients: ingredients,
        discount: 15,
    },
];
export const friedMenu: TFood[] = [
    {
        id: 13,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "French Potatos",
        rate: 4.3,
        orderTime: 25,
        price: 15,
        picture: FrenchPotatosImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 2400,
            organic: false,
        },
        ingredients: ingredients,
        discount: 28,
    },
    {
        id: 14,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Kentacy",
        rate: 4.6,
        orderTime: 25,
        price: 38,
        picture: KentacyImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 2400,
            organic: false,
        },
        ingredients: ingredients,
        discount: 15,
    },
];

export const pizzaMenu: TFood[] = [
    {
        id: 9,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Pizza Pepperoni",
        rate: 4.3,
        orderTime: 0,
        price: 28,
        picture: PizzaPepperoniImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 750,
            organic: false,
        },
        ingredients: ingredients,
    },
    {
        id: 10,
        description:
            "Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum dolor praesenta the pulvinar tristique the food.",
        name: "Pizza Vegterian",
        rate: 3.9,
        orderTime: 0,
        price: 25,
        picture: PizzaVegterianImage,
        restaurant: 2,
        informations: {
            freeGluten: false,
            kal: 750,
            organic: false,
        },
        ingredients: ingredients,
    },
];

export const fakeFoods: TFood[] = shuffleArray([...friedMenu, ...tacoMenu, ...humberMenu, ...drinksMenu]);
