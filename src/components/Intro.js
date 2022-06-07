import './styles/chart.css';
import logo from '../images/stockaster.png';



function Intro({ theme, handleThemeChange }) {
  return (
    <>
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
    </>
  );
}

export default Intro;