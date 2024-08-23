import React from 'react';

import Header from '../components/Header';
import MapComponent from '../components/MapComponent';
import Footer from '../components/Footer';
import RectangleSection from '../components/RectangleSection';

function LandingPage() {
  return (
    <>
      <Header />
      <RectangleSection />
      <MapComponent /> {/* Intégrez la carte ici */}
      <Footer />
    </>
  );
}

export default LandingPage;
