import React, { Component } from "react";
import FilterRow from "./filterRow";

class TableBody extends Component {
  render() {
    const { tableData, tableHead, onKeyupFilterData } = this.props;
    return (
      <React.Fragment>
        <FilterRow
          tableHead={tableHead}
          onKeyupFilterData={onKeyupFilterData}
        />
        {tableData.map((tableData) => (
          <tr key={tableHead.map((keysArr) => tableData[keysArr.colName])}>
            {tableHead.map((keysArr) => (
              <td key={tableData[keysArr.colName]}>
                {tableData[keysArr.colName]}
              </td>
            ))}
          </tr>
        ))}
      </React.Fragment>
    );
  }
}

export default TableBody;
