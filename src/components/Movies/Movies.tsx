import { FC } from "react";
import { Movie } from "../../App";
import { MovieComponent } from "./Movie/Movie";
import { MovieWrapper } from "./Movies.styles";

type MoviesProps = {
  result?: Movie[];
  error?: string;
};

export const Movies: FC<MoviesProps> = ({ result, error }) => {
  const isValidType = "movie";

  return (
    <>
      {error ? <h2>{error}</h2> : <h2>Movies List</h2>}
      <MovieWrapper>
        {result?.map((movie) => {
          const { Poster, Title, Year, imdbID, Type } = movie;
          return Type === isValidType ? (
            <MovieComponent
              key={imdbID}
              poster={Poster}
              title={Title}
              year={Year}
            />
          ) : null;
        })}
      </MovieWrapper>
    </>
  );
};
