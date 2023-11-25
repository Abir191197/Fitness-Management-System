import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
      <div>
        <div className="navbar bg-gray-200">
          <div className="navbar-start">
            <a className="text-2xl ml-4 mr-20">Fitness</a>
            <ul>
              <span className="text-xs">
                Good Morning <br />
                Welcome Back
              </span>
            </ul>

            <div className=" ">
              <ul className="  ml-32">
                <Link to='/classes/Overview'>Home</Link>
                
              </ul>
            </div>
          </div>

          <div className="navbar-end">
            <a className="btn">LogOut</a>
          </div>
        </div>

        <div className="h-10">
          <div className="relative  h-[500px] w-44  bg-gray-600 rounded-md ">
            <div className="absolute border   rounded-md inset-y-0 left-0 w-44 p-6">
              <ul>
                <button className="mt-8 hover:bg-orange-700 h-[50px] w-[100px]  border border-amber-800 bg-orange-400  rounded-md   ">
                  <Link to="/Classes/Diet">Diet Plan</Link>
                </button>
                <button className="  h-[50px] w-[100px] bg-orange-400 mt-8 hover:bg-orange-700  border border-amber-800 rounded-md  ">
                  <Link to="/Classes/WorkOut">WorkOut</Link>
                </button>

                <button className=" h-[50px] w-[100px] bg-orange-400 mt-8 hover:bg-orange-700   border border-amber-800 rounded-md  ">
                  <Link to="/Classes/WorkOut">Exercise Form</Link>
                </button>
                <button className=" h-[50px] w-[100px] bg-orange-400 mt-8 hover:bg-orange-700   border border-amber-800 rounded-md  ">
                  <Link to="/Classes/WorkOut">Food List Form </Link>
                </button>
                <button className=" h-[50px] w-[100px] bg-orange-400  mt-8 hover:bg-orange-700  border border-amber-800 rounded-md ">
                  <Link to="/Classes/WorkOut">Report</Link>
                </button>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Nav;