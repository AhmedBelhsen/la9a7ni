import './App.css';
import { BrowserRouter, Route, Routes,Navigate } from 'react-router-dom';
import  Login  from './Pages/Login';
import Register from './Pages/Register';
import { Home } from './Pages/home';
import { Slider } from './Pages/Component/Slider/Slider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/Login" element ={<Login/>}/>
        <Route path="/Slider" element ={<Slider/>}/>

        <Route path="/Register" element ={<Register/>}/>
        <Route path="" element={<Navigate to="/Register" replace />} />
        <Route path="/home" element={<Home/>}></Route>
        
          </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
