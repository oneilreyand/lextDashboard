import PropTypes from 'prop-types';
import { StyledButton, IconWrapper } from './buttonElements.jsx';

const Button = ({ variant, size, disabled, children, icon, iconPosition, button_isactive, onClick }) => (
  <StyledButton variant={variant} size={size} disabled={disabled} button_isactive={button_isactive} onClick={onClick}>
    {icon && iconPosition === 'left' && <IconWrapper iconPosition={iconPosition}>{icon}</IconWrapper>}
    {children}
    {icon && iconPosition === 'right' && <IconWrapper iconPosition={iconPosition}>{icon}</IconWrapper>}
  </StyledButton>
);

Button.propTypes = {
  variant: PropTypes.oneOf(['contained', 'outline']).isRequired,
  size: PropTypes.oneOf(['large', 'small']).isRequired,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  button_isactive: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  iconPosition: 'left',
  button_isactive: false,
  variant: 'contained',
  onClick: () => {},
};

export default Button;
