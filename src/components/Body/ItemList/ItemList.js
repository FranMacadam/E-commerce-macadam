import Item from '../Item/Item'

const ItemList = props => {
    return (
        <div className="item-list">
            {props.list.map(product => (
                <Item key={props.list.id} product={product}/>
            ))}
        </div>
    )
}

export default ItemList 
