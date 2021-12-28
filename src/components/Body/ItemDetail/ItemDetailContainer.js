import ItemDetail from './ItemDetail'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);

  let { id } = useParams();


  const url = `https://fakestoreapi.com/products/${id}`;

  const getProduct = async () => {

    const res = await fetch(url);
    const products = await res.json();
    return products.filter(producto => producto.id === id)
  };

  useEffect(() => {
    getProduct()
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
  });


  return (
    <div>
      <ItemDetail product={product} />
    </div>
  );
}

export default ItemDetailContainer;