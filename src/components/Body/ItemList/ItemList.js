import Item from '../Item/Item'

const ItemList = props => {
    return (
        <div className="item-list">
            {props.products.map(product => (
                <Item key={product.id} product={product} addToCart={props.addToCart} />
            ))}
        </div>
    )
}

export default ItemList
