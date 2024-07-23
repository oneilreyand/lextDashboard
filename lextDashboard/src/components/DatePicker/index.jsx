// src/components/DatePicker.js
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DatePickerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  &:focus {
    border-color: #3f51b5;
    box-shadow: 0 0 0 2px rgba(63, 81, 181, 0.2);
    outline: none;
  }
`;

const DatePicker = ({ value, onChange }) => {
  return (
    <DatePickerWrapper>
      {/* <Label>{label}</Label> */}
      <Input type="date" value={value} onChange={onChange} />
    </DatePickerWrapper>
  );
};

DatePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default DatePicker;
