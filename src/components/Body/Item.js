import ItemCount from './ItemCount'

const Item = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <img alt='cardImg' src={props.img}/>
            <p>{props.price}</p>
            <ItemCount />
        </div>
    )
}

export default Item
