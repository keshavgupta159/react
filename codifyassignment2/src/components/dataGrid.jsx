import React, { Component } from "react";
import { getFilteredData } from "../utils/filter";
import { getPaginatedData } from "../utils/paginate";
import { getSortedData } from "../utils/sort";
import { getFilteredGroupedData } from "../utils/groupData";
import DataTable from "./common/dataTable";
import Pagination from "./common/pagination";

class DataGrid extends Component {
  state = {
    tableData: [],
    dispTableData: [],
    tableHead: [],
    dispTableHead: [],
    currentPage: 1,
    pageSize: 50,
    groupBy: {},
    sortColumn: { colName: "", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      tableData: this.props.tableData,
      tableHead: this.props.tableHeads,
      groupBy: this.props.groupBy,
      dispTableData: this.props.tableData,
    });
  }

  //lamda expression -> fnName = (params) => {functionality}; fnName is anonymous function
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleFilterData = () => {
    const dispTableData = this.state.tableData;
    this.setState({ dispTableData });
  };

  handlePageSize = (event) => {
    this.setState({
      pageSize:
        event.target.value > 0 ? event.target.value : this.state.pageSize,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({ sortColumn });
  };

  handleGroup = (groupBy) => {
    this.setState({ groupBy });
  };

  render() {
    const {
      currentPage,
      pageSize,
      sortColumn,
      tableHead,
      groupBy,
    } = this.state;
    let dispTableData = this.state.dispTableData;
    let groupedTableData = getFilteredGroupedData(dispTableData, groupBy);
    let recordLength = dispTableData.length;
    for (let i = 0; i < groupedTableData.length; i++) {
      const objKey = Object.keys(groupedTableData[i])[0];
      if (groupedTableData[i][objKey].length !== 0) {
        dispTableData = groupedTableData[i][objKey];
        recordLength = groupedTableData[i][objKey].length;
      }
    }
    dispTableData = getSortedData(dispTableData, sortColumn);
    dispTableData = getPaginatedData(dispTableData, currentPage, pageSize);
    return (
      <React.Fragment>
        <h3 className="text-center mt-2 mb-3">Product Sales Data</h3>
        <DataTable
          tableData={dispTableData}
          tableHead={tableHead}
          onKeyupFilterData={this.handleFilterData}
          onClickSort={this.handleSort}
          sortColumn={sortColumn}
          onClickGroup={this.handleGroup}
          groupedTableData={groupedTableData}
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
