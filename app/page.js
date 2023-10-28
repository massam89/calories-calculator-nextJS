"use client";

import { useState } from "react";
import CaloriesCalculator from "./components/caloriesCalculator";
import Result from "./components/result";
import configAndStyle from "./configAndStyle";

export default function Home() {
  const [resultData, setResultData] = useState();

  const calculatedCaloriesHandler = (data) => {
    setResultData(Math.round(data));
  };

  return (
    <main className="w-screen h-screen flex items-center justify-center">
      <div className="flex items-center justify-center flex-col bg-slate-300 p-5 rounded-lg">
        <h1 className="text-2xl pb-5">Calories Calculator</h1>
        <CaloriesCalculator getCalculatedDate={calculatedCaloriesHandler} configAndStyle={configAndStyle} />
        <Result className="font-bold text-2xl text-gray-950" result={resultData}  />
      </div>
    </main>
  );
}
