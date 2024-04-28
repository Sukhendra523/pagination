import React from "react";
import '../styles/Pagination.scss';

const Pagination = ({ pages, setOffset, setPages, lastPage }) => {
  return (
    <div className="pagination-container">
      <button
        style={{ display: `${pages[0] == 1 ? "none" : "block"}` }}
        onClick={() => {
          setOffset((p) => p - 10);
          setPages((prevPages) => prevPages.map((p) => p - 1));
        }}
      >
        Prev
      </button>
      <div className="page-list">
        {pages.map((p) => (
          <button onClick={() => setOffset(p * 10)}>{p}</button>
        ))}
      </div>
      <button
        style={{ display: `${pages[2]==lastPage ? "none" : "block"}` }}
        onClick={() => {
          setOffset((p) => p + 10);
          setPages((prevPages) => prevPages.map((p) => p + 1));
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
