import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleGif = ({ item }) => {

  const { equipment, gifUrl, bodyPart, name, secondaryMuscles,id } = item;
  
  const navigate = useNavigate();


  
  return (
    <div className="">
      <div className="h-screen mb-32">
        <div className="w-80 mt-24 m-auto lg:mt-16 max-w-sm mb-36">
          <img
            src={gifUrl}
            className="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
          />
          <div className="bg-white shadow-2xl rounded-b-3xl">
            <h2 className="text-center text-gray-800 text-2xl font-bold pt-6">
              {name}
            </h2>
            <div className="w-5/6 m-auto">
              <p className="text-center text-gray-500 pt-5"></p>
            </div>
            <div className="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div className="col-span-1">
                <img
                  className="w-15 lg:w-12"
                  src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1702294245/body-scan_1_sbquhb.png"
                  alt="music icon"
                />
              </div>
              <div className="col-span-2 pt-1">
                <p className="text-gray-800 font-bold lg:text-sm"></p>
                <p className="text-gray-500 text-2xl ml-10">{bodyPart}</p>
              </div>
            </div>
            <div className="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div className="col-span-1">
                <img
                  className="w-15 lg:w-12"
                  src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1702294964/dumbbell_vgptok.png"
                  alt="music icon"
                />
              </div>
              <div className="col-span-2 pt-1">
                <p className="text-gray-800 font-bold lg:text-sm"></p>
                <p
                  className="text-gray-500 text-xl ml-10
                ">
                  {equipment}
                </p>
              </div>
            </div>
            <div className="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
              <button
                onClick={() => navigate(`/Classes/SingleExerciseDetails/${id}`)}
                className="lg:text-sm text-lg font-bold">
                Read More
              </button>
            </div>
            <div className="text-center m-auto mt-6 w-full h-16">
              <button className="text-gray-500 font-bold lg:text-sm hover:text-gray-900 mb-10"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGif;