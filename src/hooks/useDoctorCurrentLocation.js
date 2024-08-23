
//when you use the hook : 1 pass either "vets" or "hospitals" comme parametre
//2 this hook returns { doctors, closestDoctor } so to use it with different names
// you can : const  { doctors:vets, closestDoctor:closestVet }

//note: the "doctors" are ordered from closest to farthest

import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';
import { haversineDistance } from '../tools/distancetool'; // Import the haversineDistance function

const useDoctorCurrentLocation = (collectionName) => {
  const [doctors, setDoctors] = useState([]);
  const [closestDoctor, setClosestDoctor] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const userLocation = await getUserLocation();
        
        const doctorsCollection = collection(db, collectionName);
        const doctorsSnapshot = await getDocs(doctorsCollection);
        const doctorsList = doctorsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        const sortedDoctors = doctorsList
          .map(doctor => ({
            ...doctor,
            distance: haversineDistance(userLocation, {
              latitude: doctor.latitude,
              longitude: doctor.longitude
            })
          }))
          .sort((a, b) => a.distance - b.distance);

        setDoctors(sortedDoctors);
        setClosestDoctor(sortedDoctors[0]);
      } catch (err) {
        alert(err);
      }
    };

    fetchDoctors();
  }, [collectionName]);

  return { doctors, closestDoctor };
};

// Function to get user location
const getUserLocation = () => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          resolve({ latitude, longitude });
        },
        (error) => reject(error)
      );
    } else {
      reject(new Error("Geolocation is not supported by this browser."));
    }
  });
};

export default useDoctorCurrentLocation;
