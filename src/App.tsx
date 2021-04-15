import { Search } from "./components/Search/Search";
import { GlobalStyles } from "./GlobalStyles";

function App() {
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
