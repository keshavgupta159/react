import React from "react";

const FilterRow = (props) => {
  const { columnHead, onKeyupFilterData } = props;
  return (
    <tr className="text-center">
      {columnHead.slice(1, columnHead.length).map((tHeader) => (
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
