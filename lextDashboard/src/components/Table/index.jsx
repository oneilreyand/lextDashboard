import PropTypes from 'prop-types';
import {
  StyledTable,
  StyledTableHead,
  StyledTableBody,
  StyledTableRow,
  StyledTableCell,
  StyledTableHeaderCell,
  Avatar
} from './tableElements';

// Table component
const Table = ({ children }) => (
  <StyledTable>{children}</StyledTable>
);

Table.propTypes = {
  children: PropTypes.node.isRequired,
};

// Table Head component
const TableHead = ({ children }) => (
  <StyledTableHead>{children}</StyledTableHead>
);

TableHead.propTypes = {
  children: PropTypes.node.isRequired,
};

// Table Body component
const TableBody = ({ children }) => (
  <StyledTableBody>{children}</StyledTableBody>
);

TableBody.propTypes = {
  children: PropTypes.node.isRequired,
};

// Table Row component
const TableRow = ({ children }) => (
  <StyledTableRow>{children}</StyledTableRow>
);

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
};

// Table Cell component
const TableCell = ({ children }) => (
  <StyledTableCell>{children}</StyledTableCell>
);

TableCell.propTypes = {
  children: PropTypes.node.isRequired,
};

// Table Header Cell component
const TableHeaderCell = ({ children }) => (
  <StyledTableHeaderCell>{children}</StyledTableHeaderCell>
);

TableHeaderCell.propTypes = {
  children: PropTypes.node.isRequired,
};

// Export components
export { Table, TableHead, TableBody, TableRow, TableCell, TableHeaderCell, Avatar };
