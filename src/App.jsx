import { useState } from 'react'
import Top from './top.jsx'
import Footer from './footer.jsx'
import './App.css'
import employees from './data/employees.js'

function App() {

  const [value1, setValue1] = useState('')
  const [value2, setValue2] = useState('')
  const [result, setResult] = useState('');

  
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

    const isNumber = (num) => {
      return typeof num === 'number';
    }

  //FUNCION SUMA
  function add (value1,value2){
    const number1 = parseInt(value1);
    const number2 = parseInt(value2);

    //console.log(typeof number1)

    if(!isNumber(number1) || !isNumber(number2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    //console.log(number1 + number2)
    return number1 + number2;
    
   
  }

  //FUNCION RESTA
  function subtract (value1,value2){
    const number1 = parseInt(value1);
    const number2 = parseInt(value2);

    if(!isNumber(number1) || !isNumber(number2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    return number1 - number2;
    
  }

  //FUNCION MULTIPLICACIÓN
  function multiply (value1,value2){
    const number1 = parseInt(value1);
    const number2 = parseInt(value2);

    if(!isNumber(number1) || !isNumber(number2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    return number1 * number2;
  }
  //FUNCION DIVISIÓN
  function divide (value1,value2){
    const number1 = parseInt(value1);
    const number2 = parseInt(value2);

    if(!isNumber(number1) || !isNumber(number2)) {
      throw new Error ("value1 and value2 must be numbers")
    }
    return number1 / number2;
  }

  const operation = (e) => {
    //console.log(e.target.value)
    e.preventDefault();
    
    if(e.target.value === '+') {setResult(add(value1, value2))};
    if(e.target.value === '-') {setResult(subtract(value1, value2))};
    if(e.target.value === 'x') {setResult(multiply(value1, value2))};
    if(e.target.value === '/') {setResult(divide(value1, value2))};
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
            value={value1}
            onChange={(e) => setValue1(e.target.value)} 
            placeholder="Agrega un número"/>
          <button value='+' onClick={operation}>+</button>
          <button value='-' onClick={operation}>-</button>
          <button value='x' onClick={operation}>x</button>
          <button value='/' onClick={operation}>/</button>
          <input 
            type="number" 
            value={value2}
            onChange={(e) => setValue2(e.target.value)} 
            placeholder="Agrega un número"/> 
          <button type="submit">Calcular</button>

          <div className='result'>
            <p>Resultado: {result}</p>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  )
}

export default App







