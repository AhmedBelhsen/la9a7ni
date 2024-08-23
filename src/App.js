
// src/App.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import  Login  from './Pages/Login';
import Register from './Pages/Register';
import { Home } from './Pages/home';
import { Slider } from './Pages/Component/Slider/Slider';

import RoutingModule from './routes/routingModule';


function App() {
  return (
    <div className="App">

      <RoutingModule />

    </div>
  );
}

export default App;
