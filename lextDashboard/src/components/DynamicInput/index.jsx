import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import {
  InputWrapper,
  Label,
  Input,
  ErrorMessage,
  InfoMessage,
  Dropdown,
  ItemCount
} from './dynamicInputElements.jsx';

const DynamicInput = ({ label, placeholder, value, name, onChange, type, error, info, disabled, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [inputWidth, setInputWidth] = useState(0);
  const wrapperRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = (e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (wrapperRef.current) {
      setInputWidth(wrapperRef.current.offsetWidth);
    }
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const itemCount = React.Children.count(children);

  const handleItemClick = (callback) => {
    callback();
    setIsDropdownOpen(false); // Close the dropdown on item click
  };

  return (
    <InputWrapper ref={wrapperRef}>
      <Label htmlFor={name}>{label}</Label>
      <Input 
        id={name} 
        name={name} 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
        type={type}
        disabled={disabled}
        onClick={toggleDropdown}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {info && !error && <InfoMessage>{info}</InfoMessage>}
      {isDropdownOpen && children && (
        <Dropdown style={{ width: `${inputWidth}px` }}>
          <ItemCount>{itemCount} items</ItemCount>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, { onClick: () => handleItemClick(child.props.onClick) })
          )}
        </Dropdown>
      )}
    </InputWrapper>
  );
};

DynamicInput.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  error: PropTypes.string,
  info: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node,
};

DynamicInput.defaultProps = {
  type: 'text',
  error: '',
  info: '',
  children: null,
  disabled: false,
};

export default DynamicInput;
