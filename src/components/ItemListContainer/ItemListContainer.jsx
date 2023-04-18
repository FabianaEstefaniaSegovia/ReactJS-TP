import React from 'react'
import { useState, useEffect } from 'react'
import { getProducts, getProductByCategory } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState([]);

  const {categoryId} = useParams();

  useEffect( () =>{

    const productsFunction = categoryId ? getProductByCategory : getProducts;

    productsFunction(categoryId)
      .then(response => setProducts(response))
      .catch(error => console.error(error))
  }, [categoryId])

  

  return (
    <div>
      <h2 className='subtitle'> {greeting} </h2>
      <ItemList products={products}/>
    </div>
  )
}

export default ItemListContainer