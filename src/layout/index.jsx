import React from 'react';
import Nav from './header/navBar';
import LandingImages from '../components/landingImages'
import { Container } from 'react-bootstrap';

export function MainLayout() {
  return (
         <div style={{ width: '100%', margin: 0, padding: 0 }}>
      <Nav />
      <Container fluid>
        <LandingImages />  
      </Container> 
    </div>
  );
}
