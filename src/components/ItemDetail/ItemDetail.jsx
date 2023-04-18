import { useState } from 'react';
import './ItemDetail.css'

const ItemDetail = ({id, nombre, detalle, precio,img, stock}) => {
  
  let initial = 1;

  const [counting, setCounting] = useState(initial);

  const increaseCount = () => {
    if (counting < stock){
      setCounting(counting + 1)
    }
  }

  const decreaseCount = () => {
    if (counting > initial){
      setCounting(counting - 1);
    }
  }

  return (
    <div className='itemContainer'>
        <h2>{nombre}</h2>
        <h3>Precio: {precio}</h3>
        <h3>ID: {id}</h3>
        <p>Detalle: {detalle}</p>
        <img src={img} alt={nombre} />
        <div className='contador'>
          <button onClick={decreaseCount}> - </button>
          <p> {counting} </p>
          <button onClick={ increaseCount }> + </button>
        </div>
        <button className='cart'>Agregar al Carrito</button>
    </div>
  )
}

export default ItemDetail