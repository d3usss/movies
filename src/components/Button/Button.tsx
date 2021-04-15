import { FC, ReactChild } from "react";
import { ButtonStyled } from "./Button.styles";

export enum ButtonColors {
  PRIMARY = "#008CBA",
  SECONDARY = "#4caf50",
}

export enum ButtonTypes {
  SUBMIT = "submit",
  BUTTON = "button",
}

export type ButtonProps = {
  color: ButtonColors;
  buttonType?: ButtonTypes | null;
  children: ReactChild;
};

export const ButtonComponent: FC<ButtonProps> = ({
  color,
  buttonType,
  children,
}: ButtonProps) => (
  <ButtonStyled
    color={color}
    type={
      buttonType === ButtonTypes.SUBMIT
        ? ButtonTypes.SUBMIT
        : ButtonTypes.BUTTON
    }
  >
    {children}
  </ButtonStyled>
);
