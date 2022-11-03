import React, { useState } from "react";
import Link from "next/link";
import Nav from "./Nav";
import style from "./Header.module.scss";

import Image from "next/image";
import Logo from "../../public/img/Logo.png";

import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <header className={style.header}>
      <div className={style.container}>
        <div className={style.image_container}>
          <Image src={Logo} alt="JMJ taxes logo" />
        </div>

        <nav className={style.wide_nav}>
          <Link href="#nosotros"> Nosotros </Link>
          <Link href="#servicios"> Servicios </Link>
          <Link href="#contacto"> Contacto </Link>
        </nav>

        <button className={style.btn}>
          <BiMenuAltRight className={style.icon} onClick={toggle} />
        </button>
      </div>

      {open && <Nav />}
    </header>
  );
};

export default Header;
