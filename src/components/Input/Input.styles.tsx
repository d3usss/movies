import styled from "styled-components";
import { InputProps, InputSize } from "./Input";

export const InputStyled = styled.input<InputProps>`
  padding: 0 30px;
  font-size: 18px;
  width: 60%;
  max-width: 400px;
  width: ${(props) =>
    props.sizes === InputSize.MEDIUM ? InputSize.MEDIUM : InputSize.LARGE};
  height: 50px;
  border: 1px solid darken(white, 30%);
  outline: none;
`;

export const LabelStyled = styled.label`
  padding: 10px;
  margin: 10px 0;
  display: inline-block;
`;
