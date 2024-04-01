import FishCard from "./FishCard";
import { initialFishes } from "../data/fishes";
import styled from "styled-components";

const FishesCont = styled.div`
  display: flex;
  flex-direction: row;
`;

function Fishes() {
  return (
    <FishesCont>
      {initialFishes.map((fish, i) => (
        <FishCard key={i} {...fish} />
      ))}
    </FishesCont>
  );
}

export default Fishes;
