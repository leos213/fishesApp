import React, { useReducer } from "react";
import { useLoaderData, useNavigate, Outlet } from "react-router-dom";
import FishCard from "../FishCard/FishCard";
import "./FishesWrapper.css";
import { getFishs } from "../../services/fishesApi";
import fishesReducer from "./fishesReducer";

export async function fishLoader() {
  const fishes = await getFishs();
  // console.log(fishes);
  return fishes;
}

const FishesWrapper = () => {
  const navigate = useNavigate();
  const fishes = useLoaderData();
  const [fishState, dispatchFish] = useReducer(fishesReducer, {
    fishList: fishes,
    loading: false,
  });

  return (
    <div className="fishes-wrapper">
      {fishState.loading && <div>Loading...</div>}
      <button onClick={() => navigate("/fishes/create")}>Create Fish</button>
      <Outlet context={{ dispatchFish }} />
      <div className="fishes-container">
        {fishState.fishList.map((fish) => {
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
