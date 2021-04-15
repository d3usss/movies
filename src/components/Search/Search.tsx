import { FC, FormEvent } from "react";
import { ButtonComponent, ButtonTypes, ButtonColors } from "../Button/Button";
import { InputComponent, InputType, InputSize } from "../Input/Input";
import { FormComponent } from "./Search.styles";

type SearchProps = {
  onSearchMovie(title: string): void;
};

export const Search: FC<SearchProps> = ({ onSearchMovie }) => {
  const SEARCH_LABEL = "Please text movie title";
  const SEARCH_BUTTON = "Search";

  const searchForMovie = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const { value } = event.currentTarget.search;
    onSearchMovie(value);
  };
  return (
    <FormComponent onSubmit={searchForMovie}>
      <InputComponent
        type={InputType.SEARCH}
        sizes={InputSize.LARGE}
        label={SEARCH_LABEL}
        id="search"
        name="search"
      />
      <ButtonComponent
        buttonType={ButtonTypes.SUBMIT}
        color={ButtonColors.PRIMARY}
      >
        {SEARCH_BUTTON}
      </ButtonComponent>
    </FormComponent>
  );
};
