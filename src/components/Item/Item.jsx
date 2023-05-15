import './Item.css'
import { Link } from 'react-router-dom';



const Item = ({id, nombre, img, precio}) => {

 
    return(
        <div className='cardProduct'>
            
                    <div key={id}>
                        <img className='productImage' src={img} alt={nombre} />
                        <h2>{nombre}</h2>
                        <p>Precio: ${precio}</p>
                        <Link className='btnDetail' to={`/item/${id}`}> Ver Detalle </Link>
                    </div>
        </div>
    )
}

export default Item