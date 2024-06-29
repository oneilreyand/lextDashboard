import PropTypes from 'prop-types';
import {
  InputWrapper,
  StyledLabel,
  StyledInput,
  StyledSelect,
  ErrorMessage,
  Info,
  MessageWrapper,
} from './dynamicInputElements';

const DynamicInput = ({
  type,
  label,
  value,
  onChange,
  info,
  placeholder,
  error,
  disabled,
  name,
  options,
  isLarge,
}) => (
  <InputWrapper>
    <StyledLabel htmlFor={name}>{label}</StyledLabel>
    {type === 'select' ? (
      <StyledSelect id={name} name={name} value={value} onChange={onChange} disabled={disabled}>
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </StyledSelect>
    ) : (
      <StyledInput
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        hasError={!!error}
        disabled={disabled}
        isLarge={isLarge}
      />
    )}
    <MessageWrapper>
      {info && <Info>{info}</Info>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </MessageWrapper>
  </InputWrapper>
);

DynamicInput.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'select']).isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  isLarge: PropTypes.bool,
  info: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
};

DynamicInput.defaultProps = {
  placeholder: '',
  error: '',
  disabled: false,
  options: [],
  isLarge: false,
  info: '',
};

export default DynamicInput;
