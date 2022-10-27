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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta fugit
            ducimus hic veritatis vitae vel cumque? Laboriosam optio iusto at
            suscipit velit aliquid maiores voluptatum?
          </p>
          <div className={style.btn_group}>
            <Link href="#" className={style.btn1}>
              {" "}
              Btn 1
            </Link>
            <Link href="#" className={style.btn2}>
              {" "}
              Btn 2
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
