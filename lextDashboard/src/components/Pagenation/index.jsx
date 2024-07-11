import PropTypes from 'prop-types';
import { PaginationWrapper, PageButton, RowsPerPageSelector } from './pagenationElements';

const Pagination = ({ currentPage, rowsPerPage, totalRows, onPageChange, onRowsPerPageChange }) => {
  const totalPages = Math.ceil(totalRows / rowsPerPage);

  return (
    <PaginationWrapper>
      <div>
        <PageButton onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </PageButton>
        <span> Page {currentPage} of {totalPages} </span>
        <PageButton onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </PageButton>
      </div>
      <div>
        Rows per page:
        <RowsPerPageSelector value={rowsPerPage} onChange={(e) => onRowsPerPageChange(Number(e.target.value))}>
          <option value={5}>5</option>
          <option value={10}>10</option>
        </RowsPerPageSelector>
      </div>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  totalRows: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onRowsPerPageChange: PropTypes.func.isRequired,
};

export default Pagination;
