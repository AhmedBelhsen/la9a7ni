import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const VetCard = ({ vet }) => {
  const [vaccinesNb, setVaccinesNb] = useState(vet?.vaccinesDonated || 0);

  useEffect(() => {
    if (vet) {
      setVaccinesNb(vet.vaccinesDonated);
    }
  }, [vet]);

  const handleBook = async () => {
    if (vaccinesNb > 0) {
      // Update the vaccinesDonated field in Firestore
      const vetDoc = doc(db, 'vets', vet.id);
      await updateDoc(vetDoc, {
        vaccinesDonated: vaccinesNb - 1,
      });

      setVaccinesNb(vaccinesNb - 1); // Update state locally
      alert(`Booking appointment with ${vet.name}`);
    } else {
      alert(`${vet.name} has no vaccines left to donate.`);
    }
  };

  return (
    <div className="doctor-card">
      <h2>{vet.name}</h2>
      <h3>Location: {vet.location}</h3>
      <h4>Vaccines Available: {vaccinesNb}</h4>
      <button
        className='book-button'
        onClick={handleBook}
        disabled={vaccinesNb <= 0}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default VetCard;
