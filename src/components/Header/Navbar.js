import CartWidget from './CartWidget';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <header id="main-header" className="navbar">
            <span className="material-icons">
                shopping_bag
            </span>
            <nav>
                <Link to='/Home'>Home</Link>
                <Link to='/Products'>Products</Link>
                <CartWidget/>
            </nav>
        </header>
    )
};

export default Navbar;