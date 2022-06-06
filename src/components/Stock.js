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

import aapl_overview from '../data/aapl_overview';
import aapl_bal1 from '../data/aapl_bal1';
import aapl_inc1 from '../data/aapl_inc1';
import aapl_cf1 from '../data/aapl_cf1';
import aapl_price from '../data/aapl_price';

import nflx_overview from '../data/nflx_overview';
import nflx_bal1 from '../data/nflx_bal1';
import nflx_inc1 from '../data/nflx_inc1';
import nflx_cf1 from '../data/nflx_cf1';
import nflx_price from '../data/nflx_price';

import './styles/chart.css';

function Stock() {
  const [horizon, setHorizon] = useState("quarterlyReports");
  const [ticker, setTicker] = useState("Microsoft");
  const [overview, setOverview] = useState(msft_overview);
  const [bal, setBal] = useState(msft_bal1);
  const [inc, setInc] = useState(msft_inc1);
  const [cf, setCf] = useState(msft_cf1);
  const [price, setPrice] = useState(msft_price);

  function handleHorizonChange(e) {
    setHorizon(e.target.value);
  }
  function handleTickerChange(e) {
    setTicker(e.target.value);
    if (e.target.value == "Microsoft") {
      setTicker("Microsoft");
      setOverview(msft_overview);
      setBal(msft_bal1);
      setInc(msft_inc1)
      setCf(msft_cf1);
      setPrice(msft_price);
    }
    if (e.target.value == "Apple") {
      setTicker("Apple");
      setOverview(aapl_overview);
      setBal(aapl_bal1);
      setInc(aapl_inc1)
      setCf(aapl_cf1);
      setPrice(aapl_price);
    }
    if (e.target.value == "Netflix") {
      setTicker("Netflix");
      setOverview(nflx_overview);
      setBal(nflx_bal1);
      setInc(nflx_inc1)
      setCf(nflx_cf1);
      setPrice(nflx_price);
    }
  }
  return (
    <>
    <select value={ticker} onChange={handleTickerChange}>
      <option value="Microsoft">Microsoft</option>
      <option value="Apple">Apple</option>
      <option value="Netflix">Netflix</option>
    </select>
      
      <Picker stockDetails={overview} stockPrice={price}/>
      
      <select value={horizon} onChange={handleHorizonChange}>
        <option value="quarterlyReports">QUARTERLY</option>
        <option value="annualReports">ANNUAL</option>
      </select>

      
      <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap"}}>
      <div className="chart">
        <BarChart info={inc} name={ticker} type="revenue" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={inc} name={ticker} type="net_income" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={inc} name={ticker} type="ebitda" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={cf} name={ticker} type="cash_flow" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={bal} name={ticker} type="debt" horizon={horizon}/>
      </div>
      <div className="chart">
        <BarChart info={bal} name={ticker} type="stock" horizon={horizon}/>
      </div>
      </div>
    </>
  )
}

export default Stock;
