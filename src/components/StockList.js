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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(symbol);
  }
  return (
    <>
    <StockSelector symbol={symbol} setSymbol={setSymbol} handleSubmit={handleSubmit}/>
    <Stock />
    </>
  );
}

export default StockList;