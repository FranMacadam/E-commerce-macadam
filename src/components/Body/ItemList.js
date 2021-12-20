import Item from './Item'

const ItemList = props => {
    return (
        <div>
            {props.products.map(product => (
                <Item key={product.id} product={product} addToCart={props.addToCart} />
            ))}
        </div>
    )
}

export default ItemList
