import React from 'react';
import Swal from "sweetalert2";

const SingleUserGuideline = () => {

    const handleguidelineNut = (event) => {
    
        event.preventDefault();
        const form = event.target;
        const Body = form.body.value;

        const Bodydata ={Body}

        console.log(Body);
        fetch("http://localhost:5000/Guideline_from_Nutritionist", {
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
                text: "Blog Added Successfully!!!",
                icon: "success",
              });
            }
            form.reset();
          });
        

}










    return (
      <div>
        <div className="ml-72">
          <div class="flex ml-32  shadow-lg mt-20  mb-4 max-w-lg">
            <form onSubmit={handleguidelineNut}
              
              class="w-full max-w-xl bg-white rounded-lg px-4 pt-2">
              <div class="flex flex-wrap -mx-3 mb-6">
                <h2 class="px-40 pt-3 pb-2 text-gray-800 text-lg">
                  Guideline For Abir
                </h2>
                <div class="w-full md:w-full px-3 mb-2 mt-2">
                  <textarea
                    class="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-700 focus:outline-none focus:bg-white"
                    name="body"
                                    placeholder="1. For Morning  2.For Lunch 3. For Dinner
                                     "
                    required></textarea>
                </div>
                <div class="w-full md:w-full flex items-start  px-3">
                  <div class="flex items-start w-1/2 text-gray-700 px-2 mr-auto">
                    <svg
                      fill="none"
                      class="w-5 h-5 text-gray-600 mr-1"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                                    <p class="text-xs md:text-sm pt-px"> Provide diet Chart or Food related  information </p>
                  </div>
                  <div class="-mr-1">
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

export default SingleUserGuideline;