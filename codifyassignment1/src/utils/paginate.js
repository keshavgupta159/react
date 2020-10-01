export function getPaginatedData(tableData, currentPage, pageSize) {
  return tableData.slice((currentPage - 1) * pageSize).slice(0, pageSize);
}
