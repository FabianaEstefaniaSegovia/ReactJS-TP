import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import Title from '../Title/Title'
import { NavLink, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

const NavBar = () => {
    const [category, setCategory] = useState("");

    useEffect( () => {
        document.title=`${category}`
    },[category])

    const handlerClick = (category) => {
        setCategory(category);
    }


    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="text-decoration-none text-reset navbar-brand" to={"/"}>
                    <Title greeting = "Deco"/>  
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <ul className="navbar-nav mb-lg=0">
                            <li className="nav-item">
                                <NavLink onClick={() => handlerClick
                                ('Deco Estudio')} className= "nav-link active text-decoration-none text-reset" to={"/"}>
                                HOME
                                </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => handlerClick
                                ('Accesorios')} className= "text-decoration-none text-reset nav-link" to={`/categoria/1`}>
                                Accesorios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => handlerClick
                                ('Cuadros')} className= "text-decoration-none text-reset nav-link" to={`/categoria/3`}>
                                Cuadros
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink onClick={() => handlerClick
                                ('Alfombras')}  className= "text-decoration-none text-reset nav-link" to={`/categoria/2`}>
                                Alfombras
                            </NavLink>
                        </li>
                        <li className="nav-item ">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
    
  )
}

export default NavBar