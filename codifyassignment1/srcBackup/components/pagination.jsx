import React, { Component } from "react";

class Pagination extends Component {
  render() {
    const {
      currentPage,
      pageSize,
      personRecordsCount,
      onPageChange,
    } = this.props;
    let pageCount = personRecordsCount / pageSize;
    pageCount =
      Math.floor(pageCount) !== pageCount
        ? Math.floor(pageCount) + 1
        : pageCount;
    if (pageCount === 1) return null;
    const pages = [...Array(pageCount).keys()].map((k) => ++k);
    return (
      <nav>
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
                href="#"
                onClick={() => onPageChange(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

export default Pagination;
