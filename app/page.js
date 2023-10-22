'use client'

import CaloriesCalculator from "./components/caloriesCalculator";

export default function Home() {

  const calculatedDataHandler = (calculatedDate) => {
    
  }

  return (
    <main className='flex justify-center h-full items-center'>
      <CaloriesCalculator 
        getCalculatedDate={calculatedDataHandler}
        
      />
    </main>
  )
}
