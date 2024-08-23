import { useState, useEffect } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

const useVetOfTheDay = () => {
  const [vets, setVets] = useState([]);

  useEffect(() => {
    const fetchVets = async () => {
      try {
        const vetsCollection = collection(db, 'vets');
        const q = query(vetsCollection, where('vaccinesDonated', '==', 0));
        const querySnapshot = await getDocs(q);
        const vetsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setVets(vetsList);
      } catch (error) {
        console.error("Error fetching vets:", error);
      }
    };

    fetchVets();
  }, []);

  return { vets };
};

export default useVetOfTheDay;
