import React from "react";
import { Link } from "gatsby";

const Pagination = ({ prevPage, nextPage }) => (
  <div className="Pagination">
    {!!prevPage && (
      <Link
        className="Pagination__link Pagination__link--prev"
        to={prevPage}
      >
        Newer
      </Link>
    )}

    {!!nextPage && (
      <Link
        className="Pagination__link Pagination__link--next"
        to={nextPage}
      >
        Older
      </Link>
    )}
  </div>
);

export default Pagination;
