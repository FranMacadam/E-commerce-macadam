import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Button from "react-bootstrap/Button";
import './ItemCount.scss'

const ItemCount = props => {

    const [counter, setCounter] = useState(props.initial);


    const plus = () => {
        if (counter < props.stock) {
            setCounter(counter + 1)
        } else {
            console.log("No more stock, i'm sorry.")
        }

    }

    const onAdd = () => {
        setCounter(props.initial)
    }

    const addToCartOnAdd = () => {
        props.addToCart();
        onAdd();
    }

    const minus = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        } else {
            console.log("What are you thinking?")
        }
    }



    return (
        <>
            <div className='counterContainer'>
                <p id='counter'>{counter}</p>
                <Button variant="danger" id='itemCards' onClick={plus}>Plus</Button>
                <Button variant="warning" id='itemCards' onClick={addToCartOnAdd}>Add to cart</Button>
                <Button variant="danger" id='itemCards' onClick={minus}>Minus</Button>
            </div>
            <Link to='/cart' className="finishTransactionContainer">
            <Button variant="danger" id='itemCards' className='finishTransaction'>Finish transaction</Button>
            </Link>
        </>
    );
};

export default ItemCount;
