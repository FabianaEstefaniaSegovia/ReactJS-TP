import React from 'react'
import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({ inicial, stock, onAdd }) => {
    const [counting, setCounting] = useState(inicial);

    const increaseCount = () => {
        if(counting < stock){
            setCounting(counting+1);
        }
    }

    const decreaseCount = () => {
        if(counting > inicial){
            setCounting(counting-1);
        }
    }

  return (
    <div>
        <div>
            <button onClick={decreaseCount}> - </button>
            <p> {counting} </p>
            <button onClick={increaseCount}> + </button>
        </div>
        <button onClick={()=> onAdd(counting)}>Agregar al Carrito</button>
    </div>

  )
}

export default ItemCount