import React, { useState } from "react";

const NutritionAnalysis = () => {
  const [Cals, Setcals] = useState([]);

  const handleNutrition = (event) => {
    event.preventDefault();
    const form = event.target;
    const Body = form.body.value;

    console.log(Body);

    let params = new URLSearchParams({
      app_id: "5e44f053",
      app_key: "52914cb00c1bf98c95cc0115d43f346c",
      ingr: `${JSON.stringify(Body)}`,
    });
    fetch(`https://api.edamam.com/api/nutrition-data?${params}`)
      .then((res) => res.json())
      .then((data) => Setcals([data]));

    console.log(Cals);
  };

  return (
    <>
      <div className="ml-72">
        <div class="flex ml-32  shadow-lg mt-20  mb-4 max-w-lg">
          <form
            onSubmit={handleNutrition}
            class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
            <div class="flex flex-wrap -mx-3 mb-6">
              <h2 class="px-40 pt-3 pb-2 text-gray-800 text-lg">
                Nutrition Analysis
              </h2>
              <div class="w-full md:w-full px-3 mb-2 mt-2">
                <textarea
                  class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder="2 carrot"
                  required></textarea>
              </div>
              <div class="w-full md:w-full flex items-start  px-3">
                <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    class="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p class="text-xs md:text-sm pt-px">Any ingredients Name</p>
                </div>
                <div class="-mr-1">
                  <button className="btn bg-success">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div className="mt-10">
          <table className="ml-32 shadow-lg bg-white border-separate ">
            <thead>
              <tr className="">
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Total Weight
                </th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Calories
                </th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Protein
                </th>
                <th className="bg-blue-100 border text-left px-8 py-4">Fat</th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Carbohydrates
                </th>
              </tr>
            </thead>
            <tbody className="">
              {Cals.map((cal, index) => (
                <tr key={index} className="">
                  <td className="border px-8 py-4">{cal.totalWeight} gm</td>
                  <td className="border px-8 py-4">{cal.calories} kcal.</td>
                  <td className="border px-8 py-4">
                    {cal.totalNutrientsKCal.PROCNT_KCAL.quantity} kcal.
                  </td>
                  <td className="border px-8 py-4">
                    {cal.totalNutrientsKCal.FAT_KCAL.quantity} kcal.
                  </td>
                  <td className="border px-8 py-4">
                    {cal.totalNutrientsKCal.CHOCDF_KCAL.quantity} kcal.
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* 2nd table */}

        <div className="mt-20 mb-24">
          <table className="ml-32 shadow-lg bg-white border-separate ">
            <thead>
              <tr className="">
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Sugar
                </th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Potassium
                </th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Calcium
                </th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Vitamin C
                </th>
                <th className="bg-blue-100 border text-left px-8 py-4">
                  Vitamin E
                </th>
              </tr>
            </thead>
            <tbody className="">
              {Cals.map((cal, index) => (
                <tr key={index} className="">
                  <td className="border px-8 py-4">
                    {cal.totalNutrients.SUGAR.quantity}
                    {cal.totalNutrients.SUGAR.unit}
                  </td>

                  <td className="border px-8 py-4">
                    {cal.totalNutrients.K.quantity} {cal.totalNutrients.K.unit}
                  </td>

                  <td className="border px-8 py-4">
                    {cal.totalNutrients.CA.quantity}
                    {cal.totalNutrients.CA.unit} 
                  </td>

                  <td className="border px-8 py-4">
                    {cal.totalNutrients.VITC.quantity}
                    {cal.totalNutrients.VITC.unit} 
                  </td>
                  <td className="border px-8 py-4">
                    {cal.totalNutrients.TOCPHA.quantity}{" "}
                    {cal.totalNutrients.TOCPHA.unit} 
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default NutritionAnalysis;
