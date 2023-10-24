'use client'

import Swal from "sweetalert2";
import FieldSet from "../fieldSet";
import Inputs from "../inputs/Inputs";
import calculateCalories from "./calculateCalories";
import config from "./config";

export default function CaloriesCalculator({getCalculatedDate}) {

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const parameters = {
      age: e.target.age.value,
      weight: e.target.weight.value,
      height: e.target.height.value,
      activity: Array.from(e.target.activity).find(item => item.checked === true)?.value,
      gender: Array.from(e.target.gender).find(item => item.checked === true)?.value
    }
    
    if(Object.values(parameters).every((v) => v)){
      const calculateData = calculateCalories(parameters)
      getCalculatedDate(calculateData);
    }else{
      Swal.fire('Fill all inputs')
    }
  }

  return (
    <form onSubmit={onSubmitHandler} >

      <FieldSet title='Choose one of them'>
        <Inputs {...config.maleRadioBtnProps} />
        <Inputs {...config.femaleRadioBtnProps} />
      </FieldSet>

      <Inputs {...config.ageProps} />
      <Inputs {...config.weightProps} />
      <Inputs {...config.heightProps} />

      <FieldSet title='Choose one of them'>
        <Inputs {...config.noExercise} />
        <Inputs {...config.lightExercise} />
        <Inputs {...config.moderateExercise} />
        <Inputs {...config.hardExercise} />
        <Inputs {...config.veryHardExercise} />
      </FieldSet>

      <button type="submit">Calculate</button>

    </form>
  );
}
