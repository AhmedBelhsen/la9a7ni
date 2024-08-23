import React, { useState, useEffect } from 'react';


const HospitalCard = ({ hospital }) => {


  
  return (
    <div className="doctor-card">
      <h2>{hospital.name}</h2>
      <h3>Location: {hospital.location}</h3>
     
    </div>
  );
};

export default HospitalCard;
