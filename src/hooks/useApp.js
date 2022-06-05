import React, {useState, useEffect} from 'react';
import axios from 'axios';

/**
 * 
 * @returns object
 */
function useApp() {
  const [stock, setStock] = useState("");
  const [stockDetails, setStockDetails] = useState({});
  const [price, setPrice] = useState([]);
  const [name, setName] = useState("");
  const [income, setIncome] = useState([]);
  const [renderBarC, setRenderbarC] = useState([]);
  const [eps, setEps] = useState([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    console.log("useffect", renderBarC);

    if (!stock || stock === "") {
      setStock("");
      return;
    }
   
    
    const url = "/ticker/" + stock;
    const url2 = "/ticker/" + stock + "/inc";
    const url3 = "/ticker/" + stock + "/price";
    const url4 = "/ticker/" + stock + "/eps";

    

    axios.get(url).then(res => {
      Promise.all([axios.get(url), axios.get(url2), axios.get(url3), axios.get(url4)]).then(all => {
        setName(all[0].data.Name);
        setStockDetails(all[0].data);
        setStock("");
        setIncome(all[1].data);
        setPrice(all[2].data);
        setEps(all[3].data);
        console.log(all[3].data);
      })
    })

  }, [renderBarC]);

  const handleClick = (e) => {
    e.preventDefault();

    // error check
    const url = "/ticker/" + stock;
    axios.get(url).then(res => {
      const check = Object.keys(res.data).length;
      console.log(check);
      if (check !== 0) {
        setErr("");
        setRenderbarC(prev => [...prev, 1]);
      } else {
        console.log("no data");
        setErr("No data for ticker");
        setStock("");
      }
    })
    .catch(err => {
      console.log(err);
      setErr("No data for ticker");
    });
    
    
  };

  return {
    stock,
    setStock,
    name,
    stockDetails,
    price,
    income,
    handleClick,
    err,
    eps
  };

}

export default useApp;
