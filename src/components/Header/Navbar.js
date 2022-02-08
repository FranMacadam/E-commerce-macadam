import "./Header.scss";
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header id="main-header" className="navbar">
            <Link to="/">
                <span className="brandName">Pizza & Beer</span>
            </Link>
            <ul className='navLinks'>
                <li>
                    <Link to='/Category/Pizza' className="navLink">Pizzas</Link>
                </li>
                <li>
                    <Link to='/Category/Beers' className="navLink">Beers</Link>
                </li>
                <li>
                    <Link to='/Cart' className="navLink">
                        <span className="material-icons" id='shoppingCart'>
                            shopping_cart
                        </span>
                    </Link>
                </li>
            </ul>
            <a href="aa"><button className="btnHeader">contact</button></a>
        </header>
    )
};

export default Navbar;