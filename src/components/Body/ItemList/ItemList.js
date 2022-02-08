import Item from '../Item/Item'

const ItemList = props => {
    return (
        <div className="item-list">
            {props.products.map(product => (
                <Item key={props.product.id} product={props.product} addToCart={props.addToCart} />
            ))}
        </div>
    )
}

export default ItemList 
