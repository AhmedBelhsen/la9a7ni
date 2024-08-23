import React from 'react';
import styled from 'styled-components';
import dogCat from '../assets/images/dog-cat.jpeg';
import humain from '../assets/images/humain4.jpeg';

// Styled Components
const Section = styled.section`
  display: grid;
  place-items: center;
  justify-content: space-around;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 400px));
  padding: 1rem;
`;

const Product = styled.div`
  position: relative;
  cursor: pointer;
  background-color: var(--white-color-alt);
  overflow: hidden;
  
  &:hover .product-button {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }

  &::before {
    content: "";
    background-image: linear-gradient(
      to bottom,
      hsla(200, 60%, 80%, 0.438), /* Light shade */
      hsla(200, 60%, 70%, 0.507)  /* Darker shade */
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

const ProductImg = styled.img`
  width: 100%;
  height: auto;
`;

const ProductButton = styled.button`
  color: var(--white-color-alt);
  font-size: 1.2rem;
  background-color: #a9c2e6cc; /* Updated color */
  padding: 1rem 0.4rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  opacity: 0;
  transition: opacity 300ms, transform 300ms, background-color 300ms;
  border: none;
  cursor: pointer;
  text-align: center;
  z-index: 10;

  &:hover {
    background-color: #9ab5d9cc; /* Slightly darker shade on hover */
    color: var(--white-color);
    box-shadow: 0 1rem 0 -0.5rem rgba(169, 194, 230, 0.7),
                0 2rem 0 -1rem rgba(169, 194, 230, 0.65);
  }
`;

const LandingImages = () => (
  <Section>
    <Product>
      <ProductImg src={dogCat} alt="dog and cat" />
      <ProductButton className="product-button">I am a pet owner</ProductButton>
    </Product>
    <Product>
      <ProductImg src={humain} alt="human" />
      <ProductButton className="product-button">I want to get vaccinated</ProductButton>
    </Product>
  </Section>
);

export default LandingImages;





