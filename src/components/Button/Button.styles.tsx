import styled from "styled-components";
import { ButtonProps, ButtonColors } from "./Button";

export const ButtonStyled = styled.button<ButtonProps>`
  background-color: ${(props) =>
    props.color === ButtonColors.PRIMARY
      ? ButtonColors.PRIMARY
      : ButtonColors.SECONDARY};
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  height: 50px;
  vertical-align: top;
  border: 1px solid darken(white, 30%);
`;
