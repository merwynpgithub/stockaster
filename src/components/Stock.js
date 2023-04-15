import React, { useState } from 'react';

import useApp from '../hooks/useApp';
import { stockTickerData } from '../data/stockTickerData';
import Picker from './Picker';
import BarChart from './BarChart';
import LineChart from './LineChart';

import './styles/chart.css';

function Stock() {
  const [horizon, setHorizon] = useState("quarterlyReports");
  const [ticker, setTicker] = useState(stockTickerData[0].company);
  const [overview, setOverview] = useState(stockTickerData[0].overview.default);
  const [bal, setBal] = useState(stockTickerData[0].balance.default);
  const [inc, setInc] = useState(stockTickerData[0].income.default);
  const [cf, setCf] = useState(stockTickerData[0].cashFlow.default);
  const [price, setPrice] = useState(stockTickerData[0].price.default);
  
  function handleHorizonChange(e) {
    setHorizon(e.target.value);
  }
  const stockOptions = stockTickerData.map((stock, index) => {
    return (
      <option value={stock.company} key={index}>{stock.company}</option>
    );
  });
  function handleTickerChange(e) {
    const selectedTicker = stockTickerData.filter(data => data.company === e.target.value);
    setTicker(e.target.value);
    e.target.value === 'Microsoft' ? setOverview(selectedTicker[0].overview.default) : setOverview(selectedTicker[0].overview);
    e.target.value === 'Microsoft' ? setOverview(selectedTicker[0].balance.default) : setBal(selectedTicker[0].balance);
    e.target.value === 'Microsoft' ? setOverview(selectedTicker[0].income.default) : setInc(selectedTicker[0].income);
    e.target.value === 'Microsoft' ? setOverview(selectedTicker[0].cashFlow.default) : setCf(selectedTicker[0].cashFlow);
    e.target.value === 'Microsoft' ? setOverview(selectedTicker[0].price.default) : setPrice(selectedTicker[0].price);
  }
  return (
    <>
    <select value={ticker} onChange={handleTickerChange}>
      {stockOptions}
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
