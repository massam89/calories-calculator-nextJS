export default function calculateCalories(parameters) {

const {age, weight, height, activity, gender} = parameters

  const coefficients = {
    activityLevel: {
      ne: 1.2,   //noExercise
      le: 1.375, //lightExercise
      me: 1.55,  //moderateExercise
      he: 1.725, //hardExercise
      vhe: 1.9,  //veryHardExercise
    },
    male: {
      _: 88.362,
      weight: 13.397,
      height: 4.799,
      age: 5.677,
    },
    female: {
      _: 447.593,
      weight: 9.247,
      height: 3.098,
      age: 4.33,
    },
    calculate() {
      const BMR = //Basal Metabolic Rate
        this[gender]._ +
        this[gender].weight * weight +
        this[gender].height * height -
        this[gender].age * age;

      return this.activityLevel[activity] * BMR;
    },
  };
  return coefficients.calculate();
}
