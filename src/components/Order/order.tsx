import { TOrderProps } from "./types";
import { ReactComponent as SuccessIcon } from "assets/icons/Order Success.svg";
import RestaurantImage from "assets/img/restaurant2.jpg";
import { fakeRestaurants } from "api/restaurants";
import { fakeFoods } from "api/foods";

const Order: React.FC<TOrderProps> = ({ date, products, restaurant, payment }) => {
    const parsedDate = new Date(date);

    const restaurantDetails = fakeRestaurants.find(res => res.id === restaurant)!;

    const getMonthName = () => {
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return monthNames[parsedDate.getMonth()];
    };

    const calculateItemsCount = () => {
        const productsCount = products.map(product => product.count);
        return productsCount.reduce((old, current) => old + current, 0);
    };

    const showOrderProductsList = () => {
        const productsIds = products.map(product => product.id);
        const productsList = productsIds.map(productId => fakeFoods.find(food => food.id === productId)!);
        return productsList.map(product => product.name).join(", ");
    };

    return (
        <div className="w-full bg-white shadow-main flex justify-start items-start flex-col rounded-md">
            <div className="flex center items-center gap-2 w-full p-3 border-b border-mono-sky-lighter">
                <div className="w-[56px] h-[56px] rounded-md relative">
                    <img
                        src={restaurantDetails.picture}
                        alt="restaurant"
                        className="w-full h-full rounded-md absolute object-cover"
                    />
                </div>
                <div className="flex justify-start items-start flex-col w-[calc(100%_-_56px)]">
                    <span className="text-mono-ink-lighter text-[10px] self-end">
                        {parsedDate.getDate()} {getMonthName()} {parsedDate.getFullYear()}
                    </span>
                    <h3 className="text-mono-ink text-medium font-semibold">{restaurantDetails.name}</h3>
                    <div className="text-mono-ink-light text-[10px] mt-1 whitespace-nowrap overflow-hidden overflow-ellipsis w-full">
                        {showOrderProductsList()}
                    </div>
                </div>
            </div>
            <div className="h-full py-[10px] px-3 flex justify-between items-center w-full">
                <div className="flex justify-start items-center gap-3 h-full">
                    <SuccessIcon className="w-[32px] h-[32px]" />
                    <div className="flex justify-start items-start flex-col gap-[2px]">
                        <span className="text-mono-ink-light text-[10px]">Order Status</span>
                        <span className="text-primary text-[11px] font-semibold">Completed</span>
                    </div>
                </div>
                <div className="flex justify-start items-start flex-col gap-1">
                    <span className="text-mono-ink-light text-[10px] mt-1">Total Order</span>
                    <div>
                        <span className="text-mono-ink text-small-14 font-semibold">${payment}</span>
                        <span
                            className="text-mono-ink-light text-[10px] mt-1 ml-1">({calculateItemsCount()} items)</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Order;
