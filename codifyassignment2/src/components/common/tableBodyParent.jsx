import React, { Component } from "react";
import TableBody from "./tableBody";

class TableBodyParent extends Component {
  render() {
    const {
      tableData,
      tableHead,
      onKeyupFilterData,
      onClickGroup,
      groupedTableData,
    } = this.props;
    // groupedTableData.map((gd) => console.log(Object.keys(gd)[0].split(": ")));

    return (
      <React.Fragment>
        {groupedTableData.map((gd) => (
          <tbody key={Object.keys(gd)[0]}>
            <tr
              onClick={() =>
                onClickGroup({
                  colName: Object.keys(gd)[0].split(": ")[0],
                  colValue: Object.keys(gd)[0].split(": ")[1],
                })
              }
            >
              <th colSpan={tableHead.length} className="clickable">
                {Object.keys(gd)[0]}
                {gd[Object.keys(gd)[0]].length > 0 ? (
                  <i
                    className="fa fa-caret-down"
                    aria-hidden="true"
                    style={{
                      paddingLeft: "10px",
                      fontSize: "20px",
                      fontWeight: "bolder",
                    }}
                  />
                ) : (
                  <i
                    className="fa fa-caret-right"
                    aria-hidden="true"
                    style={{
                      paddingLeft: "10px",
                      fontSize: "20px",
                      fontWeight: "bolder",
                    }}
                  />
                )}
              </th>
            </tr>
            {gd[Object.keys(gd)[0]].length > 0 ? (
              <TableBody
                tableData={tableData}
                tableHead={tableHead}
                onKeyupFilterData={onKeyupFilterData}
              />
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </tbody>
        ))}
      </React.Fragment>
    );
  }
}

export default TableBodyParent;
