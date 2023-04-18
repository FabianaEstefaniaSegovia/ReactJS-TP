import React from 'react'
import './CartWidget.css'

const CartWidget = () => {
    const imgCarrito = require('./buy-home.png')

    return (
    
        <div>
            <img className='imgCarrito' src={imgCarrito} alt="Carrito " />
            <p>3</p>
        </div>
    )
}

export default CartWidget