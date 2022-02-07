import { Link } from 'react-router-dom'
import { useContext } from 'react';
import Context from '../../../contexts/myContext';

const Cart = () => {

  let context = useContext(Context);

  if (context.totalQ) {
  return (
          <>
            Im cart
          </>
      );
  } else {
    return (
      <div>
        No products available in cart
        <Link to="/">Go to buy</Link>
      </div>
    )
  }
}

export default Cart;
