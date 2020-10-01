import React from "react";

const Pagination = (props) => {
  const { itemCount, pageSize, currentPage, onPageChange } = props;
  let pageCount = itemCount / pageSize;
  pageCount =
    Math.floor(pageCount) !== pageCount ? Math.floor(pageCount) + 1 : pageCount;
  if (pageCount === 1) return null;
  const pages = [...Array(pageCount).keys()].map((val) => ++val);
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
              href="/#"
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
