function StockSelector({ symbol, setSymbol, handleSubmit, err }) {

  return (
    <>
    <div className="symbol-form">
    <form onSubmit={handleSubmit}>
      <input value={symbol} onChange={e => setSymbol(e.target.value.toLowerCase())} />
      <button type="submit">Search</button>
    </form>
    <div className="error">{err}</div>
    </div>
    </>
  );
}

export default StockSelector;