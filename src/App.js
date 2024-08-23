import React from 'react';

import VetCard from './components/VetCard';
import useDoctorCurrentLocation from './hooks/useDoctorCurrentLocation';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import RoutingModule from './routes/routingModule.jsx';

function App() {
  const { doctors } = useDoctorCurrentLocation('vets');
  return (
    
    <div className="App">

    <RoutingModule />
      <Footer />
    </div>
  );
}

export default App;

