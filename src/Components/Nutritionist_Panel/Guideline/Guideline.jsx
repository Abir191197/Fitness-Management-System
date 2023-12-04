import React, { useEffect, useState } from 'react';
import SingleGuideline from './SingleGuideline';
import { Link } from 'react-router-dom';

const Guideline = () => {


const [Foods, setFoods] = useState ([]);

useEffect  (() => {
  fetch(`http://localhost:5000/FoodList`)
    .then((res) => res.json())
    .then((data) => setFoods(data));
}, []);



console.log(Foods);







    return (
      <div>
        <div className="ml-72 mt-16">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>User Name</th>
                  <th>Morning</th>
                  <th>Lunch</th>
                  <th>Evening</th>
                  <th>Dinner</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {Foods.map((Food) => (
                  <SingleGuideline Food={Food} key={Food._id}></SingleGuideline>
                ))}

                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
};

export default Guideline;