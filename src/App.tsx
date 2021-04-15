import { api } from "./config/config";
import { Search } from "./components/Search/Search";
import { GlobalStyles } from "./GlobalStyles";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState<string>("");
  const onSearchMovie = (title: string) => {
    setTitle(title);
  };

  useEffect(() => {
    const url = api(title);

    if (title.length) {
      fetch(url)
        .then((result) => result.json())
        .then((data) => console.log(data));
    }
  }, [title]);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <h1>Movies search App</h1>
        <Search onSearchMovie={onSearchMovie} />
      </div>
    </>
  );
}

export default App;
