import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/img/Logo2.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="permalinks">
        <Link href="#nostros">Nosotros</Link>
        <Link href="#servicios">Servicios</Link>
        <Link href="#contacto">Contacto</Link>
      </div>

      <div className="copy">
        <p>&copy; 2022 Taxes JMJ todos los derechos reservados</p>
        <p>
          <span>NO</span> somos abogados y <span>NO</span> damos asesoría legal.
        </p>
      </div>

      <div className="img">
        <Link href="#">
          <Image src={logo} alt="taxes jmj" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
