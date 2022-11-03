import React from "react";
import style from "./Hero.module.scss";

import Image from "next/image";
import Link from "next/link";

import illus from "../../public/img/Illustration.svg";
import circles from "../../public/img/circles.svg";

const Hero = () => {
  return (
    <section className={style.section}>
      <div className={style.circle_container}>
        <Image src={circles} alt="" />
      </div>

      <div className={style.circle_container_2}>
        <Image src={circles} alt="" />
      </div>

      <div className={style.c1}></div>
      <div className={style.c2}></div>
      <div className={style.c3}></div>
      <div className={style.c4}></div>

      {/* Container  */}
      <div className={style.container}>
        <div className={style.img_container}>
          <Image src={illus} alt="jmj taxes" priority />
        </div>

        <div className={style.contenido}>
          <h1>Somos preparadores de documentos y formularios migratorios</h1>
          <p>
            Gestionames de una manera muy fácil y segura todos tus trámites, desde taxes, creación de empresas, asilo politico, TPS y mucho más!
          </p>
          <div className={style.btn_group}>
            <Link href="#servicios" className={style.btn1}>
              {" "}
              Servicios
            </Link>
            <Link href="#contacto" className={style.btn2}>
              {" "}
              Contacto
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
