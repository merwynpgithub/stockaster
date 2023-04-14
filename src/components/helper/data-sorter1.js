/**
 * 
 * @param {*} data 
 * @param {*} name 
 * @returns Object with labelname, data and bar chart numbers
 */

const converter = (data, name, type, horizon ) => {
  if (type === "revenue") {
    const labelName = name + " Revenue (Millions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => statData.push(Math.floor(parseInt(data.totalRevenue) / Math.pow(10, 6))));
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "net_income") {
    const labelName = name + " Net Income (Millions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => statData.push(Number(parseInt(data.netIncome) / Math.pow(10, 6))));
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "ebitda") {
    const labelName = name + " EBITDA (Millions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => statData.push(Math.floor(Number(data.ebitda) / Math.pow(10, 6))));
    statData.reverse();
    
    return { labelData, labelName, statData };
  }

  if (type === "cash_flow") {
    const labelName = name + " Cash Flow (Millions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => {
      const opcf = parseInt(data.operatingCashflow) / Math.pow(10, 6);
      const capex = parseInt(data.capitalExpenditures) / Math.pow(10, 6);
      const free_cf = opcf - capex;
      statData.push(free_cf);
    });
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "debt") {
    const labelName = name + " Debt (Millions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => {
      const longTermDebt = parseInt(data.longTermDebt) / Math.pow(10, 6);
      const currentLiabilities = parseInt(data.totalCurrentLiabilities) / Math.pow(10, 6);
      const debt = longTermDebt + currentLiabilities;
      statData.push(debt);
    });
    statData.reverse();

    return { labelData, labelName, statData };
  }

  if (type === "stock") {
    const labelName = name + " Shares Outstanding (Millions)";

    const labelData = [];
    data[horizon].forEach(data => labelData.push(data.fiscalDateEnding));
    labelData.reverse();

    const statData = [];
    data[horizon].forEach(data => {
      const stock = parseFloat(((data.commonStockSharesOutstanding) / Math.pow(10, 6)).toFixed(2));
      statData.push(stock);
    });
    statData.reverse();

    return { labelData, labelName, statData };
  }
};

export default converter;