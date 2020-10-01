import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell = (item, column) => {
    return !column.content ? _.get(item, column.colName) : column.content(item);
  };

  render() {
    const { tableData, columns } = this.props;
    return (
      <tbody>
        {tableData.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={item._id + column.colName}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
