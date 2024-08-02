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
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  left: ${({ placement }) =>
    placement === 'right'
      ? '100%' : placement === 'left'
      ? '-100%' : '50%'};
  top: ${({ placement }) =>
    placement === 'bottom'
      ? '100%' : placement === 'top'
      ? '-100%' : '0%'};
  transform: ${({ placement }) =>
    placement === 'left'
      ? 'translateX(-100%) translateY(-50%)' : placement === 'right'
      ? 'translateX(0%) translateY(-50%)' : placement === 'top'
      ? 'translateX(-50%) translateY(-100%)' : 'translateX(-50%) translateY(0%)'};
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
