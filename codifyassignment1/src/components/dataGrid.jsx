import React, { Component } from "react";
import { getFilteredData } from "../utils/filter";
import { getPaginatedData } from "../utils/paginate";
import { getSortedData } from "../utils/sort";
import DataTable from "./common/dataTable";
import Pagination from "./common/pagination";
import Settings from "./settings";

class DataGrid extends Component {
  state = {
    tableData: [],
    dispTableData: [],
    tableHead: [],
    dispTableHead: [],
    currentPage: 1,
    pageSize: 5,
    sortColumn: { colName: "ID", order: "asc" },
  };

  componentDidMount() {
    this.setState({
      tableData: this.props.tableData,
      dispTableData: this.props.tableData,
      tableHead: this.props.tableHeads,
      dispTableHead: this.props.tableHeads,
    });
    this.handleFliterCol();
  }

  //lamda expression -> fnName = (params) => {functionality}; fnName is anonymous function
  handlePageChange = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleFilterData = () => {
    const dispTableData = getFilteredData(this.state.tableData);
    this.setState({ dispTableData });
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

  handleFliterCol = () => {
    const objSelectShowCol = document.getElementsByClassName("showCol");
    const { tableHead } = this.state;
    let dispTableHead = [];
    for (let i = 0; i < objSelectShowCol.length; i++) {
      if (objSelectShowCol[i].checked) {
        let tempObj = {};
        tempObj = tableHead.filter(
          (thead) => thead.colName === objSelectShowCol[i].value
        );
        if (tempObj !== {}) dispTableHead.push(...tempObj);
      }
    }
    this.setState({ dispTableHead });
  };

  render() {
    const {
      tableHead,
      currentPage,
      pageSize,
      sortColumn,
      dispTableHead,
    } = this.state;
    let dispTableData = this.state.dispTableData;
    const recordLength = dispTableData.length;
    dispTableData = getSortedData(dispTableData, sortColumn);
    dispTableData = getPaginatedData(dispTableData, currentPage, pageSize);
    return (
      <React.Fragment>
        <h3 className="text-center mt-2 mb-3">Companies Data</h3>
        <Settings
          tableHead={tableHead}
          onClickFliterCol={this.handleFliterCol}
        />
        <DataTable
          tableData={dispTableData}
          tableHead={dispTableHead}
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
