import { useState } from 'react';
import './App.css';
import StockList from './components/StockList';
import Intro from './components/Intro';

import './components/styles/chart.css';

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
      <Intro theme={theme} handleThemeChange={handleThemeChange} setTheme={setTheme} />
      <StockList />
    </div>
  );
}

export default App;
