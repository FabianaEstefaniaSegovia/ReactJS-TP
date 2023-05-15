import { useState, useContext } from 'react';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

const ItemDetail = ({id, nombre, detalle, precio, img, stock}) => {

  const [addQuantity, setAddQuantity] = useState(0);

  const {addProduct} = useContext(CartContext);

  const handlerquantity = (quantity) =>{
    setAddQuantity(quantity);
    const item = {id, nombre, precio};
    addProduct(item, quantity);
  
  }

  return (
    <div className='itemContainer'>
        <h2>{nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Detalle: {detalle}</p>
        <img src={img} alt={nombre} />
        {
          addQuantity > 0 ? (<Link to="/cart"> Terminar Compra </Link>) : (<ItemCount inicial={1} stock={stock} onAdd={ handlerquantity }/>)
        }
    </div>
  )
}

export default ItemDetail