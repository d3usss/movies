import { FC } from "react";
import { ButtonComponent, ButtonTypes, ButtonColors } from "../Button/Button";
import { InputComponent, InputType, InputSize } from "../Input/Input";
import { FormComponent } from "./Search.styles";

export const Search: FC = () => {
  const SEARCH_LABEL = "Please text movie title";
  const SEARCH_BUTTON = "Search";
  return (
    <FormComponent>
      <InputComponent
        type={InputType.SEARCH}
        sizes={InputSize.LARGE}
        label={SEARCH_LABEL}
        id="search"
        name="search"
      />
      <ButtonComponent
        buttonType={ButtonTypes.BUTTON}
        color={ButtonColors.PRIMARY}
      >
        {SEARCH_BUTTON}
      </ButtonComponent>
    </FormComponent>
  );
};
