import React from "react";

const FilterRow = (props) => {
  const { tableHead, onKeyupFilterData } = props;
  return (
    <tr className="text-center">
      {tableHead.map((tHeader) => (
        <td key={tHeader.colName}>
          <input
            id={tHeader.colName}
            type="text"
            className="filterCol"
            onKeyUp={onKeyupFilterData}
          />
        </td>
      ))}
    </tr>
  );
};

export default FilterRow;
