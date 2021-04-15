import { FC } from "react";
import { InputStyled, LabelStyled } from "./Input.styles";

export enum InputType {
  SEARCH = "search",
  TEXT = "text",
}

export enum InputSize {
  MEDIUM = "200px",
  LARGE = "400px",
}

export type InputProps = {
  type: InputType;
  id: string;
  name: string;
  sizes: InputSize;
  label?: string;
};

export const InputComponent: FC<InputProps> = ({
  type,
  name,
  id,
  sizes,
  label,
}: InputProps) => {
  return (
    <>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled type={type} id={id} name={name} sizes={sizes} />
    </>
  );
};
