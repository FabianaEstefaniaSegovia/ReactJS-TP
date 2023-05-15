import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css';
import { collection, getDocs, where, query } from 'firebase/firestore';
import { db } from '../../services/firebase/config';

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();

  useEffect(() => {
    const myProducts = categoryId ? query(collection(db, "products"), where("idCat", "==", categoryId)) : collection(db, "products")
    getDocs(myProducts)
      .then(response=> {
        const newProducts = response.docs.map(doc=>{
          const data = doc.data()
          return{id:doc.id, ...data}
        })
        setProducts(newProducts);
      })
      .catch(error => console.log(error))
  },[categoryId])

  

  return (
    <div>
      <h2 className='subtitle'> {greeting} </h2>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer