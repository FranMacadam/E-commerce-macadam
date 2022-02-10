import ItemDetail from './ItemDetail'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { database } from '../../../Firebase'
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {


  const [producto, setProducto] = useState([]);
  const { id } = useParams();

  
  useEffect(() => {

    const productosCollection = collection(database, "Products")
    const refDoc = doc(productosCollection, id)

    
    getDoc(refDoc)
      .then((resultado) => {
        setProducto(resultado.data())
      })
      .catch((error) => {

      })
  }, [id])



  
  return <><ItemDetail producto={producto} /></>;
}

export default ItemDetailContainer