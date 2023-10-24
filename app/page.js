'use client'

import CaloriesCalculator from "./components/caloriesCalculator";
import Swal from "sweetalert2";

export default function Home() {

  const calculatedCaloriesHandler = (data) => {
    Swal.fire(`${Math.round(data).toString()} KCal`)
  }

  return (
    <main className='flex justify-center'>
      <CaloriesCalculator 
        getCalculatedDate={calculatedCaloriesHandler}
      />
    </main>
  )
}
