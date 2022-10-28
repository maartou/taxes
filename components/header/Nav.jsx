import React from 'react'
import Link from 'next/link'
import style from './Header.module.scss'

const Nav = () => {
  return (
    <nav className={style.nav}>
        <Link href="#"> Nosotros </Link>
        <Link href="#"> Servicios </Link>
        <Link href="#"> Contacto </Link>
    </nav>
  )
}

export default Nav