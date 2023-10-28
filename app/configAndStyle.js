const maleRadioBtnProps = {
    inputName: "Male",
    containerClassnames: 'flex items-center mb-2',
    labelAttributes: {
      className: "ml-2 text-sm font-medium",
      htmlFor: 'male'
    },
    inputAttributes: {
      id: 'male',
      type: "radio",
      name: "gender",
      value: "male",
      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    },
  };
  
  const femaleRadioBtnProps = {
    inputName: "Female",
    containerClassnames: 'flex items-center mb-2',
    labelAttributes: {
      className: "ml-2 text-sm font-medium",
      htmlFor: 'female'
    },
    inputAttributes: {
      id: 'female',
      type: "radio",
      name: "gender",
      value: "female",
      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    },
  };
  
  const ageProps = {
    containerClassnames: 'my-2',
    inputName: "",
    inputAttributes: {
      type: "number",
      name: "age",
      min: 1,
      max: 100,
      placeholder: 'age',
      className: "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-3 p-2.5"
    },
  };
  
  const weightProps = {
    containerClassnames: 'my-2',
    inputName: "",
    inputAttributes: {
      type: "number",
      name: "weight",
      min: 1,
      placeholder: 'Weight(kg)',
      className: "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-3 p-2.5"
    },
  };
  
  const heightProps = {
    containerClassnames: 'my-2',
    inputName: "",
    inputAttributes: {
      type: "number",
      name: "height",
      min: 1,
      placeholder: 'Height(kg)',
      className: "bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg w-full pl-3 p-2.5"
    },
  };
  
  const noExercise = {
    inputName: "Little or No Exercise",
    containerClassnames: 'flex items-center mb-2',
    labelAttributes: {
      className: "ml-2 text-sm font-medium",
      htmlFor: 'ne'
    },
    inputAttributes: {
      id: 'ne',
      type: "radio",
      name: "activity",
      value: "ne",
      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    },
  };
  
  const lightExercise = {
    inputName:  "Light Exercise - 1-3 days a week",
    containerClassnames: 'flex items-center mb-2',
    labelAttributes: {
      className: "ml-2 text-sm font-medium",
      htmlFor: 'le'
    },
    inputAttributes: {
      id: 'le',
      type: "radio",
      name: "activity",
      value: "le",
      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    },
  };
  
  const moderateExercise = {
    inputName:  "Moderate Exercise - 3-5 days a week",
    containerClassnames: 'flex items-center mb-2',
    labelAttributes: {
      className: "ml-2 text-sm font-medium",
      htmlFor: 'me'
    },
    inputAttributes: {
      id: 'me',
      type: "radio",
      name: "activity",
      value: "me",
      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    },
  };
  
  const hardExercise = {
    inputName:  "Hard Exercise - 6-7 days a week",
    containerClassnames: 'flex items-center mb-2',
    labelAttributes: {
      className: "ml-2 text-sm font-medium",
      htmlFor: 'he'
    },
    inputAttributes: {
      id: 'he',
      type: "radio",
      name: "activity",
      value: "he",
      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    },
  };
  
  const veryHardExercise = {
    inputName: "Very Hard Exercise - training twice a day",
    containerClassnames: 'flex items-center mb-2',
    labelAttributes: {
      className: "ml-2 text-sm font-medium",
      htmlFor: 'vhe'
    },
    inputAttributes: {
      id: 'vhe',
      type: "radio",
      name: "activity",
      value: "vhe",
      className: "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
    },
  };
  
  const button = {
    className: 'mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'
  }
  
  const form = {
    className: "flex flex-col"
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
    ageProps,
    button,
    form
  };
  