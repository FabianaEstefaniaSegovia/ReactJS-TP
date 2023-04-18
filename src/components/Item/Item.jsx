import './Item.css'
import { Link } from 'react-router-dom'

const Item = ({id, nombre, precio, img}) => {
    return(
        <div className='cardProduct'>
            <img className='productImage' src={img} alt={nombre} />
            <h3>{nombre}</h3>
            <p>Precio: ${precio}</p>
            <Link className='btnDetail' to={`/item/${id}`}> Ver Detalle </Link>
        </div>
    )
}

export default Item