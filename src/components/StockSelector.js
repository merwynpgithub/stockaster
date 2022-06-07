function StockSelector({ symbol, setSymbol, handleSubmit }) {

  return (
    <>
    <div className="symbol-form">
    <form onSubmit={handleSubmit}>
      <input value={symbol} onChange={e => setSymbol(e.target.value.toLowerCase())} />
      <button type="submit">Search</button>
    </form>
    {/* <div className="search-fill">{symbol}</div> */}
    </div>
    </>
  );
}

export default StockSelector;