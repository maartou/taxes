import React from 'react'
import Link from 'next/link'
import style from './Header.module.scss'

const Nav = () => {
  return (
    <nav className={style.nav}>
        <Link href="#nosotros"> Nosotros </Link>
        <Link href="#servicios"> Servicios </Link>
        <Link href="#contacto"> Contacto </Link>
    </nav>
  )
}

export default Nav