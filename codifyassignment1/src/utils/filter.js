export function getFilteredData(tableData) {
  const filterCol = document.getElementsByClassName("filterCol");
  for (let i = 0; i < filterCol.length; i++) {
    const columnName = filterCol[i].id;
    const filterVal = filterCol[i].value
      .toLowerCase()
      .replace(/([^a-zA-Z0-9])/g, "\\$1");
    if (columnName !== "") {
      tableData = tableData.filter((pr) =>
        pr[columnName].toString().toLowerCase().match(filterVal)
      );
    }
  }
  return tableData;
}
