//when you use the hook : 1 pass either "vets" or "hospitals" as first parameter and the location desired as the second(string)
//2 this hook returns { doctors } that have the same location name (city) that's passed as argument



import { useState, useEffect } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const useDoctorLocationName = (collectionName, cityName) => {
    console.log("here")
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctorsCollection = collection(db, collectionName);

        
        const q = query(doctorsCollection, where('location', '==', cityName));
        const doctorsSnapshot = await getDocs(q);
        const doctorsList = doctorsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));

        setDoctors(doctorsList);
      } catch (err) {
        alert(err);
      }
    };

    if (cityName) {
      fetchDoctors();
    }
  }, [collectionName, cityName]);

  return { doctors };
};

export default useDoctorLocationName;
