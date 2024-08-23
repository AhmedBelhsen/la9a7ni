import React from "react";
import HospitalCard from "../components/HospitalCard";
import useDoctorCurrentLocation from '../hooks/useDoctorCurrentLocation';

const FindHospital = () => {
    const { doctors } = useDoctorCurrentLocation('hospitals');

    
    return (
        <div>
            <h1>hospitals in your area</h1>
            {doctors.map((hospital) => (
                <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
 
        </div>
    );
};

export default FindHospital;
