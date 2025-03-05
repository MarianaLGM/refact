import { useState } from 'react'
import Top from './top.jsx'
import Footer from './footer.jsx'
import './App.css'
import employees from './data/employees.js'

function App() {

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [result, setResult] = useState(null);

  
    //const patata1 = 1 

    let dataEmployees = [];
    for (let i = 0; i < employees.length; i++) {
      dataEmployees.push(
        <div key={i}>
          <p>Nombre: {employees[i].name}</p>
          <p>Apellidos: {employees[i].lastName}</p>
          <p>Hobbies: {employees[i].hobbies.join(', ')}</p>
          <p>Edad: {employees[i].age}</p>
        </div>
      );
    }
    const handleSubmit = (e) => {
      e.preventDefault();  
    }

  //FUNCION SUMA
  function add (value1,value2){
    if(!isNumber(value1) || !isNumber(value2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    const result = value1 + value2;
    setResult(result)
  }

  //FUNCION RESTA
  function subtract (value1,value2){
    if(!isNumber(value1) || !isNumber(value2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    const result = value1 - value2;
    setResult(result)
  }

  //FUNCION MULTIPLICACIÓN
  function multiply (value1,value2){
    if(!isNumber(value1) || !isNumber(value2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    const result = value1 * value2;
    setResult(result)
  }
  //FUNCION DIVISIÓN
  function divide (value1,value2){
    if(!isNumber(value1) || !isNumber(value2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    if (value2===0){
      throw new Error ("divisor must be different from 0")
    }
    const result = value1 / value2;
    setResult(result)
  }

  return (
    <>
      <Top/>
      <h2>Empleados Cocreta</h2>
        <div className="containerEmployees">
          {dataEmployees}
      </div>

      <h2>Calculadora</h2>
      <div className="containerCalculator">
        <form onSubmit={handleSubmit}> 
          <input 
            type="number" 
            onChange={(e) => setValue1(e.target.value)} 
            placeholder="Agrega un número"/>
          <button onClick={()=>add}>+</button>
          <button onClick={()=>subtract}>-</button>
          <button onClick={()=>multiply}>x</button>
          <button onClick={()=>divide}>/</button>
          <input 
            type="number" 
            onChange={(e) => setValue2(e.target.value)} 
            placeholder="Agrega un número"/> 
          <button type="submit">Calcular</button>

          <div className='result'>
            <p>Resultado:</p>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default App







