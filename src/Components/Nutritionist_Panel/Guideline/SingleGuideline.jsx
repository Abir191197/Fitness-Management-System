import React from 'react';
import { Link } from 'react-router-dom';

const SingleGuideline = ({ Food }) => {

    const HandleGuideLine = _id => {

        console.log(_id);
        

    }



    const { breakfast, lunch, evening, dinner, UserName,_id } = Food;
    return (
      <>
        <tr>
          <td>05/12/2023</td>
          <td>{UserName}</td>
          <td>{breakfast}</td>
          <td>{lunch}</td>
          <td>{evening}</td>
          <td>{dinner}</td>
          <td>
            <button onClick={() => HandleGuideLine(_id)}>
              <Link to="/Nutritionist_Panel/SingleUserGuideline">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 3.75V16.5L12 14.25 7.5 16.5V3.75m9 0H18A2.25 2.25 0 0120.25 6v12A2.25 2.25 0 0118 20.25H6A2.25 2.25 0 013.75 18V6A2.25 2.25 0 016 3.75h1.5m9 0h-9"
                  />
                </svg>
              </Link>
            </button>
          </td>
        </tr>
      </>
    );
};

export default SingleGuideline;