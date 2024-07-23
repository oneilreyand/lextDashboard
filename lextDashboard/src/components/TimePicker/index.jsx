// src/components/TimePicker.js
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TimePickerWrapper = styled.div`
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

const TimePicker = ({ value, onChange }) => {
  return (
    <TimePickerWrapper>
      <Input type="time" value={value} onChange={onChange} />
    </TimePickerWrapper>
  );
};

TimePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TimePicker;
