import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Lottie from "lottie-react";
import animation from "../../../assets/5540985.json";
import YoutubeAPI from "./YoutubeAPI";


const SingleExerciseDetails = () => {
  const  SingleExerciseData = useParams(); 
  
console.log();
  const [apiResult, setApiResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://exercisedb.p.rapidapi.com/exercises/exercise/${SingleExerciseData.id}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "44d99be88amsh43c2d09f6974d09p14c933jsn048c32a4fd21",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setApiResult(result);
      } catch (error) {
        console.error(error);
        setError("Error fetching data from the API.");
      } finally {
        setLoading(false);
      }
    };
    console.log(apiResult);
    fetchData();
  }, [SingleExerciseData.id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }




 






    

  

  return (
    <div>
      {apiResult && (
        <div className="ml-72 mr-6 mt-16 card card-side bg-orange-100 shadow-xl">
          <figure>
            <img src={apiResult.gifUrl} alt="Movie" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Exercise name :{" "}
              <span className="text-red-600 text-3xl">{apiResult.name}</span>
            </h2>
            <h2>
              <img
                className="w-32"
                src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1702319435/3375000_zzpp3h.svg"
                alt=""
              />
              <span className="text-2xl">Instructions:</span>
            </h2>
            {apiResult.instructions && (
              <ol>
                {apiResult.instructions.map((instruction, index) => (
                  <li key={index + 1}>
                    {index + 1}. {instruction}
                  </li>
                ))}
              </ol>
            )}
            <div className="text-2xl mt-9">Muscle Target:</div>
            <div>
              <Lottie
                className="w-[40px] h-full hidden rounded-r-2xl md:block object-cover "
                animationData={animation}
                loop={false}
              />
              {apiResult.target}
            </div>
            <div className="mt-2">
              <Lottie
                className="w-[40px] h-full hidden rounded-r-2xl md:block object-cover "
                animationData={animation}
                loop={false}
              />
              {apiResult.secondaryMuscles[0]}
            </div>
            <div className="mt-2">
              <Lottie
                className="w-[40px] h-full hidden rounded-r-2xl md:block object-cover "
                animationData={animation}
                loop={false}
              />
              {apiResult.secondaryMuscles[1]}
            </div>
          </div>
        </div>
      )}
      {/* // YOUTUBE VIDEO */}

      <div>
        {apiResult && (
          <div className="ml-72 mr-6 pl-10 pt-6 card card-side bg-orange-100 shadow-xl ">
            <div className="text-4xl">
              Watch <span className="text-red-500">{apiResult.name} </span> related exercise videos
                      </div>
                      <YoutubeAPI></YoutubeAPI>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleExerciseDetails;
