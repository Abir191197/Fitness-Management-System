import React from "react";
import Typewriter from "typewriter-effect";

import "./Navbar.css";
import { HashLink } from "react-router-hash-link"; 

import Second from "../Second/Second";
import Trainer from "../Trainer/Trainer";

import Nutritionist from "../Nutritionist/Nutritionist";
import About from "../About/About";

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
        <div className="fixed bg-orange-500 h-16  ">
          <div className="navbar-start w-full   ">
            <HashLink className="ml-5 text-2xl  font-extrabold text-orange-200  ">
              FitBangladesh
            </HashLink>
          </div>
          <div className=" navbar-center hidden lg:flex  ">
            <ul className=" menu-horizontal px-1 space-x-7 text-bold  text-orange-200 ml-52 ">
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
            </ul>
            <div className=" ">
              <HashLink className="font-extrabold text-white ml-56 p-28 ">
                Log In
              </HashLink>
            </div>
          </div>
        </div>
        <div className=" ml-5 absolute text-orange-200 mt-72 font-extrabold  text-4xl	">
          {/* <Typewriter
            options={{
              strings: ["Hello welcome to fit bangladesh", "World"],
              autoStart: true,
              loop: true,
            }}
          /> */}

          <span>
            THE ONLY IMPOSSIBLE JOURNEY
            <br /> IS THE ONE YOU NEVER BEGIN.
          </span>
          <br />
          <span className="font-normal text-xs  absolute mt-[200px] ">
            It doesn’t matter if your goal is to get stronger, burn fat, or to
            just stay fit our world class coaches will guide you every step of
            the way
          </span>
          <br />
        </div>
        <button className="ml-5 btn bg-yellow-200 absolute  text-black border mt-[700px]">
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
