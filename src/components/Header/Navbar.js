import "./Header.scss";
import { Link } from 'react-router-dom'
import { database } from '../../Firebase'
import { useState, useEffect } from 'react';
import CategoryWidget from './CategoryWidget'

const Navbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        database
        .collection(database, 'category')
        .get()
        .then(resultados => {
          const resultadoFinal = [];
          resultados.forEach(resultado => {
            const id = resultado.id;
            const dataFinal = { id, ...resultado.data() };
            resultadoFinal.push(dataFinal);
            return resultadoFinal;
          });
          setCategories(resultadoFinal);
        });
    }, []);
  
    return (
        <header id="main-header" className="navbar">
            <Link to="/">
                <span className="brandName">Pizza & Beer</span>
            </Link>
            <ul className='navLinks'>
                <CategoryWidget categories={categories} />
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