import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 200px;
  height: 50px;
  background-color: #0e8a8a;
  font-size: 20px;
  font-weight: 600;
  color: white;
  border-radius: 20px;
  margin-top: 50px;
  cursor: pointer;
`;

const ImgItem = styled.img`
  width: 300px;
  height: 100px;
`;

const Home = () => {
  const [fishes, setFishes] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:9000/fishes");
      const data = await response.json();
      setFishes(data);
      setIsShowing(true); // Show fishes after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setIsLoading(false);
  };

  const toggleVisibility = () => {
    setIsShowing((prevIsShowing) => !prevIsShowing); // Toggle visibility
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Welcome to Fishes App 🐠</h1>
      <Button
        onClick={isShowing ? toggleVisibility : fetchData}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : isShowing ? "Hide Fishes" : "Fetch Fishes"}
      </Button>
      {isShowing && (
        <div>
          {fishes.length > 0 ? (
            fishes.map((fish) => (
              <div key={fish.id}>
                <h2>{fish.name}</h2>
                <p>Region: {fish.region}</p>
                <p>Scientific Name: {fish.scientificName}</p>
                <ImgItem
                  src={fish.illustrationPhoto.src}
                  alt={fish.illustrationPhoto.alt}
                />
                {/* Add other fish details as needed */}
              </div>
            ))
          ) : (
            <p>No fish data available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
