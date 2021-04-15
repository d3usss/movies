import { useEffect, useState } from "react";
import { api } from "./config/config";
import { Search } from "./components/Search/Search";
import { GlobalStyles } from "./GlobalStyles";
import { Movies } from "./components/Movies/Movies";

export type Movie = {
  Poster: string;
  Title: string;
  Type: string;
  imdbID: string;
  Year: string;
};

type Data = {
  Response: string;
  totalResult: string;
  Search: Movie[];
  Error?: string;
};

function App() {
  const [title, setTitle] = useState<string>("");
  const [result, setResult] = useState<Movie[]>([]);
  const [error, setError] = useState<string | undefined>("");

  const onSearchMovie = (title: string) => {
    setTitle(title);
  };

  useEffect(() => {
    const url = api(title);

    if (!title.length) return;

    setResult([]);
    setError("");

    try {
      fetch(url)
        .then((result: Response) => result.json())
        .then((data: Data) => {
          data.Search ? setResult(data.Search) : setError(data.Error);
        });
    } catch (error) {
      console.log(error);
    }
  }, [title]);

  return (
    <main>
      <GlobalStyles />
      <div className="App">
        <h1>Movies search App</h1>
        <Search onSearchMovie={onSearchMovie} />
        {result.length || error?.length ? (
          <Movies result={result} error={error} />
        ) : null}
      </div>
    </main>
  );
}

export default App;
