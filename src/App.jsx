import { useState } from 'react'
import Top from './top.jsx'
import Footer from './footer.jsx'
import './App.css'

function App() {

  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [result, setResult] = useState(null);



    const employees = [
      { name: 'Juan', lastName: 'Perez', hobbies: ['fútbol', 'lectura'], age: 25 },
      { name: 'María', lastName: 'González', hobbies: ['pintura', 'música'], age: 30 },
      { name: 'Pedro', lastName: 'López', hobbies: ['senderismo', 'cine'], age: 28 },
      { name: 'Ana', lastName: 'Martínez', hobbies: ['baile', 'viajar'], age: 22 },
      { name: 'Carlos', lastName: 'Sánchez', hobbies: ['cocina', 'videojuegos'], age: 35 },
      { name: 'Sofía', lastName: 'Ruiz', hobbies: ['natación', 'teatro'], age: 29 },
      { name: 'Luis', lastName: 'Hernández', hobbies: ['jardinería', 'patinar'], age: 31 },
      { name: 'Elena', lastName: 'Díaz', hobbies: ['fotografía', 'montañismo'], age: 27 },
      { name: 'Javier', lastName: 'Torres', hobbies: ['ajedrez', 'surf'], age: 33 },
      { name: 'Laura', lastName: 'Romero', hobbies: ['yoga', 'ciclismo'], age: 26 },
      { name: 'David', lastName: 'Gómez', hobbies: ['escritura', 'musculación'], age: 34 },
      { name: 'Isabel', lastName: 'Jiménez', hobbies: ['piano', 'voleibol'], age: 23 },
      { name: 'Miguel', lastName: 'Alvarez', hobbies: ['cocina', 'pintura'], age: 37 },
      { name: 'Carmen', lastName: 'Moreno', hobbies: ['jardinería', 'cine'], age: 24 },
      { name: 'Alejandro', lastName: 'Dominguez', hobbies: ['viajar', 'fotografía'], age: 30 },
      { name: 'Rosa', lastName: 'Ortega', hobbies: ['bailar', 'leer'], age: 32 },
      { name: 'Francisco', lastName: 'Vargas', hobbies: ['música', 'senderismo'], age: 28 },
      { name: 'Lucía', lastName: 'Ramos', hobbies: ['gimnasia', 'ciclismo'], age: 26 },
      { name: 'Antonio', lastName: 'Castillo', hobbies: ['cocinar', 'pintura'], age: 29 },
      { name: 'Eva', lastName: 'Iglesias', hobbies: ['cine', 'teatro'], age: 31 },
      { name: 'José', lastName: 'Fernández', hobbies: ['fútbol', 'baloncesto'], age: 27 },
      { name: 'Teresa', lastName: 'Serrano', hobbies: ['pintura', 'música'], age: 33 },
      { name: 'Manuel', lastName: 'Garrido', hobbies: ['cocina', 'fotografía'], age: 30 },
      { name: 'Rocío', lastName: 'Cortés', hobbies: ['patinar', 'leer'], age: 28 },
      { name: 'Pablo', lastName: 'Marín', hobbies: ['surf', 'senderismo'], age: 25 },
      { name: 'Beatriz', lastName: 'Luna', hobbies: ['piano', 'yoga'], age: 29 },
      { name: 'Diego', lastName: 'Ibáñez', hobbies: ['ciclismo', 'música'], age: 34 },
      { name: 'Nuria', lastName: 'Gil', hobbies: ['teatro', 'cocina'], age: 27 },
      { name: 'Rubén', lastName: 'Sanz', hobbies: ['fútbol', 'lectura'], age: 32 },
      { name: 'Cristina', lastName: 'Herrero', hobbies: ['bailar', 'pintura'], age: 26 }
    ];
  
    const patata1 = 1 
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
        <div className="containerEmployees">
          {dataEmployees}
      </div>

      <div className="containerCalculator">
        <form onSubmit={handleSubmit}> 
          <input 
            type="number" 
            value={value1} 
            onChange={(e) => setValue1(e.target.value)} 
            placeholder="Agrega un número"/>
          <button onClick={()=>add}>+</button>
          <button onClick={()=>subtract}>-</button>
          <button onClick={()=>multiply}>x</button>
          <button onClick={()=>divide}>/</button>
          <input 
            type="number" 
            value={value2} 
            onChange={(e) => setValue2(e.target.value)} 
            placeholder="Agrega un número"/> 
          <button type="submit">Calcular</button>

          <div className='result'>
            <p>Resultado:</p>
          </div>
        </form>
      </div>
      <Footer />
    </>
  )
}

export default App





