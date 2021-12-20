import ItemCount from './ItemCount'

const Item = (props) => {
    return (
        <div>
            <h1>{props.product.name}</h1>
            <img alt='cardImg' src={props.product.img}/>
            <p>{props.product.price}</p>
            <ItemCount />
        </div>
    )
}

export default Item
