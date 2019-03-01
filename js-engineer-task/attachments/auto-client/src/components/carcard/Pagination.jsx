import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ first, next, prev, last, page, totalPageCount }) => {
  return (
    <div className="pagination">
      <Link to={first}>First</Link>
      <Link to={prev}>Prev</Link>
      <p>
        Page {page} of {totalPageCount}
      </p>
      <Link to={next}>Next</Link>
      <Link to={last}>last</Link>
    </div>
  );
};

export default Pagination;
