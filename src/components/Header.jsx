import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <ul className='navUl'>
        <Link to='/main'>Главная</Link>
        <Link to='/about'>о нас</Link>
        <Link to='/order'>оформить заказ</Link>
    </ul>
  )
}
