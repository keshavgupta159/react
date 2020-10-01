import _ from "lodash";

export function getSortedData(tableData, sortColumn) {
  return _.orderBy(tableData, [sortColumn.colName], [sortColumn.order]);
}
