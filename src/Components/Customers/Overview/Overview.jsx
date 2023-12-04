import React from 'react';

import { Chart } from "react-google-charts";

const data = [
  ["Task", "Hours per Day"],
  ["January", 100],
  ["February", 200],
  ["March", 50],
  ["April", 20],
  ["May", 120],
  ["June", 200],
  ["July", 250],
  ["August", 100],
  ["September", 40],
  ["October", 30],
  ["November", 90],
  ["December", 100],
];

const options = {
  title: "Progress:",
  is3D: true,
};

const Overview = () => {
    return (
      <div className="ml-56">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"1000px"}
          height={"450px"}
        />
      </div>
    );
};

export default Overview;