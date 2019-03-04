import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import querystring from 'query-string';

const Pagination = ({ currentPage, totalPages, location }) => {
  let start, finish;
  const pageNumbers = [];
  if(currentPage <= 5) {
    start = 1;
    finish = 10;
  } else if (currentPage >= totalPages - 5) {
    start = totalPages - 9;
    finish = totalPages;
  } else {
    start = currentPage - 4;
    finish = currentPage + 5;
  }

  function buildQuery(query = {}) {
    const currentSearch = querystring.parse(location.search);
    return querystring.stringify({ ...currentSearch, ...query });
  }

  for (let i = start; i <= finish; i++) {
    pageNumbers.push((
      <li className={`page-item${i === currentPage ? ' active' : ''}`} key={`index-${i}`}>
        <a className="page-link" href={`${location.pathname}?${buildQuery({ page: i })}`}>{i}</a>
      </li>
    ));
  }
  
  function goToPage(number) {
    window.location.href = `${location.pathname}?${buildQuery({ page: number })}`
  }

  function first() {
    goToPage(1);
  }

  function last() {
    goToPage(totalPages);
  }

  function next() {
    goToPage(currentPage + 1);
  }

  function previous() {
    goToPage(currentPage - 1);
  }
  
  return (
    <ul className="pagination justify-content-center" style={{ cursor: 'pointer' }}>
      <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`} onClick={first}>
        <span className="page-link">First</span>
      </li>
      <li className={`page-item${currentPage === 1 ? ' disabled' : ''}`} onClick={previous}>
        <span className="page-link">Previous</span>
      </li>
      {pageNumbers}
      <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`} onClick={next}>
        <span className="page-link">Next</span>
      </li>
      <li className={`page-item${currentPage === totalPages ? ' disabled' : ''}`} onClick={last}>
        <span className="page-link">Last</span>
      </li>
    </ul>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
};

export default withRouter(Pagination);
