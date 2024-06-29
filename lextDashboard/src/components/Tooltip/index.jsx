import { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;
`;

const TooltipContent = styled.div`
  visibility: ${({ visible }) => (visible ? 'visible' : 'hidden')};
  position: absolute;
  z-index: 1;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px;
  white-space: nowrap;
  font-size: 14px;
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  transition: opacity 0.3s;
  left: ${({ placement }) =>
    placement === 'right' ? '110%' : placement === 'left' ? '-110%' : '50%'};
  top: ${({ placement }) =>
    placement === 'bottom' ? '110%' : placement === 'top' ? '-110%' : '50%'};
  transform: ${({ placement }) =>
    placement === 'left' || placement === 'right' ? 'translateY(-50%)' : 'translateX(-50%)'};
`;

const Tooltip = ({ content, children, placement }) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <TooltipContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {children}
      <TooltipContent visible={isVisible} placement={placement}>
        {content}
      </TooltipContent>
    </TooltipContainer>
  );
};

Tooltip.propTypes = {
  content: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  placement: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
};

Tooltip.defaultProps = {
  placement: 'top',
};

export default Tooltip;
