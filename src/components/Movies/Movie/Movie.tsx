import { FC } from "react";
import { MovieWrapper, NoPoster } from "./Movies.styles";

type MovieProps = {
  title: string;
  year: string;
  poster: string;
};

export const MovieComponent: FC<MovieProps> = ({ title, year, poster }) => {
  const isPoster = poster !== "N/A";

  return (
    <MovieWrapper>
      <h3>{title}</h3>
      <p>Year of production: {year}</p>
      {isPoster ? (
        <img src={poster} alt={title} />
      ) : (
        <NoPoster>No Poster Avaible</NoPoster>
      )}
    </MovieWrapper>
  );
};
