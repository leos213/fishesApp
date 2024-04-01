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
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 50px auto;
`;

const InputItem = styled.input`
  margin-left: 80px;
`;

const LabelItem = styled.label`
  margin-left: 30px;
`;

const CreateFishForm = ({ onCarSubmit }) => {
  const [fishFrom, setFishFrom] = useState({
    id: Math.random(),
    color: "",
    year: 0,
    make: "",
    engine: 0,
    price: 0,
    img: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFishFrom((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateForm();
    setFormErrors(errors);

    if (!Object.keys(errors).length) {
      onCarSubmit(fishFrom);
      // Reset form
      setFishFrom({
        id: Math.random(),
        color: "",
        year: 0,
        make: "",
        engine: 0,
        price: 0,
        img: "",
      });
    } else {
      console.log("Form is invalid");
    }
  };

  const validateForm = () => {
    const errors = {};

    if (fishFrom.color.trim() === "") {
      errors.color = "Color is required!";
    }

    if (!fishFrom.year) {
      errors.year = "Year is required!";
    }

    if (fishFrom.make.trim() === "") {
      errors.make = "Make is required!";
    }

    if (!fishFrom.engine) {
      errors.engine = "Engine is required!";
    }

    if (!fishFrom.price) {
      errors.price = "Price is required!";
    }

    if (fishFrom.img.trim() === "") {
      errors.img = "Image URL is required!";
    }

    return errors;
  };

  return (
    <FormItem onSubmit={handleSubmit}>
      <LabelItem>
        Region:
        <InputItem
          type="text"
          name="color"
          value={fishFrom.color}
          onChange={handleChange}
          className="create-car-form-input"
        />
      </LabelItem>
      {formErrors.color && (
        <span className="create-car-form-error">{formErrors.color}</span>
      )}
      <br />
      <LabelItem>
        Scientific Name:
        <InputItem
          type="number"
          name="year"
          value={fishFrom.year}
          onChange={handleChange}
          className="create-car-form-input"
        />
        {formErrors.year && (
          <span className="create-car-form-error">{formErrors.year}</span>
        )}
      </LabelItem>
      <br />
      <LabelItem>
        Info:
        <InputItem
          type="text"
          name="make"
          value={fishFrom.make}
          onChange={handleChange}
          className="create-car-form-input"
        />
        {formErrors.make && (
          <span className="create-car-form-error">{formErrors.make}</span>
        )}
      </LabelItem>
      <br />
      <Button>Create Fish</Button>
    </FormItem>
  );
};

export default CreateFishForm;
