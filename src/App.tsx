import { api } from "./config/config";
import { Search } from "./components/Search/Search";
import { GlobalStyles } from "./GlobalStyles";
import { useEffect, useState } from "react";

function App() {
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    const url = api("matrix");
    console.log(url);
    fetch(url)
      .then((result) => result.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <GlobalStyles />
      <div className="App">
        <h1>Movies search App</h1>
        <Search />
      </div>
    </>
  );
}

export default App;
