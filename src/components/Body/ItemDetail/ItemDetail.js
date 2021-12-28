import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ product }) => {

    const addToCart = () => {
        console.log('I added the product to the cart!');
      };

    return (
        <div>
            <h1>Detail product</h1>
            <p>Name: {product.title}</p>
            <p>Price: ${product.price}</p>
            <ItemCount addToCart={addToCart}/>
        </div>
    )
}

export default ItemDetail
