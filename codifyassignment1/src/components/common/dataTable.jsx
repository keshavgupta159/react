import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class DataTable extends Component {
  render() {
    const {
      tableData,
      columnHead,
      onKeyupFilterData,
      sortColumn,
      onClickSort,
    } = this.props;

    return (
      <table className="table table-striped table-dark mt-2 text-nowrap">
        <TableHeader
          columnHead={columnHead}
          sortColumn={sortColumn}
          onClickSort={onClickSort}
        />
        <TableBody
          tableData={tableData}
          columnHead={columnHead}
          onKeyupFilterData={onKeyupFilterData}
        />
      </table>
    );
  }
}

export default DataTable;
