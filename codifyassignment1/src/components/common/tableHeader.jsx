import React, { Component } from "react";

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
        style={{ paddingLeft: "10px" }}
        aria-hidden="true"
      ></i>
    );
  };

  render() {
    const { columnHead } = this.props;
    return (
      <thead>
        <tr className="text-center">
          {columnHead.slice(1, columnHead.length).map((tHeader) => (
            <th
              key={tHeader.colName}
              className="clickable"
              onClick={() => this.raiseSort(tHeader.colName)}
            >
              {tHeader.colLabel}
              {this.renderSortIcon(tHeader)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
