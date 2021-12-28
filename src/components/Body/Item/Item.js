import './Item.scss'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <div className="cardsContainer">
            <div className='cardImg'>
                <img alt='cardImg' src={props.product.image} />
            </div>
            <div className='content'>
                <h1 className='cardTitle'>{props.product.title}</h1>
                <p className='productPrice'>${props.product.price}</p>
                <span>{props.product.id}</span>
                <Link to={`/products/${props.product.id}`}><button>Detail</button></Link>
            </div>
        </div>
    )
}

export default Item
