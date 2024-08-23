import React from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const VetCard = ({ vet }) => {
  const handleBook = async (vetId, vetName, vaccinesDonated) => {
    if (vaccinesDonated > 0) {
      // Update the vaccinesDonated field in Firestore
      const vetDoc = doc(db, 'vets', vetId);
      await updateDoc(vetDoc, {
        vaccinesDonated: vaccinesDonated - 1,
      });

      alert(`Booking appointment with ${vetName}`);
    } else {
      alert(`${vetName} has no vaccines left to donate.`);
    }
  };

  return (
    <div className="vet-card">
      <h3>{vet.name}</h3>
      <p>Location: {vet.location}</p>
      <p>Vaccines Available: {vet.vaccinesDonated}</p>
      <button className='book-button'
        onClick={() =>
          handleBook(vet.id, vet.name, vet.vaccinesDonated)
        }
        disabled={vet.vaccinesDonated <= 0}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default VetCard;
