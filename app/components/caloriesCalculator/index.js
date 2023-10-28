"use client";

import FieldSet from "../fieldSet";
import Inputs from "../inputs/Inputs";
import calculateCalories from "./calculateCalories";

export default function CaloriesCalculator({getCalculatedDate, configAndStyle}) {

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const parameters = {
      age: e.target.age.value,
      weight: e.target.weight.value,
      height: e.target.height.value,
      activity: Array.from(e.target.activity).find((item) => item.checked === true)?.value,
      gender: Array.from(e.target.gender).find((item) => item.checked === true)?.value};

    if (Object.values(parameters).every((v) => v)) {
      const calculateData = calculateCalories(parameters);
      getCalculatedDate(calculateData);
    } else {
      alert("Fill all inputs!");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} {...configAndStyle.form} >
      <FieldSet title="Choose one of them" >
        <Inputs {...configAndStyle.maleRadioBtnProps} />
        <Inputs {...configAndStyle.femaleRadioBtnProps} />
      </FieldSet>

      <Inputs {...configAndStyle.ageProps} />
      <Inputs {...configAndStyle.weightProps} />
      <Inputs {...configAndStyle.heightProps} />

      <FieldSet title="Choose one of them">
        <Inputs {...configAndStyle.noExercise} />
        <Inputs {...configAndStyle.lightExercise} />
        <Inputs {...configAndStyle.moderateExercise} />
        <Inputs {...configAndStyle.hardExercise} />
        <Inputs {...configAndStyle.veryHardExercise} />
      </FieldSet>

      <button type="submit" {...configAndStyle.button} >Calculate</button>
    </form>
  );
}
