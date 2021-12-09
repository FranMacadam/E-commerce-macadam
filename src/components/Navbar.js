import CartWidget from './CartWidget';
import Headerdrop from './Headerdrop'

const Navbar = () => {
    return (
        <header id="main-header" className="navbar">
            <span class="material-icons">
                shopping_bag
            </span>
            <nav>
                <a href='aa'>Home</a>
                <a href='ab'>Products</a>
                <Headerdrop/>
                <CartWidget/>
            </nav>
        </header>
    )
};

export default Navbar;