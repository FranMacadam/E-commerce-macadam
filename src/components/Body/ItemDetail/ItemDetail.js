import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.scss'

const ItemDetail = ({ product }) => {

    const addToCart = () => {
        console.log('I added the product to the cart!');
    };

    return (
        <div className="detailContainer">
            <h1 className="detailTitle">Detail product</h1>
            <p className="cardTitle">Name: {product.title}</p>
            <p className="productPrice">Price: ${product.price}</p>
            <ItemCount addToCart={addToCart} stock={10} initial={1} />
        </div>
    )
}

export default ItemDetail
