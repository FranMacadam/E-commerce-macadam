import React, { useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'
import Context from '../../../contexts/myContext'


const ItemDetail = ({ product }) => {

    let context = useContext(Context)

    const addToCart = () => {
        console.log('I added the product to the cart!');
        context.addItem(
            product.id,
            product.title,
            product.price,
            product.image
        )
    };

    return (
        <div className="detailContainer">
            <h1 className="detailTitle">Detail product</h1>
            <p className="cardTitle">Name: {product.title}</p>
            <p className="productPrice">Price: ${product.price}</p>
            <ItemCount addToCart={addToCart} stock={10} initial={0} />
        </div>
    )
}

export default ItemDetail
