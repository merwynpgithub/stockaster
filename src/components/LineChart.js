import React, { useState } from "react";
import { Line } from 'react-chartjs-2';

import './styles/chart.css'

import {
  Chart,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement
);


function LineChart({ price }) {
  const [position, setPosition] = useState("small");
  const labelName = [];
  const priceData = [];
  price.forEach(data => {
    labelName.push(data.date);
    priceData.push(data.price);
  });

  labelName.reverse();
  priceData.reverse();


  const data = {
    labels: labelName,
    datasets: [
      {
        label: '25 Day(Closing) Price',
        fill: false,
        lineTension: 0.01,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0.5,0,1)',
        borderWidth: 2,
        data: priceData
      }
    ]
  };

  const options = {
    title:{
      display:true,
      text:'Stock Data',
      fontSize:20
    },
    legend:{
      display:true,
      position:'right'
    }
  };

  function handleClick() {
    position === "small" ? setPosition("big") : setPosition("small");
  }

  return (
    <>
    {position === "small" && 
      <div  className="small">
        <Line
          data={data}
          options={options}
          height={300}
          width={400}
        />
      </div>
    }
    </>
  );
}

export default LineChart;