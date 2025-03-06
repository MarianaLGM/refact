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

    //let dataEmployees = [];
    return (
        <>
        <Top />
        <h2>Empleados Cocreta</h2>
            <ul className="containerEmployees">
                {employees.map((employee)=>(
                <li key={employee.name}>
                    <Link to={`/employees/${employee.name}`}>Nombre: {employee.name} Apellido: {employee.lastName} Hobbies: {employee.hobbies.join(', ')} Edad: {employee.age}</Link>
                </li>
                ))}
            </ul>
        <Footer />
        </>
    );

}
export default Employees; 


