import React, { Component } from "react";

//columns:array
//sortColumn: object
//onClickSort: function

class TableHeader extends Component {
  raiseSort = (colName) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.colName === colName)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.colName = colName;
      sortColumn.order = "asc";
    }
    this.props.onClickSort(sortColumn);
  };

  renderSortIcon = (column) => {
    if (column.colName !== this.props.sortColumn.colName) return null;
    return (
      <i
        className={
          this.props.sortColumn.order === "asc"
            ? "fa fa-sort-asc"
            : "fa fa-sort-desc"
        }
        aria-hidden="true"
      ></i>
    );
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column) => (
            <th
              key={column.colName}
              className="clickable"
              onClick={() => this.raiseSort(column.colName)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
