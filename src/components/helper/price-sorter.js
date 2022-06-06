/**
 * 
 * @param {*} price 
 */
const priceConverter = (priceData) => {
  return parseFloat(Object.values(priceData["Weekly Time Series"])[0]["4. close"]);
};

export default priceConverter;