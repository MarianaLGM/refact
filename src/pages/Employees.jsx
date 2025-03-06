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
            <ul>
                {employees.map((employee)=>(
                <li key={employee.name}>
                    <Link to={`/projects/${employee.name}`}>{employee.lastName}, {employee.hobbies.join(', ')}, {employee.age}</Link>
                </li>
                ))}
            </ul>
        <Footer />
        </>
    );

}
export default Employees; 
