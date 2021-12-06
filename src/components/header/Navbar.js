import HeaderDrop from "./Dropdown";

const Navbar = () => {
    return (
        <header id="main-header" className="navbar">
            <span class="material-icons">
                shopping_bag
            </span>
            <nav>
                <a href='aa'>Home</a>
                <a href='ab'>Products</a>
                <HeaderDrop></HeaderDrop>
            </nav>
        </header>
    )
};

export default Navbar;