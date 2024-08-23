import React from 'react';
import styled from 'styled-components';
import AppHeader from './appHeader';

// Styled Button Component
const NavButton = styled.button`
  background-color: #007bff; /* Primary blue */
  color: #ffffff; /* White text color */
  font-size: 1rem;
  padding: 15px 30px;
  border: none;
  border-radius: 5px; /* Rounded corners */
  cursor: pointer;
  transition: background-color 300ms, transform 300ms, box-shadow 300ms;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Soft shadow for a floating effect */

  &:hover {
    background-color: #0056b3; /* Darker blue on hover */
    transform: scale(1.05); /* Slight zoom effect on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2); /* Enhanced shadow on hover */
  }

  &:active {
    background-color: #004085; /* Even darker blue when clicked */
    transform: scale(0.98); /* Slightly reduce size on click */
  }
`;

// Usage in component
const Nav = () => (
  <>
    <AppHeader />
    
  </>
);

export default Nav;
