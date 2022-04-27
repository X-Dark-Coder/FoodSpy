export type TTabs = "restaurant" | "food";

export type TResultTabsProps = {
    activeTab: TTabs;
    setActiveTab: (tab: TTabs) => void;
    disable?: boolean;
};
