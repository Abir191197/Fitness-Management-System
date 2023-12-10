import React, { useEffect, useState } from "react";
import Select from "react-select";

const TestAPI = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [apiResult, setApiResult] = useState(null); // New state for API result
  const [error, setError] = useState(null);

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

  const HandleAPI = async (event) => {
    event.preventDefault();

    try {
      const url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${selectedOption.value}?limit=5`;
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "85b980367cmsh47ffec9e5666b51p1394a3jsn3936b599c843",
          "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
        },
      });

      const result = await response.json();
      setApiResult(result);
    } catch (error) {
      console.error(error);
      setError("Error fetching data from the API.");
    }
  };

  return (
    <>
      <section className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form onSubmit={HandleAPI} className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <span>Select Body Part:</span>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto">
                    Send Enquiry
                  </button>
                </div>
              </form>

              {/* Display API results */}
              {apiResult && (
                <div className="mt-8">
                  <h2 className="text-xl font-semibold">API Results:</h2>
                  <pre className="overflow-auto max-h-40 bg-gray-200 p-4 rounded-lg">
                    {JSON.stringify(apiResult, null, 2)}
                  </pre>
                </div>
              )}

              {/* Display error message if there's an error */}
              {error && <div className="text-red-500 mt-4">Error: {error}</div>}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TestAPI;
