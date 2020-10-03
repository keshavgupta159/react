import React, { Component } from "react";
import FilterRow from "./filterRow";

class TableBody extends Component {
  render() {
    const { tableData, tableHead, onKeyupFilterData } = this.props;
    return (
      <tbody>
        <FilterRow
          tableHead={tableHead}
          onKeyupFilterData={onKeyupFilterData}
        />
        {tableData.map((tableData) => (
          <tr key={tableData.ID}>
            {tableHead.map((keysArr) => (
              <td key={tableData[keysArr.colName]}>
                {tableData[keysArr.colName]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
