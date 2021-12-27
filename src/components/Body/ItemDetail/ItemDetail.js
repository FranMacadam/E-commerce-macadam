import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({product}) => {
    return (
        <div>
            <h1>Detail product</h1>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail
