import { useState } from 'react';

/**
 * 
 * @returns object
 */
function useTheme() {
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

  return {
    theme, setTheme, handleThemeChange
  }
}

export default useTheme;