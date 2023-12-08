import React from "react";
import Typewriter from "typewriter-effect";

import "./Navbar.css";
import { HashLink } from "react-router-hash-link"; 

import Second from "../Second/Second";
import Trainer from "../Trainer/Trainer";

import Nutritionist from "../Nutritionist/Nutritionist";
import About from "../About/About";
import { Link } from "react-router-dom";



const Navbar = () => {
  return (
    <>
      <div id="home" className="relative ">
        <img
          className="w-full h-auto"
          src="https://res.cloudinary.com/dhc1xdswn/image/upload/v1700770412/hero_zk0xdn.jpg"
          alt=""
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      </div>

      <div className="navbar absolute top-0 left-0 p-0 ">
        <div className="fixed bg-gray-500 h-16 w-full  ">
          <div className="navbar-start w-full   ">
            <HashLink className="ml-5 text-2xl  font-extrabold text-orange-200  ">
              FitBangladesh
            </HashLink>
          </div>
          <div className=" navbar-center hidden lg:flex w-full  ">
            <ul className=" menu-horizontal px-1 space-x-7 text-bold  text-orange-200 ml-52  ">
              <li>
                <HashLink smooth to="#home" className=" font-bold">
                  Home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#Service">
                  Service
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#Trainer">
                  Trainer
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="#Nutritionist">
                  Nutritionist
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/Classes/Overview">
                  Classes
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/Login">
                  Login
                </HashLink>
              </li>
            </ul>
            <div>
              <div className="dropdown dropdown-end ml-52 ">
                <div
                  tabIndex={0}
                  role="button"
                  className="  font-extrabold text-orange-200   ">
                  Log In
                </div>
                <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to="/Admin">Admin</Link>
                  </li>
                  <li></li>
                  <li>
                    <Link to="/Nutritionist_Panel">Nutritionist</Link>
                  </li>
                  <li>
                    <Link>Trainer</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className=" ml-5 absolute text-orange-200 mt-72 font-extrabold  text-4xl	">
          <span>
            THE ONLY IMPOSSIBLE JOURNEY
            <br /> IS THE ONE YOU NEVER BEGIN
            <div className="mt-[30px]">
              <span className="text-xl text-orange-500">
                <Typewriter
                  options={{
                    strings: ["Transform your body, transcend your limits."],

                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </div>
          </span>
          <br />
          <span className="font-normal text-xs  absolute mt-[350px] ">
            It doesn’t matter if your goal is to get stronger, burn fat, or to
            just stay fit our world class coaches will guide you every step of
            the way
          </span>
          <br />
        </div>
        <button className="ml-5 btn bg-yellow-200 absolute  text-black border mt-[900px]">
          BEGIN YOUR JOURNEY
        </button>
      </div>
      <Second></Second>
      <Trainer></Trainer>
      <Nutritionist></Nutritionist>
      <About></About>
    </>
  );
};

export default Navbar;
