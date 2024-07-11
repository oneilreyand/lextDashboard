import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItemContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  cursor: pointer;
  transition: background-color 0.3s;
  border-radius: 8px;
  background-color: ${({ isActive }) => (isActive ? '#5D87ff' : 'transparent')}; /* Background color based on isActive */
  color: ${({ isActive }) => (isActive ? '#ffffff' : 'black')}; /* Text color based on isActive */

  &:hover {
    // background-color: ${({ isActive }) => (isActive ? '#ffffff' : '#f0f0f0')}; /* Hover background color */
  }
`;

export const MenuIcon = styled.img`
  margin-right: 10px;
  height: 24px;
  width: 24px;
  filter: ${({ isActive }) => (isActive ? 'none' : 'invert(1)')}; /* Invert the icon color if not active */
`;

export const MenuTitle = styled.span`
font-size: 0.875rem;
font-weight: 300;
line-height: 1.334rem;
`;

export const Links = styled(Link)`
  text-decoration: none; /* Remove underline */
  color: inherit; /* Inherit text color */
`;
