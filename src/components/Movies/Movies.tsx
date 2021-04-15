import { FC } from "react";
import { Movie } from "../../App";

type MoviesProps = {
  result?: Movie[];
  error?: string;
};

export const Movies: FC<MoviesProps> = ({ result, error }) => {
  return <>{error ? <h2>{error}</h2> : <h2>Movies List</h2>}</>;
};
