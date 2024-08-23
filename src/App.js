import React, { useState } from 'react';
import './App.css';
import VetCard from './components/VetCard';
import useDoctorCurrentLocation from './hooks/useDoctorCurrentLocation';

function App() {
  const { doctors } = useDoctorCurrentLocation('vets');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vets in </h1>
        <div>
          {doctors.map((vet) => (
             
            <VetCard key={vet.id} vet={vet} />
            
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
