
import React, { useState, useEffect } from "react"
import Top from '../top.jsx'
import Footer from '../footer.jsx'
import Home from "./Home.jsx";

const Calculator = () => {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [symbol, setSymbol] = useState('');
    const [result, setResult] = useState(null);

    //Prevents the page from reloading.
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    //*CALCULATOR FUNCTIONS

    //Add function
    const add = (value1, value2) => {
        //?Converts the string values obtained from the inputs into a number type
        const number1 = parseInt(value1);
        const number2 = parseInt(value2);

        return number1 + number2;
    }

    //Subtract function
    const subtract = (value1, value2) => {
        const number1 = parseInt(value1);
        const number2 = parseInt(value2);

        return number1 - number2;
    }

    //Multiply function
    const multiply = (value1, value2) => {
        const number1 = parseInt(value1);
        const number2 = parseInt(value2);

        return number1 * number2;
    }

    //Divide function
    const divide = (value1, value2) => {
        const number1 = parseInt(value1);
        const number2 = parseInt(value2);

        return number1 / number2;
    }

    //Function that performs the calculator operations
    const operation = (e) => {
        if (symbol === '+') { setResult(add(value1, value2)) };
        if (symbol === '-') { setResult(subtract(value1, value2)) };
        if (symbol === 'x') { setResult(multiply(value1, value2)) };
        if (symbol === '/') { setResult(divide(value1, value2)) };
    }

    //Reset the inputs and the result
    const reset = () => {
        setValue1('');
        setValue2('');
        setResult(null)
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
                        placeholder="Agrega un número" 
                    />

                    <button value='+' onClick={() => setSymbol('+')}>+</button>
                    <button value='-' onClick={() => setSymbol('-')}>-</button>
                    <button value='x' onClick={() => setSymbol('x')}>x</button>
                    <button value='/' onClick={() => setSymbol('/')}>/</button>

                    <input
                        type="number"
                        value={value2}
                        onChange={(e) => setValue2(e.target.value)}
                        placeholder="Agrega un número" 
                    />

                    <div className="buttons">
                        <button type="submit" onClick={operation}>Calcular</button>
                        <button type="submit" onClick={reset}>Borrar</button>
                    </div>

                    <div className='result'>
                        <p>Resultado: <span>{result}</span></p>
                    </div>

                </form>
            </div>

            <Footer />
        </>
    )
}

export default Calculator;







