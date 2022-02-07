import './Item.scss'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="cardsContainer">
            <div className='cardImg'>
                <img alt='cardImg' src={props.product.image} />
            </div>
            <hr className='cardLine' />
            <div className='content'>
                <h1 className='cardTitle'>{props.product.title}</h1>
                <p className='productPrice'>${props.product.price}</p>
                <Link to={`/product/${props.product.id}`} className="productBtn_Link"><button className="productBtn">Detail</button></Link>
            </div>
        </div>
    )
}

export default Item
