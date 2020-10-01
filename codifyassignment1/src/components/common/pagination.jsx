import React, { Component } from "react";

class Pagination extends Component {
  renderRecordsPerPageJsx = () => {
    const myStyle = {
      paddingTop: "15px",
    };
    return (
      <React.Fragment>
        <div className="col-1">
          <h6 style={myStyle}>Records Per Page</h6>
        </div>
        <div className="col-1">
          <input
            className="form-control"
            type="number"
            onKeyUp={this.props.onKeyupPageSize}
            onFocusCapture={this.props.onKeyupPageSize}
            placeholder={this.props.pageSize}
          />
        </div>
      </React.Fragment>
    );
  };

  render() {
    const { currentPage, pageSize, recordLength, onPageChange } = this.props;
    let pageCount = recordLength / pageSize;
    pageCount =
      Math.floor(pageCount) !== pageCount
        ? Math.floor(pageCount) + 1
        : pageCount;

    if (pageCount === 1)
      return (
        <nav className="row">
          <div className="col-9"></div>
          {this.renderRecordsPerPageJsx()}
        </nav>
      );

    const pages = [...Array(pageCount).keys()].map((k) => ++k);
    return (
      <nav className="row">
        <div className="col-9">
          <ul className="pagination">
            {pages.map((pageNumber) => (
              <li
                className={
                  pageNumber === currentPage ? "page-item active" : "page-item"
                }
                key={pageNumber}
              >
                <a
                  className="page-link"
                  href="\#"
                  onClick={() => onPageChange(pageNumber)}
                >
                  {pageNumber}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {this.renderRecordsPerPageJsx()}
      </nav>
    );
  }
}

export default Pagination;
