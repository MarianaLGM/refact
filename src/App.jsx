
import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Importa tus componentes
import Home from './pages/Home.jsx';
import Employees from './pages/Employees.jsx';
import Calculator from './pages/Calculator.jsx';

function App (){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/employees" element={<Employees/>}/>
                <Route path="/calculator"element={<Calculator/>}/>
            </Routes>
        </Router>
    );
}
export default App;