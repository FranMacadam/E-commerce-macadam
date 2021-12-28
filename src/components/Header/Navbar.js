import "./Header.scss";
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header id="main-header" className="navbar">
            <Link to="/">
                <span className="brandName">Pizza & Beer</span>
            </Link>
            <ul className='navLinks'>
                <li>
                    <Link to='/Pizzas'>Pizzas</Link>
                </li>
                <li>
                    <Link to='/Beers'>Beers</Link>
                </li>
                <li>
                    <Link to='/Cart'>
                    <CartWidget />
                    </Link>
                </li>
            </ul>
            <a href="aa"><button className="btnHeader">contact</button></a>
        </header>
    )
};

export default Navbar;