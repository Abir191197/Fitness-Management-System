import React from 'react';

const SingleGif = ({ item }) => {

    const { equipment, gifUrl, bodyPart,name } = item;
  return (
    <div className="">
      <div class="h-screen">
        <div class="w-80 mt-24 m-auto lg:mt-16 max-w-sm">
          <img
            src={gifUrl}
            class="rounded-t-2xl shadow-2xl lg:w-full 2xl:w-full 2xl:h-44 object-cover"
          />
          <div class="bg-white shadow-2xl rounded-b-3xl">
            <h2 class="text-center text-gray-800 text-2xl font-bold pt-6">
              {name}
            </h2>
            <div class="w-5/6 m-auto">
              <p class="text-center text-gray-500 pt-5">
                You can now listen to millions of songs, audiobooks ands
                podcasts on any device anywhere you like!
              </p>
            </div>
            <div class="grid grid-cols-4 w-72 lg:w-5/6 m-auto bg-indigo-50 mt-5 p-4 lg:p-4 rounded-2xl">
              <div class="col-span-1">
                <img
                  class="w-15 lg:w-12"
                  src="https://img.icons8.com/ultraviolet/40/000000/musical-notes.png"
                  alt="music icon"
                />
              </div>
              <div class="col-span-2 pt-1">
                <p class="text-gray-800 font-bold lg:text-sm">Anual Plan</p>
                <p class="text-gray-500 text-sm">$59.99/year</p>
              </div>
              <div class="pt-2">
                <a
                  href="https://google.com"
                  class="text-indigo-700 underline hover:no-underline  text-sm hover:text-indigo-500 font-bold">
                  Change
                </a>
              </div>
            </div>
            <div class="bg-blue-700 w-72 lg:w-5/6 m-auto mt-6 p-2 hover:bg-indigo-500 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700">
              <button classs="lg:text-sm text-lg font-bold">
                Proceed to Payment
              </button>
            </div>
            <div class="text-center m-auto mt-6 w-full h-16">
              <button class="text-gray-500 font-bold lg:text-sm hover:text-gray-900">
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleGif;