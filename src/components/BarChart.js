import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';

import dataSorter from './helper/data-sorter';
import converter from './helper/data-sorter1';

import './styles/chart.css';

import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function BarChart({info, name, type, horizon}) {
  const [position, setPosition] = useState("small");

  // const dataSorterResult = dataSorter(info, name);
  const converterResult = converter(info, name, type, horizon);
  
  const data = {
    labels: converterResult.labelData,
    datasets: [
      {
        label: converterResult.labelName,
        backgroundColor: 'rgba(40,130,200,0.5)',
        borderColor: 'rgba(40,130,200,0)',
        borderWidth: 2,
        data: converterResult.statData
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

  function handleClick(e) {
    position === "small" ? setPosition("big") : setPosition("small");
  }

  return (
    <>
    <div id="chart-div">
    {position === "big" &&
      <div className="screen">
        <div  className="big">
          <div><button onClick={handleClick}>Resize</button></div>
          <Bar
            data={data}
            options={options}
            height={300}
            width={400}
          />
        </div>
      </div>
    }
    {position === "small" && 
      <div  className="small" >
        <div><button id="big-screen" onClick={handleClick}>Enlarge</button></div>
        <Bar
          data={data}
          options={options}
          height={300}
          width={400}
        />
      </div>
    }
    </div>
    </>
  )
}

export default BarChart;