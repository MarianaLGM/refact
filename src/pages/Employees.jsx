import employeesInfo from "../data/employees.js";
import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import Top from '../top.jsx'
import Footer from '../footer.jsx'


const Employees = () => {
    const [employees, setEmployees]= useState([]);
    useEffect(() => { //me permite cargar proyectos
        setEmployees(employeesInfo); // simulamos carga datos desde `employees`
        }, []); 

    return (
        <>
        <Top />
        <h2>Empleados Cocreta</h2>
        <ul className="containerEmployees">
        {employees.map((employee) => (
            <li className="containerEmployees" key={employee.name}>
            <Link to={`/employees/${employee.name}`}>
                <div className="employeeInfo">
                    <span><strong>Nombre:</strong> {employee.name}</span>
                    <span><strong>Apellido:</strong> {employee.lastName}</span>
                    <span><strong>Hobbies:</strong> {employee.hobbies.join(', ')}</span>
                    <span><strong>Edad:</strong> {employee.age}</span>
                </div>
            </Link>
            </li>
            ))}
        </ul>
        <Footer />
        </>
    );
}

export default Employees; 



