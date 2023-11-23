import React from 'react';
import CountUp from "react-countup";

const Second = () => {
    return (
      <div id="Trainer" className="grid grid-cols-4">
        <div className="card rounded-none min-w-fit bg-orange-100 text-black ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Success Rate</h2>
            <p className="text-4xl font-bold">
              <CountUp end={95} duration={5} />%
            </p>
            <div className="card-actions justify-end"></div>
          </div>
        </div>

        <div className="card min-w-fit rounded-none bg-orange-100  text-black">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Personal Trainer</h2>
            <p>
              <p className="text-4xl font-bold">
                <CountUp end={20} duration={6} />+
              </p>
            </p>
          </div>
        </div>

        <div className="card min-w-fit rounded-none bg-orange-100  text-black">
          <div className="card-body items-center text-center text-black">
            <h2 className="card-title">Expert Nutritionist</h2>
            <p>
              <p className="text-4xl font-bold">
                <CountUp end={25} duration={7} />+
              </p>
            </p>
          </div>
        </div>

        <div className="card min-w-fit rounded-none bg-orange-100  text-black ">
          <div className="card-body items-center text-center">
            <h2 className="card-title">Health Food Blog</h2>

            <p className="text-4xl font-bold">
              <CountUp end={1000} duration={6} />+
            </p>
          </div>
        </div>
      </div>
    );
};

export default Second;