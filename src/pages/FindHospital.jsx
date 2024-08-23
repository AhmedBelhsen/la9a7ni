import React from "react";
import HospitalCard from "../components/HospitalCard";
import useDoctorCurrentLocation from '../hooks/useDoctorCurrentLocation';
import { useNavigate } from "react-router-dom";
import { Button } from 'react-bootstrap'
import Slider from "./Component/Slider/Slider";

const FindHospital = () => {
    const { doctors } = useDoctorCurrentLocation('hospitals');
    const navigate = useNavigate();
    const goBack=()=>{
        navigate("/");

    }

    
    return (
        

        <div style={{margin:15}}>
            <Slider/>
          <button onClick={goBack} className="back-button" >Back</button>

            <h1>   Hospitals in your area:</h1>
            {doctors.map((hospital) => (
                <HospitalCard key={hospital.id} hospital={hospital} />
            ))}
 
        </div>
    );
};

export default FindHospital;
