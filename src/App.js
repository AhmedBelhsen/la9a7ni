<<<<<<< HEAD

// src/App.js
=======
>>>>>>> roua
import React from 'react';

import VetCard from './components/VetCard';
import useDoctorCurrentLocation from './hooks/useDoctorCurrentLocation';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
<<<<<<< HEAD
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';


import RoutingModule from './routes/routingModule';

=======
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import RoutingModule from './routes/routingModule.jsx';
>>>>>>> roua

function App() {
  const { doctors } = useDoctorCurrentLocation('vets');
  return (
    
    <div className="App">
<<<<<<< HEAD

      <RoutingModule />

=======
    <RoutingModule />
      <Footer />
>>>>>>> roua
    </div>
  );
}

export default App;
