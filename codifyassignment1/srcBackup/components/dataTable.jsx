import React, { Component } from "react";

class DataTable extends Component {
  render() {
    const { tableData, columnData, objKeysArr, onClickFilterData } = this.props;
    return (
      <table className="table table-bordered mt-2 text-nowrap">
        <thead>
          <tr>
            {columnData.map((tableheader) => (
              <th key={tableheader}>{tableheader}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {objKeysArr.map((tHeader) => (
              <th key={tHeader}>
                <input
                  id={tHeader}
                  type="text"
                  className="filterCol"
                  onKeyUp={onClickFilterData}
                />
              </th>
            ))}
          </tr>
          {tableData.map((tableData) => (
            <tr key={tableData.ID}>
              {objKeysArr.map((keysArr) => (
                <td key={tableData[keysArr]}>{tableData[keysArr]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default DataTable;
