import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import '../styles/header.css'
import Button from './Button'

function Header() {
  const [click, setClcik] = useState(false)

  const handleClick = () => {
    setClcik(value => !value)
  }

  return (
    <header>
        <a exact href='/'  className="logo">
            MR
        </a>
        <Button handleClick={handleClick} />
        <nav className={`${click && 'active' }`}>
            <ul className='menu'>
                <li><Link className='link' to='/'>Peliculas</Link></li>
                <li><Link  className='link' to='/favoritos'>Favoritos</Link></li>
                <li><Link  className='link' to='/lista'>Lista</Link></li>
                <li><Link  className='link' to='/populares'>Populares</Link></li>
                <li><Link  className='link' to='/tendencias'>Tendencias</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header