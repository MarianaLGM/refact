
import React, {useState, useEffect} from "react"
import Top from '../top.jsx'
import Footer from '../footer.jsx'
import Home from "./Home.jsx";

const Calculator = () => {

    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [result, setResult] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        }
    
    //*CALCULATOR FUNCTIONS
    
    const isNumber = (num) => {
    return typeof num === 'number';
    }
    
    //FUNCION SUMA
    const add = (value1, value2) => {
    //?Converts the string values obtained from the inputs into a number type
    const number1 = parseInt(value1); 
    const number2 = parseInt(value2);
    
    //console.log(typeof number1)
    
    if (!isNumber(number1) || !isNumber(number2)) {
        throw new Error("value1 and value2 must be numbers")
    }
    //console.log(number1 + number2)
    return number1 + number2;
    }
    
    //FUNCION RESTA
    const subtract = (value1, value2) => {
    const number1 = parseInt(value1);
    const number2 = parseInt(value2);
    
    if (!isNumber(number1) || !isNumber(number2)) {
        throw new Error("value1 and value2 must be numbers")
    }
    return number1 - number2;
    
        }
    
        //FUNCION MULTIPLICACIÓN
        const multiply = (value1, value2) => {
        const number1 = parseInt(value1);
        const number2 = parseInt(value2);
    
        if (!isNumber(number1) || !isNumber(number2)) {
            throw new Error("value1 and value2 must be numbers")
        }
        return number1 * number2;
        }
    
        //FUNCION DIVISIÓN
        const divide = (value1, value2) => {
        const number1 = parseInt(value1);
        const number2 = parseInt(value2);
    
        if (!isNumber(number1) || !isNumber(number2)) {
            throw new Error("value1 and value2 must be numbers")
        }
        return number1 / number2;
        }
    
        const operation = (e) => {
        e.preventDefault(); //Prevents the page from reloading.
    
        if (e.target.value === '+') { setResult(add(value1, value2)) };
        if (e.target.value === '-') { setResult(subtract(value1, value2)) };
        if (e.target.value === 'x') { setResult(multiply(value1, value2)) };
        if (e.target.value === '/') { setResult(divide(value1, value2)) };
        }
    
    return (
        <>
            <Top />
    
            <h2>Calculadora</h2>
            <div className="containerCalculator">
            <form onSubmit={handleSubmit}>
                
                <input
                type="number"
                value={value1}
                onChange={(e) => setValue1(e.target.value)}
                placeholder="Agrega un número" />
                
                <button value='+' onClick={operation}>+</button>
                <button value='-' onClick={operation}>-</button>
                <button value='x' onClick={operation}>x</button>
                <button value='/' onClick={operation}>/</button>
                
                <input
                type="number"
                value={value2}
                onChange={(e) => setValue2(e.target.value)}
                placeholder="Agrega un número" />
                
                <button type="submit">Calcular</button>
    
                <div className='result'>
                <p>Resultado: {result}</p>
                </div>
            </form>
            </div>

            <Footer />
        </>
    )
}
    
    export default Calculator;
    
    
    
    
    
    
    
    