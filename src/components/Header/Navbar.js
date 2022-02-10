import "./Header.scss";
import { Link } from 'react-router-dom'
import { getDocs, query, collection } from "firebase/firestore"
import { useState, useEffect, useContext } from 'react';
import { database } from '../../Firebase'
import { useParams } from "react-router-dom"
import Context from '../../contexts/myContext';

const Navbar = () => {

    const { totalQ } = useContext(Context)
    let [list, setList] = useState([])
    const { id } = useParams();


    useEffect(() => {
        const productosCollection = collection(database, "Products")
        if (id != null) {
            const consulta = query(productosCollection)
            getDocs(consulta)
                .then(({ docs }) => {
                    setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            getDocs(productosCollection)
                .then(({ docs }) => {
                    setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
                }).catch((error) => {
                    console.log(error)
                })
        }
    }, [id]);


    return (
        <header id="main-header" className="navbar">
            <Link to="/">
                <span className="brandName">Pizza & Beer</span>
            </Link>
            <ul className='navLinks'>
                <li>
                    <Link to={`/category/${list.category}`} className="navLink">Pizzas</Link>
                </li>
                <li>
                    <Link to={`/category/${list.category}`} className="navLink">Beers</Link>
                </li>
                <li>
                    <Link to='/Cart' className="navLink">
                        <span className="material-icons" id='shoppingCart'>
                            shopping_cart
                        </span>
                        <p>{totalQ}</p>
                    </Link>
                </li>
            </ul>
            <Link to="/Contact">
                <button className="btnHeader">contact</button>
            </Link>
        </header>
    )
};

export default Navbar;