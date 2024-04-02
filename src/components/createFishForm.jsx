import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 50px;
  background-color: green;
  color: white;
  cursor: pointer;
  margin: 20px 20px;
  border-radius: 20px;
`;

const FormItem = styled.form`
  display: ${(props) => (props.visible ? "flex" : "none")};
  flex-direction: column;
  align-items: end;
  width: 400px;
  margin: 50px auto;
`;

const InputItem = styled.input`
  margin-left: 80px;
`;

const LabelItem = styled.label`
  margin-left: 30px;
`;

const CreateFishForm = ({ onFishSubmit }) => {
  const [fishData, setFishData] = useState({
    name: "",
    region: "",
    scientificName: "",
    info: "",
    illustrationPhoto: "",
  });

  const [formVisible, setFormVisible] = useState(false);
  const [filledInputs, setFilledInputs] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFishData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setFilledInputs((prevCount) => prevCount + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (filledInputs === 4) {
      onFishSubmit(fishData);
      setFishData({
        name: "",
        region: "",
        scientificName: "",
        info: "",
        illustrationPhoto: "",
      });
      setFilledInputs(0);
    } else {
      console.log("Form is incomplete");
    }
  };

  const toggleFormVisibility = () => {
    setFormVisible(!formVisible);
  };

  return (
    <>
      <Button onClick={toggleFormVisibility}>Create Fish</Button>
      <FormItem visible={formVisible} onSubmit={handleSubmit}>
        <LabelItem>
          Name:
          <InputItem
            type="text"
            name="name"
            value={fishData.name}
            onChange={handleChange}
          />
        </LabelItem>
        <LabelItem>
          Region:
          <InputItem
            type="text"
            name="region"
            value={fishData.region}
            onChange={handleChange}
          />
        </LabelItem>
        <LabelItem>
          Scientific Name:
          <InputItem
            type="text"
            name="scientificName"
            value={fishData.scientificName}
            onChange={handleChange}
          />
        </LabelItem>
        <LabelItem>
          Info:
          <InputItem
            type="text"
            name="info"
            value={fishData.info}
            onChange={handleChange}
          />
        </LabelItem>
        <LabelItem>
          Illustration Photo:
          <InputItem
            type="text"
            name="illustrationPhoto"
            value={fishData.illustrationPhoto}
            onChange={handleChange}
          />
        </LabelItem>
        <Button type="submit">Create Fish</Button>
      </FormItem>
    </>
  );
};

export default CreateFishForm;
