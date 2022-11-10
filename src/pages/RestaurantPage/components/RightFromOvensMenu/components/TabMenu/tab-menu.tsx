import TabMenuItem from "./tab-menu-item";
import { TTabMenuProps } from "./types";

const TabMenu: React.FC<TTabMenuProps> = ({ tabs, active, setActive }) => {
    return (
        <ul className="flex justify-start items-center gap-4 overflow-x-scroll pb-3 scrollbar-custom-white px-5">
            {tabs.map(({ name }, index) => (
                <TabMenuItem
                    key={index + 1}
                    name={name}
                    active={active === index + 1}
                    onClick={() => setActive(index + 1)}
                />
            ))}
        </ul>
    );
};

export default TabMenu;
