import React from 'react';

const YoutubeAPI = () => {

const handleAPI = async () => {
  

  try {
    const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedOption.value}?limit=5`;
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "44d99be88amsh43c2d09f6974d09p14c933jsn048c32a4fd21",
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
        <div>
            
        </div>
    );
};

export default YoutubeAPI;