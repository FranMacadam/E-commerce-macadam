import Item from './Item'

const ItemList = (props) => {
    return (
        <div>
            {props.product.map((product) => {
                return (
                    <Item
                    key={props.products.id}
                    title={props.products.title}
                    price={props.products.price}
                    image={props.products.image}
                />
                );
            })}
        </div>
    )
}

export default ItemList
