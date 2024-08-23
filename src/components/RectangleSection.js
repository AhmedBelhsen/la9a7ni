// src/RectangleSection.js
import React, { useEffect, useState } from 'react';
import './RectangleSection.css'; // Assurez-vous de créer ce fichier CSS pour le style

import useVetOfTheDay from "../hooks/useVetOfTheDay"

const RectangleSection = () => {
    const [doctor, setDoctor] = useState({
        name: "0",
        phone: "0",
        location: "0",
        horaire: "0"
    })
    const {vets} = useVetOfTheDay();
    useEffect(() => {

      setDoctor(vets[0])
    }, [vets])


  return (
    <div className="rectangle-section">
      <div className="rectangle">
        {/* Le texte est masqué avec CSS */}
      </div>
      <div className="rectangle-right">
        <p className="rectangle-text">Our doctor of the day</p>
        <br />
        {(vets.length > 0) ? <>

        <p className="rectangle-text-item">
          <strong>• Name:</strong> {doctor?.name}
        </p>
        <br />
        <br />
        <p className="rectangle-text-item">
          <strong>• Phone:</strong> {doctor?.Phone}
        </p>
        <br />
        <br />
        <p className="rectangle-text-item">
          <strong>• Location:</strong> {doctor?.location}
        </p>
        <br />
        <br />
        <p className="rectangle-text-item">
          <strong>• Horaire de travail:</strong> {doctor?.horaire}
        </p>
        </>: <p>Doctor of the day coming soon ...</p>}
        <br />
      </div>
         
    </div>
  );
};

export default RectangleSection;
