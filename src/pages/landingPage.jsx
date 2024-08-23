import React from 'react';

import Header from '../components/Header';
import MapComponent from '../components/MapComponent';
import Footer from '../components/Footer';


function LandingPage() {
  return (
    <>
      <Header />
      <MapComponent /> {/* Intégrez la carte ici */}
      <Footer />
    </>
  );
}

export default LandingPage;
