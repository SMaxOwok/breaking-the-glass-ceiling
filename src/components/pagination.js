import React from "react";
import { Link } from "gatsby";

const Pagination = ({ prevPage, nextPage }) => (
  <div className="Pagination">
    {!!prevPage && (
      <Link
        className="Pagination__link"
        to={prevPage}
      >
        Newer Episodes
      </Link>
    )}

    {!!nextPage && (
      <Link
        className="Pagination__link"
        to={nextPage}
      >
        Older Episodes
      </Link>
    )}
  </div>
);

export default Pagination;
