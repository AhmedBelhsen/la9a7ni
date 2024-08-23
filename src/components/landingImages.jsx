import React from 'react';
import styled, { createGlobalStyle } from 'styled-components'; // Import createGlobalStyle
import dogCat from '../assets/images/pet1.jpg';
import humain from '../assets/images/img2.jpg';
import { Link } from 'react-router-dom';
import { Routes } from '../configs/routes';

// Apply these styles globally in your app or in a global styles file
const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    overflow: hidden; /* Prevent scrolling */
  }
`;

// Styled Section Component
const Section = styled.section`
  display: flex;
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  margin: 0;
  overflow: hidden;
  background-color: #f8f9fa;
  padding-top: 75px; /* Top padding for header */
  padding-left: 0; /* Remove left padding */
  padding-right: 20px; /* Right padding */
  padding-bottom: 20px; /* Bottom padding */
  box-sizing: border-box;
  gap: 75px;
`;

// Styled Product Component
const Product = styled.div`
  flex: 1;
  position: relative;
  cursor: pointer;
  background-color: #ffffff;
  overflow: hidden;
  transition: transform 300ms, box-shadow 300ms, border-radius 300ms;
  height: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 20px; /* Rounded corners for the product */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15); /* Subtle shadow by default */

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.25); /* Enhanced shadow on hover */
  }

  &:hover .product-button {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &::before {
    content: "";
    background-image: linear-gradient(
      to bottom,
      hsla(200, 60%, 90%, 0.5),
      hsla(200, 60%, 80%, 0.6)
    );
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 300ms;
  }

  &:hover::before {
    transform: scaleY(1);
    transform-origin: top;
  }
`;

// Styled Product Image Component
const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px; /* Match border-radius */
`;

// Styled Product Button Component
const ProductButton = styled.button`
  color: #ffffff;
  font-size: 1.2rem;
  background-color: #007bff;
  padding: 1rem 1.5rem;
  border-radius: 30px; /* Larger radius for a pill shape */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: opacity 300ms, transform 300ms, background-color 300ms, box-shadow 300ms;
  border: none;
  cursor: pointer;
  text-align: center;
  z-index: 10;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow for button */

  &:hover {
    background-color: #0056b3;
    color: #f8f9fa;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }
`;

const LandingImages = () => (
  <>
    <GlobalStyle /> {/* Apply global styles */}
    <Section>
      <Product>
        <ProductImg src={dogCat} alt="dog and cat" />
        <Link to={Routes.PETVAC}>
        <ProductButton className="product-button">I am a pet owner</ProductButton>
        </Link>
      </Product>
      <Product>
        <ProductImg src={humain} alt="human" />
        <Link to={Routes.HUMANVAC}>
        <ProductButton className="product-button">I want to get vaccinated</ProductButton>
        </Link>
      </Product>
    </Section>
  </>
);

export default LandingImages;
