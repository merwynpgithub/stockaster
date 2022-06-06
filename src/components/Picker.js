import React from "react";
import priceConverter from '../components/helper/price-sorter';

function Picker({ stockDetails, stockPrice }) {
  const sma200 = (Number(stockDetails["200DayMovingAverage"]));
  const valueIndex = (sma200 - 272.02) / sma200;
  const valueIndexPercent = parseInt(valueIndex * 100) + "%";
  const currentStockPrice = priceConverter(stockPrice);
  return (
    <>
      
      <div>
        <h3>{stockDetails.Name}</h3>
        {valueIndex > 0 && <h4>{stockDetails.Symbol} is <span style={{color: "red", fontWeight: "bold"}}>UNDERVALUED</span> and is trading below its 200 MA by {valueIndexPercent}</h4>}
        <div style={{display: "flex", justifyContent: "space-around", flexWrap: "wrap", margin: "2%"}}>
          <div style={{width: "25%", minWidth: "200px", display: "flex", justifyContent: "space-between"}}>
            <div className="metrics">
              <p>Mkt Cap:</p>
              <p>PE (FWD):</p>
              <p>PE (TTM):</p>
            </div>
            <div className="metrics">
              <p>${Math.floor(parseInt(stockDetails.MarketCapitalization) / Math.pow(10, 9))} b</p>
              <p>{stockDetails.ForwardPE}</p>
              <p>{stockDetails.TrailingPE}</p>
            </div>
          </div>
          <div style={{width: "25%", minWidth: "200px", display: "flex", justifyContent: "space-between"}}>
          <div className="metrics">
              <p>EPS:</p>
              <p>P/Sales:</p>
              <p>P/Book:</p>
            </div>
            <div className="metrics">
              <p>{stockDetails.EPS}</p>
              <p>{stockDetails.PriceToSalesRatioTTM}</p>
              <p>{stockDetails.PriceToBookRatio}</p>
            </div>
          </div>
          <div style={{width: "35%", minWidth: "200px", display: "flex", justifyContent: "space-between"}}>
          <div className="metrics">
              <p>50 SMA:</p>
              <p>200 SMA:</p>
              <p>Price:</p>
            </div>
            <div className="metrics">
              <p>{stockDetails["50DayMovingAverage"]}</p>
              <p>{stockDetails["200DayMovingAverage"]}</p>
              <p>{currentStockPrice}</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Picker;
