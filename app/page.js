'use client'

import CaloriesCalculator from "./components/caloriesCalculator";

export default function Home() {

  const calculatedDataHandler = (calculatedDate) => {
    
  }

  return (
    <main>
      <CaloriesCalculator getCalculatedDate={calculatedDataHandler} />
    </main>
  )
}
