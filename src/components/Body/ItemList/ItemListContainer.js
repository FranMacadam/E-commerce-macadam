import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { useParams } from "react-router-dom"

const ItemListContainer = props => {
  const addToCart = () => {
    console.log('I added the product to the cart!');
  };

  const [data, setData] = useState([]);
  
  const {id} = useParams()
  
  const url = 'https://fakestoreapi.com/products';

  const getProducts = async () => {
    const res = await fetch(url);
    const products = await res.json();
    return products.filter(producto => producto.id === id)
  }

  useEffect(() => {
    getProducts();
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(json => setData(json));
    }, 2000);
});


  return (
    <div className="itemListContainer">
      <ItemList products={data} addToCart={addToCart} />
    </div>
  );
};

export default ItemListContainer;
