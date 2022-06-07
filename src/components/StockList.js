import axios from 'axios';
import React, { useState } from 'react';
import Stock from './Stock';
import StockSelector from './StockSelector';

/*
fundas:
mkt cap, pe(fwd), pe(ttm), p/sales, p/book
bal: cash, debt
graph metrics: 
price, revenue, ebitda, free cash flow, 
net income, debt, dividend, eps, 
shares outstanding
*/

function StockList() {
  const [symbol, setSymbol] = useState("");
  const [saveticker, setSaveTicker] = useState("");
  const [err, setErr] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (!symbol || symbol === "") return;
    const stock = symbol.toUpperCase();
    const url = '';

    axios.get(url)
    .then(res => {
      if (res.data.Symbol) {
        setSaveTicker(res.data.Symbol);
        console.log("valid symbol", res.data.Symbol);
        setErr("");
      } else {
        setErr("invalid ticker");
      }
    })
    .catch(err => setErr("invalid ticker"));
    setSymbol("");
  }
  return (
    <>
    <StockSelector symbol={symbol.toUpperCase()} setSymbol={setSymbol} handleSubmit={handleSubmit} err={err}/>
    <Stock saveticker={saveticker}/>
    </>
  );
}

export default StockList;