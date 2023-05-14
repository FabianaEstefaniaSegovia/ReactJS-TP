import React from 'react'

const CartItem = (item, quantity) => {
  return (
    <div>
        <h4> {item.nombre} </h4>
        <p>Cantidad: {quantity} </p>
        <p>Precio: $ {item.precio} </p>
    </div>
  )
}

export default CartItem