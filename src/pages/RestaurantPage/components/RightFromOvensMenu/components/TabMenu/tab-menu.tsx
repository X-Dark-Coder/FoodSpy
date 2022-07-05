import TabMenuItem from "./tab-menu-item";
import { TTabMenuProps } from "./types";

const TabMenu: React.FC<TTabMenuProps> = ({ tabs, active, setActive }) => {
    return (
        <ul className="flex justify-start items-center gap-4 overflow-x-scroll pb-3 scrollbar-custom-white px-5">
            {tabs.map(({ id, name }) => {
                return <TabMenuItem key={id} name={name} active={active === id} onClick={() => setActive(id)} />;
            })}
        </ul>
    );
};

export default TabMenu;
