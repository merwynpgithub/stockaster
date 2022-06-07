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
  function handleSubmit(e) {
    e.preventDefault();
    if (!symbol || symbol === "") return;
    console.log(symbol.toUpperCase());
    setSaveTicker(symbol.toUpperCase());
  }
  return (
    <>
    <StockSelector symbol={symbol.toUpperCase()} setSymbol={setSymbol} handleSubmit={handleSubmit}/>
    <Stock />
    </>
  );
}

export default StockList;