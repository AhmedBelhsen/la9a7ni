import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  position: absolute; /* Position the header absolutely */
  top: 0;
  left: 0;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  background-color: #ffffff; /* White background */
  margin: 0; /* Remove default margin */
`;

const NavButton = styled.button`
  background-color: #1D3557; /* Primary blue */
  color: #ffffff; /* White text color */
  font-size: 1rem;
  padding: 8px 16px; /* Adjust padding for a smaller button */
  border: none;
  border-radius: 4px; /* Rounded corners */
  cursor: pointer;
  position: absolute; /* Position the button absolutely within the header */
  top: 10px; /* Minimal space from the top */
  left: 10px; /* Minimal space from the left */
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

const AppHeader = () => (
  <Header>
    <Link to="/">
    <NavButton>
      Back
    </NavButton>
    </Link>
  </Header>
);

export default AppHeader;

