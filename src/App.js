import { useState } from "react";
import Fishes from "./components/Fishes";
import CreateFishForm from "./components/createFishForm";
import GlobalStyle from "./data/GlobalStyles";

function App() {
  const [fishData, setFishData] = useState([]);

  const handleFishSubmit = (newFishData) => {
    setFishData([...fishData, newFishData]);
  };

  return (
    <>
      <GlobalStyle />
      <Fishes fishData={fishData} />
      <CreateFishForm onFishSubmit={handleFishSubmit} />
    </>
  );
}
/* დსაკლდასკლდასლკჰდლაკსდლკაჯლაკსდჯდლასკჯდ */
export default App;
