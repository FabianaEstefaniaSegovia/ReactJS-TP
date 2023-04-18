import React from 'react'
import './Title.css'

const Title = (props) => {
  return (
    <div>
    <h1 className='deco'>{props.greeting}</h1>
    <h2 className='estudio'>Estudio</h2>
    </div>
  )
}

export default Title