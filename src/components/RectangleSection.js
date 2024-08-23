// src/RectangleSection.js
import React, { useEffect, useState } from 'react';
import './RectangleSection.css'; // Assurez-vous de créer ce fichier CSS pour le style

const RectangleSection = () => {
    const [doctor, setDoctor] = useState({
        name: "adam",
        phone: "+216 00 00 000 000",
        location: "tunes",
        horaire: "8h-7h"
    })
    useEffect(() => {
        // fetch doctor of the day
    }, [])
    

  return (
    <div className="rectangle-section">
      <div className="rectangle">
        {/* Le texte est masqué avec CSS */}
      </div>
      <div className="rectangle-right">
        <p className="rectangle-text">Our doctor of the day</p>
        <br />
        <p className="rectangle-text-item">
          <strong>• Name:</strong> {doctor.name}
        </p>
        <br />
        <br />
        <p className="rectangle-text-item">
          <strong>• Phone:</strong> {doctor.phone}
        </p>
        <br />
        <br />
        <p className="rectangle-text-item">
          <strong>• Location:</strong> {doctor.location}
        </p>
        <br />
        <br />
        <p className="rectangle-text-item">
          <strong>• Horaire de travail:</strong> {doctor.horaire}
        </p>
        <br />
      </div> 
         
    </div>
  );
};

export default RectangleSection;
