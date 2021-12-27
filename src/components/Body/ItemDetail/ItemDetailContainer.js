import ItemDetail from './ItemDetail'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'

const initialProduct = {
  name : 'Pizza1',
  price : 100,
  id: 1,
}

const ItemDetailContainer = () => {

  let {id} = useParams()
  let [product, setProduct] = useState({})

  const getItem = () => {

    const promise = new Promise((resolve, reject) => {

      setTimeout(() => {
        let product = initialProduct.filter((product) => product.id === id)
        console.log(product)
        resolve(product);
      }, 3000);
    });

    promise
    .then((product) => {
      setProduct(product);
    })

  };


  useEffect(() => getItem())


  return (
    <div>
      <ItemDetail product={product}/>
    </div>
  );
}

export default ItemDetailContainer;
