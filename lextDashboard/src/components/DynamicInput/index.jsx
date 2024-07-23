import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

const InputWrapper = styled.div`
  margin-bottom: 1rem;
  position: relative;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
  color: #aaa;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 0.875rem;
`;

const InfoMessage = styled.span`
  color: #666;
  font-size: 0.875rem;
`;

const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 0;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: white;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
`;

const ItemCount = styled.div`
  padding: 0.5rem;
  font-size: 0.875rem;
  color: #666;
  background: #f0f0f0;
  border-top: 1px solid #ccc;
`;

const DynamicInput = ({ label, placeholder, value, name, onChange, type, error, info, disabled, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
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
    document.addEventListener('mousedown', closeDropdown);
    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, []);

  const itemCount = React.Children.count(children);

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
        <Dropdown>
          <ItemCount>{itemCount} items</ItemCount>
          {children}
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
  disabled: PropTypes.bool.isRequired,
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
