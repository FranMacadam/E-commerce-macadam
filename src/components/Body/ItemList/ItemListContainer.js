import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { database } from '../../../Firebase'
import MyLoader from '../../../MyLoader'


const ItemListContainer = props => {
  
  let [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const listParams = useParams();

  useEffect(() => {
    setLoading(true);

    const filtro = listParams.id
      ? database
          .collection('products')
          .where('category', '==', listParams.id)
      : database
          .collection('products')

    filtro

      .get()
      .then(resultados => {
        const resultadoFinal = [];
        resultados.forEach(resultado => {
          const id = resultado.id;
          const dataFinal = { id, ...resultado.data() };
          resultadoFinal.push(dataFinal);
          return resultadoFinal;
        });
        setData(resultadoFinal);
      })
      .finally(() => setLoading(false));
  }, [listParams.id]);


  return <div className="itemListContainer">{loading ? <MyLoader /> : <ItemList productos={data} />}</div>;
}

export default ItemListContainer;
