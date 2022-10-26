import React from "react";
import style from "./Hero.module.scss";

import Image from "next/image";
import Link from "next/link";

import illus from "../../public/img/Illustration.svg";

const Hero = () => {
  return (
    <section className={style.section}>

      <div className={style.container}>
        <div className={style.img_container}>
          <Image src={illus} alt="jmj taxes" />
        </div>

        <div className={style.contenido}>
          <h1>Somos preparadores de documentos y formularios migratorios</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit
            ducimus hic veritatis vitae vel cumque? Laboriosam optio iusto at
            suscipit velit aliquid maiores voluptatum?
          </p>
          <div className={style.btn_group}>
            <Link href="#" className={style.btn1}> Btn 1</Link>
            <Link href="#" className={style.btn2}> Btn 2</Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
