import React from "react";
import VetCard from "../components/VetCard";
import useDoctorCurrentLocation from '../hooks/useDoctorCurrentLocation';
import { useNavigate } from "react-router-dom";
import Slider from "./Component/Slider/Slider";

const FindVet = () => {
    const { doctors } = useDoctorCurrentLocation('vets');
    const navigate = useNavigate();
    const goBack=()=>{
        navigate("/");

    }

    return (
        <>
        <Slider/>
        <div style={{margin:15}}>
 <button onClick={goBack} className="back-button" >Back</button>         
    <h1>   Vets in your area:</h1>
            {doctors.map((vet) => (
                <VetCard key={vet.id} vet={vet} />
            ))}
            <h1>  Get your pet vaccinated! </h1>
        </div>
        </>
    );
};

export default FindVet;
