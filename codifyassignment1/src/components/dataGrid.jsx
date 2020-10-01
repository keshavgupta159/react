import React, { Component } from "react";
import { getRecords, getColumn } from "../data/data";
import { getFilteredData } from "../utils/filter";
import { getPaginatedData } from "../utils/paginate";
import { getSortedData } from "../utils/sort";
import DataTable from "./common/dataTable";
import Pagination from "./common/pagination";

class DataGrid extends Component {
  state = {
    personRecords: [],
    dispPersonRecords: [],
    columnHead: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { colName: "ID", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      personRecords: getRecords(),
      dispPersonRecords: getRecords(),
      columnHead: getColumn(),
    });
  }

  //lamda expression -> fnName = (params) => {functionality}; fnName is anonymous function
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleFilterData = () => {
    const dispPersonRecords = getFilteredData(this.state.personRecords);
    this.setState({ dispPersonRecords });
  };

  handlePageSize = (event) => {
    this.setState({
      pageSize:
        event.target.value > 0 ? event.target.value : this.state.pageSize,
    });
  };

  handlerSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  render() {
    const { columnHead, currentPage, pageSize, sortColumn } = this.state;
    let dispPersonRecords = this.state.dispPersonRecords;
    const recordLength = dispPersonRecords.length;
    dispPersonRecords = getSortedData(dispPersonRecords, sortColumn);
    dispPersonRecords = getPaginatedData(
      dispPersonRecords,
      currentPage,
      pageSize
    );

    return (
      <React.Fragment>
        <h3 className="text-center mt-5">Companies Data</h3>
        <DataTable
          tableData={dispPersonRecords}
          columnHead={columnHead}
          onKeyupFilterData={this.handleFilterData}
          onClickSort={this.handlerSort}
          sortColumn={sortColumn}
        />
        <Pagination
          currentPage={currentPage}
          pageSize={pageSize}
          onPageChange={this.handlePageChange}
          recordLength={recordLength}
          onKeyupPageSize={this.handlePageSize}
        />
      </React.Fragment>
    );
  }
}

export default DataGrid;
