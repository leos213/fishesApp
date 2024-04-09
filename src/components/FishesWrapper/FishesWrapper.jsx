import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import FishCard from "../FishCard/FishCard";
import "./FishesWrapper.css";
import Modal from "../Modal/Modal";
import CreateFishForm from "../CreateFishForm/CreateFishForm";
import { getFishs } from "../../services/fishesApi";

export async function fishLoader() {
  const fishes = await getFishs();
  console.log(fishes);
  return fishes;
}

const FishesWrapper = () => {
  const fishes = useLoaderData();

  const [createFish, setCreateFish] = useState(false);
  // useState-ში რომ მივანიჭო fishes იქრაშება
  const [fishList, setFishList] = useState([]);

  const handleFishSubmit = (fish) => {
    if (fish) {
      setFishList((prevFish) => {
        return [...prevFish, fish];
      });
      setCreateFish(false);
    }
  };

  return (
    <div className="fishes-wrapper">
      <button onClick={() => setCreateFish(true)}>Create Fish</button>
      {createFish && (
        <Modal onClose={() => setCreateFish(false)}>
          <CreateFishForm onFishSubmit={handleFishSubmit} />
        </Modal>
      )}
      <div className="fishes-container">
        {fishList.map((fish) => {
          return (
            <FishCard
              key={fish.name}
              name={fish.name}
              region={fish.region}
              scientificName={fish.scientificName}
              img={fish.illustrationPhoto}
              info={fish.info}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FishesWrapper;
