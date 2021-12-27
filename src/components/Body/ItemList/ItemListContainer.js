import React, { useState, useEffect } from 'react';
/* import { BrowserRouter as Router } from 'react-router-dom' */
import ItemList from './ItemList'


const ItemListContainer = props => {
  const addToCart = () => {
    console.log('I added the product to the cart!');
  };

  const url = 'https://fakestoreapi.com/products';

  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => setData(json));
    }, 2000);
  }, []);

  return (
    <div className="itemListContainer">
      <ItemList products={data} addToCart={addToCart} />
    </div>
  );
};

export default ItemListContainer;
