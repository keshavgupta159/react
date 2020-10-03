import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class DataTable extends Component {
  render() {
    const {
      tableData,
      tableHead,
      onKeyupFilterData,
      sortColumn,
      onClickSort,
    } = this.props;

    return (
      <table
        className="table table-striped table-dark mt-2 text-nowrap"
        id="dt"
      >
        <TableHeader
          tableHead={tableHead}
          sortColumn={sortColumn}
          onClickSort={onClickSort}
        />
        <TableBody
          tableData={tableData}
          tableHead={tableHead}
          onKeyupFilterData={onKeyupFilterData}
        />
      </table>
    );
  }
}

export default DataTable;
