import { TFood } from "components/Food/types";

export type TTabMenuItem = { id: number; name: string; active?: boolean };

export type TTabMenuItemProps = { onClick: () => void } & Omit<TTabMenuItem, "id" | "foods">;

export type TTabMenuProps = {
    tabs: TTabMenuItem[];
    active: number;
    setActive: (id: number) => void;
};
