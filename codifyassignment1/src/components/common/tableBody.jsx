import React, { Component } from "react";
import FilterRow from "./filterRow";

class TableBody extends Component {
  render() {
    const { tableData, columnHead, onKeyupFilterData } = this.props;
    return (
      <tbody>
        <FilterRow
          columnHead={columnHead}
          onKeyupFilterData={onKeyupFilterData}
        />
        {tableData.map((tableData) => (
          <tr key={tableData.ID}>
            {columnHead.slice(1, columnHead.length).map((keysArr) => (
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
