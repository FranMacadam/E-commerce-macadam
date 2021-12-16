import React, {useState, useEffect} from 'react';
import ItemList from './ItemList'


const ItemListContainer = (props) => {


  const addToCart = () => {
    console.log("I added the product to the cart!")
  }
  
  const url = 'https://fakestoreapi.com/products'
  
  const [product, setData] = useState(null)
  
  useEffect(() => {
    setTimeout(() =>{
      fetch(url)
      .then(res => res.json())
      .then(product => setData(product))
    }, [])
    }, 2000)


  return (
    <div className='productContainer'>
        <ItemList product={product} stock={10} initial={1} addToCart={addToCart}/>
    </div>
  );

}

export default ItemListContainer;
