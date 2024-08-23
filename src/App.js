// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import MapComponent from './components/MapComponent'; // Importez le composant de la carte

function App() {
  return (
    <div className="App">
      <Header />
      <MapComponent /> {/* Intégrez la carte ici */}
      <Footer />
    </div>
  );
}

export default App;
