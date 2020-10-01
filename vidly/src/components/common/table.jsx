import React from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = (props) => {
  const { data, columns, sortColumn, onClickSort } = props;
  return (
    <table className="table mt-2">
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onClickSort={onClickSort}
      />
      <TableBody tableData={data} columns={columns} />
    </table>
  );
};

export default Table;
