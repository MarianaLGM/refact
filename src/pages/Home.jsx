import Top from '../top.jsx'
import Footer from '../footer.jsx'
import {Link} from  "react-router-dom";

function Home(){
    return (
        <>
        <Top />
            <h1>¡Te doy la Bienvenida!</h1>
            <ul>
                <li><Link to={`/employees`}>Ver lista empleados</Link></li>
                <li><Link to={`/calculator`}>Ir a calculadora</Link></li>
            </ul>
        <Footer />
        </>
    );   
}
export default Home;

