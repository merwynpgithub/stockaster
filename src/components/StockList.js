import React from 'react';
import Stock from './Stock';

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
  return (
    <>
    <Stock />
    </>
  );
}

export default StockList;