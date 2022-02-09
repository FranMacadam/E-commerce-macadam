import ItemDetail from './ItemDetail'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { database } from '../../../Firebase'
import MyLoader from '../../../MyLoader'
import { collection, doc, getDoc } from "firebase/firestore";

function ItemDetailContainer() {


  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState();
  const { id } = useParams();

  
  useEffect(() => {
    setLoading(true);

    const productosCollection = collection(database, "Products")
    const refDoc = doc(productosCollection, id)

    getDoc(refDoc)
      .then((resultado) => {
        setProducto(resultado.data())

          .finally(() => setLoading(false));
      })
      .catch((error) => {

      })
  }, [id])

  return <>{loading ? <MyLoader /> : <ItemDetail producto={producto} />}</>;
}

export default ItemDetailContainer
