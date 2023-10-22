const maleRadioBtnProps = {
    inputName: "male",
    inputAttributes: {
      type: "radio",
      name: "gender",
      value: "male",
    },
  };

  const femaleRadioBtnProps = {
    inputName: "female",
    inputAttributes: {
      type: "radio",
      name: "gender",
      value: "female",
    },
  };

  const ageProps = {
    inputName: "Age: ",
    inputAttributes: {
      type: "number",
      name: "age",
      min: 1,
      max: 100
    },
  };

  const weightProps = {
    inputName: "Weight(kg): ",
    inputAttributes: {
      type: "number",
      name: "weight",
      min: 1
    },
  };

  const heightProps = {
    inputName: "Height(cm): ",
    inputAttributes: {
      type: "number",
      name: "height",
      min: 1
    },
  };

  const noExercise = {
    inputName: "No Exercise",
    inputAttributes: {
      type: "radio",
      name: "activity",
      value: "ne",
    },
  }

  const lightExercise = {
    inputName: "Light Exercise",
    inputAttributes: {
      type: "radio",
      name: "activity",
      value: "le",
    },
  }

  const moderateExercise = {
    inputName: "Moderate Exercise",
    inputAttributes: {
      type: "radio",
      name: "activity",
      value: "me",
    },
  }

  const hardExercise = {
    inputName: "Hard Exercise",
    inputAttributes: {
      type: "radio",
      name: "activity",
      value: "he",
    },
  }

  const veryHardExercise = {
    inputName: "Very Hard Exercise",
    inputAttributes: {
      type: "radio",
      name: "activity",
      value: "vhe",
    },
  }

  export default {
    noExercise,
    lightExercise,
    moderateExercise,
    hardExercise,
    veryHardExercise,
    heightProps,
    weightProps,
    maleRadioBtnProps,
    femaleRadioBtnProps,
    ageProps
  }