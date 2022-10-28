import React from "react";
import style from "./About.module.scss";

const About = () => {
  return (
    <section className={style.section}>
      <div className={style.container}>
        <div className={style.title}>
          <small>Sobre nosotros</small>
          <h2>Título secundario - sobre nosotros</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis, earum libero exercitationem minima, incidunt nulla ab
            odio enim fugit debitis asperiores dolore necessitatibus veritatis
            doloribus, voluptatum aperiam quaerat nesciunt et.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
