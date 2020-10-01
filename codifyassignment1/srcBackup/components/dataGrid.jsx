import React, { Component } from "react";
import { getRecords, getColumnData, getObjKeys } from "../data/data";
import DataTable from "./dataTable";
import Pagination from "./pagination";

class DataGrid extends Component {
  state = {
    personRecords: [],
    columnData: [],
    objKeysArr: [],
    currentPage: 1,
    pageSize: 5,
    filterColumnName: "",
    filterCoulmnData: "",
  };

  componentDidMount() {
    this.setState({
      personRecords: getRecords(),
      columnData: getColumnData(),
      objKeysArr: getObjKeys(),
    });
  }

  //lamda expression -> fnName = (params) => {functionality}; fnName is anonymous function
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleFilterData = (event) => {
    const columnName = event.target.id;
    let columnVal = event.target.value
      .toLowerCase()
      .replace(/([^a-zA-Z0-9])/g, "\\$1");
    this.setState({
      filterColumnName: columnName,
      filterCoulmnData: columnVal,
    });
  };

  render() {
    const {
      personRecords,
      columnData,
      currentPage,
      pageSize,
      objKeysArr,
      filterColumnName,
      filterCoulmnData,
    } = this.state;

    let personRecordsData = personRecords;

    if (filterColumnName !== "")
      personRecordsData = personRecords.filter((pr) =>
        pr[filterColumnName].toString().toLowerCase().match(filterCoulmnData)
      );

    const data = personRecordsData
      .slice((currentPage - 1) * pageSize)
      .slice(0, pageSize);

    return (
      <React.Fragment>
        <h3 className="text-center mt-5">Companies Data</h3>
        <DataTable
          tableData={data}
          columnData={columnData}
          objKeysArr={objKeysArr}
          onClickFilterData={this.handleFilterData}
        />
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          personRecordsCount={personRecordsData.length}
        />
      </React.Fragment>
    );
  }
}

export default DataGrid;
