import Top from '../top.jsx'
import Footer from '../footer.jsx'
import {Link} from  "react-router-dom";

function Home(){
    return (
        <>
        <Top />
            <h2>¡Te doy la Bienvenida!</h2>
            <ul>
                <li><Link to={`/employees`}>Empleados Cocreta</Link></li>
                <li><Link to={`/calculator`}>Calculadora</Link></li>
            </ul>
        <Footer />
        </>
    );   
}
export default Home;

