import { useState } from 'react';
import './App.css';
import StockList from './components/StockList';
import Intro from './components/Intro';

import useTheme from './hooks/useTheme';

import './components/styles/chart.css';

function App() {
  const { theme, setTheme, handleThemeChange } = useTheme();
  
  return (
    <div className="App">
      <Intro theme={theme} handleThemeChange={handleThemeChange} setTheme={setTheme} />
      <StockList />
    </div>
  );
}

export default App;
