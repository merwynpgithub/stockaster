import React from "react";

function Picker({ stockDetails }) {
  const sma200 = (Number(stockDetails["200DayMovingAverage"]));
  const valueIndex = (sma200 - 272.02) / sma200;
  const valueIndexPercent = parseInt(valueIndex * 100) + "%";
  return (
    <>
      
      <div>
        <h3>{stockDetails.Name}</h3>
        {valueIndex > 0 && <h4>{stockDetails.Symbol} is <span style={{color: "red", fontWeight: "bold"}}>UNDERVALUED</span> and is trading below its 200 MA by {valueIndexPercent}</h4>}
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <div style={{paddingLeft: "5%", width: "25%", display: "flex", justifyContent: "space-between"}}>
            <div>
              <p>Market Cap:</p>
              <p>PE (FWD):</p>
              <p>PE (TTM):</p>
            </div>
            <div>
              <p>${Math.floor(parseInt(stockDetails.MarketCapitalization) / Math.pow(10, 9))} b</p>
              <p>{stockDetails.ForwardPE}</p>
              <p>{stockDetails.TrailingPE}</p>
            </div>
          </div>
          <div style={{width: "25%", display: "flex", justifyContent: "space-between"}}>
          <div>
              <p>EPS:</p>
              <p>Price/Sales:</p>
              <p>Price/Book:</p>
            </div>
            <div>
              <p>{stockDetails.EPS}</p>
              <p>{stockDetails.PriceToSalesRatioTTM}</p>
              <p>{stockDetails.PriceToBookRatio}</p>
            </div>
          </div>
          <div style={{paddingRight: "5%", width: "25%", display: "flex", justifyContent: "space-between"}}>
          <div>
              <p>50 Day SMA:</p>
              <p>200 Day SMA:</p>
              <p>Price:</p>
            </div>
            <div>
              <p>{stockDetails["50DayMovingAverage"]}</p>
              <p>{stockDetails["200DayMovingAverage"]}</p>
              <p>272.02</p>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Picker;
