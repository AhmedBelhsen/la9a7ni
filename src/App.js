
// src/App.js
import React from 'react';

import VetCard from './components/VetCard';
import useDoctorCurrentLocation from './hooks/useDoctorCurrentLocation';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';


import RoutingModule from './routes/routingModule';

import Header from './components/Header.js';
import Footer from './components/Footer.js';

function App() {
  const { doctors } = useDoctorCurrentLocation('vets');
  return (
    
    <div className="App">

      <RoutingModule />

    </div>
  );
}

export default App;
