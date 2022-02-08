import ItemDetail from './ItemDetail'
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { database } from '../../../Firebase'
import MyLoader from '../../../MyLoader'
import { collection , doc , getDoc } from "firebase/firestore";

function ItemDetailContainer() {
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState();

  const detailParams = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(database, 'Products')
    const refDoc = doc(productsCollection, detailParams)
    getDoc(refDoc)
      .then(resultado => {
        const id = resultado.id;
        const dataFinal = { id, ...resultado.data() };
        setProducto(dataFinal);
      })
      .finally(() => setLoading(false));
  }, [detailParams]);

  return <>{loading ? <MyLoader /> : <ItemDetail producto={producto} />}</>;
}

export default ItemDetailContainer;