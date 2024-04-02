// FishCard.js
import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  border: 1px solid black;
  width: 400px;
`;

const ImgStyle = styled.img`
  width: 200px;
  height: 100px;
`;

const FishCard = ({
  name,
  region,
  scientificName,
  illustrationPhoto,
  info,
}) => {
  return (
    <GridContainer>
      <div>
        <ImgStyle
          src={illustrationPhoto.src}
          alt={illustrationPhoto.alt}
          title={illustrationPhoto.title}
        />
        <h2>{name}</h2>
        <p>Region: {region}</p>
        <p>Scientific Name: {scientificName}</p>
        <p>Info: {info}</p>
      </div>
    </GridContainer>
  );
};

export default FishCard;
