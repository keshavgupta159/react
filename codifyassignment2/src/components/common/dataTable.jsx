import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBodyParent from "./tableBodyParent";

class DataTable extends Component {
  render() {
    const {
      tableData,
      tableHead,
      onKeyupFilterData,
      sortColumn,
      onClickSort,
      onClickGroup,
      groupedTableData,
    } = this.props;

    return (
      <table className="table table-bordered mt-2 text-nowrap" id="dt">
        <TableHeader
          tableHead={tableHead}
          sortColumn={sortColumn}
          onClickSort={onClickSort}
        />
        <TableBodyParent
          tableData={tableData}
          tableHead={tableHead}
          onKeyupFilterData={onKeyupFilterData}
          onClickGroup={onClickGroup}
          groupedTableData={groupedTableData}
        />
      </table>
    );
  }
}

export default DataTable;
