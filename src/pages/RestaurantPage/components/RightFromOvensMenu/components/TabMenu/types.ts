export type TTabMenuItem = { id: number; name: string; active?: boolean };

export type TTabMenuItemProps = { onClick: () => void } & Omit<TTabMenuItem, "id">;

export type TTabMenuProps = {
    tabs: TTabMenuItem[];
    active: number;
    setActive: (id: number) => void;
};
