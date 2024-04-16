import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate, useOutletContext } from "react-router-dom";
import { createFish } from "../../services/fishesApi";

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

const CreateFishForm = () => {
  const navigate = useNavigate();
  const { dispatchFish } = useOutletContext();

  const colorInputRef = useRef(null);

  useEffect(() => {
    colorInputRef.current.focus();
  }, []);
  const [fishForm, setFishForm] = useState({
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

    setFishForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (value.trim() !== "") {
      setFilledInputs((prevCount) => prevCount + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatchFish({ type: "LOADING", payload: true });

    if (filledInputs === 4) {
      try {
        const newFish = await createFish(fishForm);
        dispatchFish({ type: "ADD_CAR", payload: newFish });
        dispatchFish({ type: "LOADING", payload: false });

        navigate("/cars");
      } catch (error) {
        console.error("Failed to create car", error);
        dispatchFish({ type: "LOADING", payload: false });
      }

      setFishForm({
        name: "",
        region: "",
        scientificName: "",
        info: "",
        illustrationPhoto: "",
      });
      dispatchFish({ type: "LOADING" });
      setFilledInputs(0);
    } else {
      dispatchFish({ type: "LOADING", payload: false });
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
            value={fishForm.name}
            onChange={handleChange}
          />
        </LabelItem>
        <LabelItem>
          Region:
          <InputItem
            type="text"
            name="region"
            value={fishForm.region}
            onChange={handleChange}
          />
        </LabelItem>
        <LabelItem>
          Scientific Name:
          <InputItem
            type="text"
            name="scientificName"
            value={fishForm.scientificName}
            onChange={handleChange}
          />
        </LabelItem>
        <LabelItem>
          Info:
          <InputItem
            type="text"
            name="info"
            value={fishForm.info}
            onChange={handleChange}
          />
        </LabelItem>
        <Button type="submit">Add Fish</Button>
      </FormItem>
    </>
  );
};

export default CreateFishForm;
