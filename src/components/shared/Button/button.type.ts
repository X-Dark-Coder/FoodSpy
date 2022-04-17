import React from "react";

type ButtonWide = "wide-primary" | "wide-secondary" | "wide-primary-white" | "wide-secondary-white";
type ButtonMedium1 = "medium-1-primary" | "medium-1-secondary";
type ButtonMedium2 =
  | "medium-2-primary"
  | "medium-2-secondary"
  | "medium-2-link";
type ButtonSmall = "small-primary" | "small-secondary" | "small-white";
type ButtonExtraSmall = "extra-small-primary" | "extra-small-icon";
// type OtherVariant = "circle-icon" | "square";

export type ButtonBaseProps = {
  /** Text for button */
  children?: string;
  fullWidth?: boolean
} & Omit<React.ComponentProps<"button">, "children">;

export type ButtonMainProps = ButtonBaseProps & {
  variant:
    | ButtonWide
    | ButtonMedium1
    | ButtonMedium2
    | ButtonSmall
    | ButtonExtraSmall;
  /** Icon for button */
  icon?: any;
  price?: never;
};

export type ButtonTabProps = ButtonBaseProps & {
  variant: "tab";
  /** Icon for button */
  icon?: never;
  price?: never;
};

export type ButtonPaymentProps = ButtonBaseProps & {
  variant: "payment";
  /** Icon for button */
  icon?: any;
  /** Price for checkout variant */
  price: number;
};

export type ButtonExpandProps = ButtonBaseProps & {
  variant : "expand-small" | "expand-medium";
  icon?: never;
  price?: never;
}

export type ButtonProps = ButtonMainProps | ButtonTabProps | ButtonPaymentProps | ButtonExpandProps;
