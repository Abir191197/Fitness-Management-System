import React, { useContext } from 'react';
import Lottie from "lottie-react";
import animation from "../assets/6716094.json";
import { Link } from "react-router-dom";
import { AuthContext } from '../Providers/AuthProvider';

const SignUp = () => {


    const { createUser } = useContext(AuthContext);

    const HandleSignUp = (event) => {

        



       event.preventDefault();
        const form = event.target;
        const userName = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.img.value;

        const signUp = { userName, email, password, img }
        
        console.log(signUp);


        createUser(email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
          })
            .catch((error) => console.log(error));
        event.target.reset();
    
}







    return (
      <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="relative">
              <Lottie
                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                animationData={animation}
                loop={true}
              />
            </div>
            <form onSubmit={HandleSignUp}>
              <div className="flex flex-col justify-center p-8 md:p-14">
                <span className="mb-3 text-4xl font-bold">Welcome </span>
                <span className="font-light text-gray-400 mb-8">
                  Welcome ! Please enter your details
                </span>
                <div className="py-4">
                  <span className="mb-2 text-md">Name</span>
                  <input
                    name="name"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  />
                </div>
                <div className="py-4">
                  <span className="mb-2 text-md">Email</span>
                  <input
                    name="email"
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  />
                </div>
                <div className="py-4">
                  <span className="mb-2 text-md">Password</span>
                  <input
                    type="password"
                    name="password"
                    id="pass"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  />
                </div>
                <div className="py-4">
                  <span className="mb-2 text-md">image Link</span>
                  <input
                    type="text"
                    name="img"
                    id="pass"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
                  />
                </div>
                <div className="flex justify-between w-full py-4">
                  <div className="mr-24">
                    <input type="checkbox" name="ch" id="ch" className="mr-2" />
                    <span className="text-md">
                      Agree All Term And Conditions
                    </span>
                  </div>
                  <button className="font-bold text-md">Forgot password</button>
                </div>
                <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                  Sign Up
                </button>
                <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                  <img
                    src="../../public/google.svg"
                    alt="img"
                    className="w-6 h-6 inline mr-2"
                  />
                  Sign Up with Google
                </button>
                <div className="text-center text-gray-400">
                  All ready have an account?
                  <button className="font-bold text-black ml-3">
                    <Link to="/Login">Log In Here</Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;