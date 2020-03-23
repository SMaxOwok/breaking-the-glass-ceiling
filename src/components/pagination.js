import React from "react";
import { Link } from "gatsby";

const Pagination = ({ prevPage, nextPage }) => (
  <div className="Pagination">
    {!!prevPage && (
      <Link
        className="Pagination__link"
        to={prevPage}
      >
        Previous Page
      </Link>
    )}

    {!!nextPage && (
      <Link
        className="Pagination__link"
        to={nextPage}
      >
        Next Page
      </Link>
    )}
  </div>
);

export default Pagination;
