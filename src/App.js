import { useState } from 'react';
import './App.css';
import StockList from './components/StockList';
import logo from './images/stockaster.png'

import './components/styles/chart.css'

function App() {
  const [theme, setTheme] = useState("light");
  function handleThemeChange(e) {
    setTheme(e.target.value);
    const body = document.body;
    if (e.target.value === "dark") {
      body.style.backgroundColor = "rgb(12, 12, 12)";
      body.style.color = "white";
    } else {
      body.style.backgroundColor = "";
      body.style.color = "";
    }
  }
  return (
    <div className="App">
      <div className="brand">
        <img src={logo} alt="stockaster logo" />
      </div>
      <div className="theme">
      <select value={theme} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      </div>
      <h1>Stock Insights</h1>
      <h2 style={{color: "#4682b4"}}><em>Warren Buffett: "Price is what you pay. Value is what you get."</em></h2>
      <StockList />
    </div>
  );
}

export default App;
