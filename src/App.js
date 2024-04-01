import Fishes from "./components/Fishes";
import CreateFishForm from "./components/createFishForm";
import GlobalStyle from "./data/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Fishes />
      <CreateFishForm />
    </>
  );
}

export default App;
