import React from "react";
import style from "./About.module.scss";

import { BiMedal } from "react-icons/bi";
import { BiHappyBeaming } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";

const About = () => {
  return (
    <section className={style.section} id="about_section">
      <div className={style.container}>
        <div className={style.title}>
          <small>Sobre nosotros</small>
          <h2>
            Nos comprometemos con la situacion de cada cliente para ayudarlo a
            gestionar su solicitud de manera efectiva,
            <span> logrando alcanzar la meta deseada.</span>
          </h2>
          <p>
            Tenemos varios años al servicio de los clientes con la finalidad de
            preparar varias formas migratorias, taxes individuales, creación de empresas y mucho más.
          </p>
        </div>

        <div className="grid">
          <div className="item">
            <div className="header">
              <BiMedal className="icon" />
              <h4>+3</h4>
            </div>
            <div className="body">
              <h4>Años de experiencia</h4>
            </div>
          </div>

          <div className="item">
            <div className="header">
              <BiHappyBeaming className="icon" />
              <h4>+25</h4>
            </div>
            <div className="body">
              <h4>Trabajos exitosos</h4>
            </div>
          </div>

          <div className="item">
            <div className="header">
              <HiOutlineDocumentText className="icon" />
              <h4>+5</h4>
            </div>
            <div className="body">
              <h4>Formas de trabajo</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="circle circle1"></div>
      <div className="circle circle2"></div>
    </section>
  );
};

export default About;
