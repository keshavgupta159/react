import { getFilteredData } from "./filter";

export function getFilteredGroupedData(data, groupBy) {
  const uniqueKey = getUniqueKey(data, groupBy.colName);
  data = data.filter(
    (data) => data[groupBy.colName].toString() === groupBy.colValue.toString()
  );
  data = getFilteredData(data);
  let newData = [];
  for (let i = 0; i < uniqueKey.length; i++) {
    newData[i] = {};
    const keyName = groupBy.colName + ": " + uniqueKey[i];
    newData[i][keyName] = data.filter(
      (data) => data[groupBy.colName].toString() === uniqueKey[i].toString()
    );
  }
  return newData;
}

function getUniqueKey(data, colName) {
  let uniqueRecord = [];
  let uniqueColData = [];
  uniqueRecord = data.filter(function (item) {
    var i = uniqueRecord.findIndex((rec) => rec[colName] === item[colName]);
    if (i <= -1) {
      uniqueRecord.push(item);
      uniqueColData.push(item[colName]);
    }
    return uniqueRecord;
  });
  return uniqueColData;
}
