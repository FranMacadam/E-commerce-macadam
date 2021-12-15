import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial);


    const plus = () => {
        if(counter < props.stock){
            setCounter(counter + 1)
        } else {
            console.log("No more stock, i'm sorry.")
        }

    }

    const onAdd = () => {
        setCounter(props.initial)
    }

    const minus = () => {
        if(counter > 1){
            setCounter(counter - 1)
        } else {
            console.log("What are you thinking?")
        }
    }

    

    return (
        <>
            <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Product Title</Card.Title>
                    <Card.Text>
                        {counter}
                    </Card.Text>
                    <Button variant="danger" id='itemCards' onClick={plus}>Plus</Button>
                    <Button variant="warning" id='itemCards' onClick={onAdd}>Add to cart</Button>
                    <Button variant="danger" id='itemCards' onClick={minus}>Minus</Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ItemCount;
