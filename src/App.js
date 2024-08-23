// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RoutingModule from './routes/routingModule';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MapComponent /> {/* Intégrez la carte ici */}
      <Footer />
    <RoutingModule />
    </div>
  );
}

export default App;
