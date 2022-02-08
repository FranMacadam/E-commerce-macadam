import React, { useState, useEffect } from 'react';
import ItemList from './ItemList'
import { useParams } from "react-router-dom"
import { database } from '../../../Firebase'
import MyLoader from '../../../MyLoader'
import { getDocs, query, collection, where } from "firebase/firestore"


const ItemListContainer = () => {

  let [list, setList] = useState([])
  const { id } = useParams();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    const productosCollection = collection(database, "productos")
    if (id != null) {
      const consulta = query(productosCollection, where("category", "==", id))
      getDocs(consulta)
        .then(({ docs }) => {
          setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        })
        .catch((error) => {
          console.log(error)
        })
    } else {
      getDocs(productosCollection)
        .then(({ docs }) => {
          setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }).finally(() => setLoading(false))
        .catch((error) => {
          console.log(error)
        })
    }
  }, [id]);

  return <div className="itemListContainer">{loading ? <MyLoader /> : <ItemList products={list} />}</div>;
}

export default ItemListContainer;
