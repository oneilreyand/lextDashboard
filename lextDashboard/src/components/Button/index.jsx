// Button.jsx
import PropTypes from 'prop-types';
import { StyledButton, IconWrapper } from './buttonElements';

const Button = ({ variant, size, disabled, children, icon, iconPosition, onClick }) => (
  <StyledButton variant={variant} size={size} disabled={disabled} onClick={onClick}>
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
  onClick: PropTypes.func.isRequired, // Pastikan onClick diisi dan diteruskan
};

Button.defaultProps = {
  disabled: false,
  icon: null,
  iconPosition: 'left',
};

export default Button;
