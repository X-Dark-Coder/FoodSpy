import { TModalProps } from "../Modal/types";

export type TAlertModalProps = {
    picture: any;
    title: string;
    description: string;
    onButtonClick?: () => void;
    buttonText?: string;
} & Omit<TModalProps, "children">;
