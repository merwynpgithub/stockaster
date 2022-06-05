import React, { useState } from 'react';

import useApp from '../hooks/useApp';
import Picker from './Picker';
import BarChart from './BarChart';
import LineChart from './LineChart';

import msft_overview from '../data/msft_overview';
import msft_bal1 from '../data/msft_bal1';
import msft_inc1 from '../data/msft_inc1';
import msft_cf1 from '../data/msft_cf1';

import './styles/chart.css';

function Stock() {
  const [horizon, setHorizon] = useState("quarterlyReports");

  function handleChange(e) {
    setHorizon(e.target.value);
    console.log(e.target.value);
  }
  return (
    <>
      <Picker stockDetails={msft_overview} />
      <select value={horizon} onChange={handleChange}>
        <option value="quarterlyReports">QUARTERLY</option>
        <option value="annualReports">ANNUAL</option>
      </select>
      <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      <div className="chart">
        <BarChart info={msft_inc1} name={"Microsoft"} type="revenue" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={msft_inc1} name={"Microsoft"} type="net_income" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={msft_inc1} name={"Microsoft"} type="ebitda" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={msft_cf1} name={"Microsoft"} type="cash_flow" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={msft_bal1} name={"Microsoft"} type="debt" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={msft_bal1} name={"Microsoft"} type="stock" horizon={horizon}/>
      </div>

      </div>
    </>
  )
}

export default Stock;
