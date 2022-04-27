import React from "react";

type TButtonWide = "wide-primary" | "wide-secondary" | "wide-primary-white" | "wide-secondary-white";
type TButtonMedium1 = "medium-1-primary" | "medium-1-secondary";
type TButtonMedium2 =
  | "medium-2-primary"
  | "medium-2-secondary"
  | "medium-2-link";
type TButtonSmall = "small-primary" | "small-secondary" | "small-white";
type TButtonExtraSmall = "extra-small-primary" | "extra-small-icon";
// type OtherVariant = "circle-icon" | "square";

export type TButtonBaseProps = {
  /** Text for button */
  children?: string;
  fullWidth?: boolean
} & Omit<React.ComponentProps<"button">, "children">;

export type TButtonMainProps = TButtonBaseProps & {
  variant:
    | TButtonWide
    | TButtonMedium1
    | TButtonMedium2
    | TButtonSmall
    | TButtonExtraSmall;
  /** Icon for button */
  icon?: any;
  price?: never;
};

export type TButtonTabProps = TButtonBaseProps & {
  variant: "tab";
  /** Icon for button */
  icon?: never;
  price?: never;
};

export type TButtonPaymentProps = TButtonBaseProps & {
  variant: "payment";
  /** Icon for button */
  icon?: any;
  /** Price for checkout variant */
  price: number;
};

export type TButtonExpandProps = TButtonBaseProps & {
  variant : "expand-small" | "expand-medium";
  icon?: never;
  price?: never;
}

export type TButtonProps = TButtonMainProps | TButtonTabProps | TButtonPaymentProps | TButtonExpandProps;
