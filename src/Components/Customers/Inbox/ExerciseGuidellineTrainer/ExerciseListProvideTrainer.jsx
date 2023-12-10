import React, { useEffect, useState } from 'react';

const ExerciseListProvideTrainer = () => {



    const [exercises, setExercise] = useState([]);

    useEffect(() => {
      fetch(`http://localhost:5000/Guideline_from_Trainer`)
        .then((res) => res.json())
        .then((data) => setExercise(data));
    }, []);

    console.log(exercises);









    return (
      <div className="ml-72 ">
        {exercises.map((data) => (
          <div class="min- bg-gray-50 flex flex-col justify-start relative overflow-hidden sm:py-12">
            <div class="max-w-7xl mx-auto">
              <div class="relative group">
                <div class="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div class="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
                  <img
                    className="w-8 h-8 text-purple-600"
                    src="../../../../../public/Weightlifter.svg"
                    alt=""
                  />

                  <div class="space-y-2">
                    <p class="text-slate-800">Date:{data.startDate}</p>
                    <p class="text-slate-800">
                      {" "}
                      Body List:{" "}
                      <span className="text-xl text-orange-800">
                        {" "}
                        {data.option}
                      </span>
                    </p>
                    <p class="text-slate-800">
                      GuideLine:
                      <span className="text-xl text-green-500">
                        {data.Body}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
};

export default ExerciseListProvideTrainer;