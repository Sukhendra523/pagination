import React from "react";
import '../styles/Pagination.scss';

const Pagination = ({ page, setPage, totalPages, maxVisiblePage = 5 }) => {

  const renderPageKey = (currPage, key) => {
    return (
      <button
        key={key}
        className={page === currPage ? "pagination__selected" : ""}
        onClick={() => setPage(currPage)}
      >
        {currPage}
      </button>
    );
  };

  const renderPageList = () => {
    const pageNumbers = [];
    if (totalPages <= maxVisiblePage) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(renderPageKey(i));
      }
    } else {
      const startPage = Math.max(1, page - Math.floor(maxVisiblePage / 2));
      const endPage = Math.min(totalPages, startPage + maxVisiblePage - 1);

      if (startPage > 2) {
        if (startPage > 2) {
          pageNumbers.push(renderPageKey(1, 1));
        }
        pageNumbers.push(renderPageKey('...', 'start-page'));
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(renderPageKey(i, i));
      }

      if (endPage < totalPages) {

        pageNumbers.push(renderPageKey('...', 'end-page'));

        if (endPage < totalPages - 1) {
          pageNumbers.push(renderPageKey(totalPages, totalPages));
        }
      }
    }

    return pageNumbers
  }

  return (
    <div className="pagination-container">
      <button
        style={{ display: `${page == 1 ? "none" : "block"}` }}
        onClick={() => {
          setPage((p) => p - 1);
        }}
      >
        Prev
      </button>
      <div className="page-list">
        {renderPageList()}
      </div>
      <button
        style={{ display: `${page == totalPages ? "none" : "block"}` }}
        onClick={() => {
          setPage((p) => p + 1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
