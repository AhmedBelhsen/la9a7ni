// src/components/MapComponent.js
import React from 'react';
import './MapComponent.css'; // Assurez-vous que ce fichier existe et contient les styles nécessaires

const MapComponent = () => {
  const mapSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.5553814623227!2d10.2049091!3d36.8531231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2cb4cc76bf89f%3A0x3033efc96ad1e416!2sMentorNations!5e0!3m2!1sfr!2stn!4v1724414575654!5m2!1sfr!2stn"; // Remplacez par l'URL d'iframe correcte

  return (
    <div className="map-container">
      <iframe
        src={mapSrc}
        width="2000"
        height="200"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="Map"
      />
    </div>
  );
};

export default MapComponent;
