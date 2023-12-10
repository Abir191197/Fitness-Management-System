import React, { useState } from 'react';
import Swal from "sweetalert2";
import Select from "react-select";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Trainer_SingleUserGuideline = () => {
  const [startDate, setStartDate] = useState(new Date());
const [selectedOption, setSelectedOption] = useState(null);

const options = [
  { value: "back", label: "back" },
  { value: "cardio", label: "cardio" },
  { value: "lower arms", label: "lower arms" },
  { value: "lower legs", label: "lower legs" },
  { value: "neck", label: "neck" },
  { value: "shoulders", label: "shoulders" },
  { value: "upper arms", label: "upper arms" },
  { value: "upper legs", label: "upper legs" },
  { value: "waist", label: "waist" },
  { value: "chest", label: "chest" },
];









      const handleguidelineTrainer = (event) => {
        event.preventDefault();
        const form = event.target;
        const option = selectedOption.value;
        const Body = form.body.value;

        // const email = `ardhrubo908@gmail.com`;

        const Bodydata = { Body, option, startDate };

        console.log(Bodydata);
         fetch("http://localhost:5000/Guideline_from_Trainer", {
          method: "POST",

           headers: {
            "content-type": "application/json",
           },
           body: JSON.stringify(Bodydata),
         })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Good job!",
                text: "Guideline added Successfully!!!",
                icon: "success",
              });
            }
            form.reset();
          });
      }

  return (
    <div>
      <div className="ml-72">
        <div className="flex ml-32 border border-gray-500  bg-slate-600 shadow-2xl mt-20  mb-4 w-[700px] h-[400px] pl-14 py-7">
          <form
            onSubmit={handleguidelineTrainer}
            className="w-full max-w-xl bg-gray-200 rounded-lg px-4 pt-2">
            <div className="flex flex-wrap -mx-3 mb-6">
              <h2 className="px-40 pt-3 pb-2 text-gray-800 text-lg underline">
                Guideline For Abir
              </h2>
                <DatePicker 
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              /><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
</svg>

              <div className="w-full md:w-full px-3 mb-2 mt-2 bg-purple-200">
                <span>Select Body Part :</span>
                <Select
                  className=""
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
                <textarea
                  className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                  name="body"
                  placeholder=" GuideLine
                                     "
                  required></textarea>
              </div>
              <div className="w-full md:w-full flex items-start  px-3">
                <div className="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                  <svg
                    fill="none"
                    className="w-5 h-5 text-gray-600 mr-1"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <p className="text-xs md:text-sm pt-px">
                    Provide if needed any Body part exercise and necessary
                    Guideline
                  </p>
                </div>
                <div className="-mr-1">
                  <button className="btn bg-success">Submit</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Trainer_SingleUserGuideline;