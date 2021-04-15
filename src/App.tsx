import { API } from "./config/config";
import { Search } from "./components/Search/Search";
import { GlobalStyles } from "./GlobalStyles";

function App() {
  console.log(API);
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
