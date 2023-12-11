import React, { useState } from "react";
import Select from "react-select";
import SingleGif from "./SingleGif";

const ExerciseVideoAPI = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [apiResult, setApiResult] = useState(null);
  const [error, setError] = useState(null);

  const options = [
    { value: "back", label: "back" },
    { value: "cardio", label: "cardio" },
    { value: "lower arms", label: "lower arms" },
    { value: "lower legs", label: "lower legs" },
    { value: "neck", label: "neck" },
    { value: "shoulders", label: "shoulders" },
    { value: "upper arms", label: "upper arms" },
    { value: "upper legs", label: "upper legs" },
    { value: "waist", label: "waist" },
    { value: "chest", label: "chest" },
  ];

  const handleAPI = async () => {
    if (!selectedOption) {
      console.error("Please select a body part");
      return;
    }

    try {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedOption.value}?limit=5`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "44d99be88amsh43c2d09f6974d09p14c933jsn048c32a4fd21",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      });

      const result = await response.json();
      setApiResult(result);
    } catch (error) {
      console.error(error);
      setError("Error fetching data from the API.");
      }
      console.log(apiResult);
  
  };

  return (
    <div className="ml-64 mt-16">
      <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
        <span>Select Body Part:</span>
        <Select
          defaultValue={selectedOption}
          onChange={setSelectedOption}
          options={options}
        />
        <button className="btn bg-success" onClick={handleAPI}>Search</button>
      </div>

      {/* Display API results */}
      {apiResult && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">API Results:</h2>
          <div className="grid grid-cols-3">
            {apiResult.map((item, id) => (
                <SingleGif key={id} item={item}></SingleGif>
                
            ))}
          </div>
        </div>
      )}

      {/* Display error message if there's an error */}
      {error && <div className="text-red-500 mt-4">Error: {error}</div>}
    </div>
  );
};

export default ExerciseVideoAPI;
