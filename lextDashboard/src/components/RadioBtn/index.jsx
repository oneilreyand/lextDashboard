import PropTypes from 'prop-types';
import {
  RadioButtonWrapper,
  HiddenRadio,
  StyledRadio,
  Label,
} from './RadioBtnElements';

const RadioButton = ({ className, checked, label, onChange, id }) => (
  <RadioButtonWrapper className={className}>
    <HiddenRadio id={id} checked={checked} onChange={onChange} />
    <StyledRadio checked={checked} />
    <Label htmlFor={id}>{label}</Label>
  </RadioButtonWrapper>
);

RadioButton.propTypes = {
  className: PropTypes.string,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default RadioButton;

