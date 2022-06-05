/**
 * 
 * @param {*} data 
 * @param {*} name 
 * @returns Object with labelname, data and bar chart numbers
 */
function dataSorter(data, name) {

  if (data[0]?.ni) {
    const labelName = name + " Net Income (Billions)";
    
    const labelData = [];
    data.forEach(data => labelData.push(data.date));
    labelData.reverse();
    
    
    const statData = [];
    data.forEach(data => statData.push(parseInt(data.ni)/Math.pow(10,9)));
    statData.reverse();

    return { labelData, labelName, statData };
  }
  if (data[0]?.eps) {
    const labelName = name + " EPS";
    
    const labelData = [];
    data.forEach(data => labelData.push(data.date));
    labelData.reverse();
    
    
    const statData = [];
    data.forEach(data => statData.push(data.eps));
    statData.reverse();

    return { labelData, labelName, statData };
  }
}

export default dataSorter;