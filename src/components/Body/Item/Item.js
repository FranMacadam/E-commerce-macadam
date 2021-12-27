import ItemDetail from "../ItemDetail/ItemDetail"
import './Item.scss'

const Item = (props) => {
    return (
        <div className="cardsContainer">
            <div className="cards">
                <h1 className='cardTitle'>{props.product.title}</h1>
                <img alt='cardImg' src={props.product.img} className='cardImg' />
                <p className='productPrice'>{props.product.price}</p>
                <ItemDetail />
            </div>
        </div>
    )
}

export default Item
