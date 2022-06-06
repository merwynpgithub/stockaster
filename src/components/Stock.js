import React, { useState } from 'react';

import useApp from '../hooks/useApp';
import Picker from './Picker';
import BarChart from './BarChart';
import LineChart from './LineChart';

import msft_overview from '../data/msft_overview';
import msft_bal1 from '../data/msft_bal1';
import msft_inc1 from '../data/msft_inc1';
import msft_cf1 from '../data/msft_cf1';
import msft_price from '../data/msft_price';

import './styles/chart.css';

function Stock() {
  const [horizon, setHorizon] = useState("quarterlyReports");
  const [ticker, setTicker] = useState("Microsoft");

  function handleHorizonChange(e) {
    setHorizon(e.target.value);
  }
  function handleTickerChange(e) {
    setHorizon(e.target.value);
  }
  return (
    <>
    <select value={ticker} onChange={handleTickerChange}>
      <option value="Microsoft">Microsoft</option>
      {/* <option value="Apple">Apple</option> */}
    </select>
      {ticker === "Microsoft" &&
      <Picker stockDetails={msft_overview} stockPrice={msft_price}/>
      }
      <select value={horizon} onChange={handleHorizonChange}>
        <option value="quarterlyReports">QUARTERLY</option>
        <option value="annualReports">ANNUAL</option>
      </select>

      {ticker === "Microsoft" &&
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
      } 
    </>
  )
}

export default Stock;
