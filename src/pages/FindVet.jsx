import React from "react";
import VetCard from "../components/VetCard";
import useDoctorCurrentLocation from '../hooks/useDoctorCurrentLocation';

const FindVet = () => {
    const { doctors } = useDoctorCurrentLocation('vets');

    return (
        <div>
            <h1>Vets in your area</h1>
            {doctors.map((vet) => (
                <VetCard key={vet.id} vet={vet} />
            ))}
            <h1>Get your pet vaccinated</h1>
 
        </div>
    );
};

export default FindVet;
