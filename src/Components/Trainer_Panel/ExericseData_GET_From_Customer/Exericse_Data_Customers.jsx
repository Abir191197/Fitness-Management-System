import React, { useEffect, useState } from 'react';
import SingleData from './SingleData';

const Exericse_Data_Customers = () => {

const [exercises, setExercise] = useState([]);

useEffect(() => {
  fetch(`http://localhost:5000/exercise`)
    .then((res) => res.json())
    .then((data) => setExercise(data));
}, []);

console.log(exercises);

return (
  <div>
    <div className="ml-72 mt-16">
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          <thead>
            <tr>
              <th>Date</th>
             <th>Email</th>
              <th>Morning</th>
              <th>Night</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise) => (
              <SingleData exercise={exercise} key={exercise._id}></SingleData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);











  
};

export default Exericse_Data_Customers;




