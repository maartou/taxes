import React from "react";
import Data from "./Data";

const Services = () => {
  return (
    <section id="services-section">
      <div className="title">
        <small>Nuestros servicios</small>
        <h2>Somos especialistas en:</h2>
      </div>

      <div className="container">
        <Data title="Taxes individuales" short="Descripción - texto de prueba">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            aspernatur reiciendis doloremque qui ad mollitia eveniet quod
            temporibus quis tenetur earum accusamus itaque, rem distinctio
            eligendi delectus doloribus et recusandae.
          </p>

          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            corporis facere vero magni impedit voluptates velit aspernatur quas
            rerum accusamus.
          </p>
        </Data>

        <Data
          title="Creación de empresas"
          short="Descripción - texto dummy - relleno"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ut
            aperiam velit maiores! Culpa molestiae exercitationem dolor eius
            autem enim.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, natus.
          </p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eos
          perspiciatis molestiae id saepe.
        </Data>

        <Data title="Asilo" short="Asilo politico para ayudarlo">
          <h4>Las razones por las cúales debe solicitar asilo politico son:</h4>
          <ul>
            <li>Raza</li>
            <li>Religión</li>
            <li>Nacionalidad</li>
            <li>Opinión politica</li>
            <li>Pertenecer a un grupo social</li>
          </ul>
        </Data>

        <Data title="Permiso de trabajo por primera vez y renovación" short="description text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur quasi laudantium temporibus expedita nulla inventore iusto facere tempora, dolore numquam soluta recusandae quis odio fugit, ratione eum sapiente minus.</p>
        </Data>

        <Data title="TPS y re-registración" short="description text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur quasi laudantium temporibus expedita nulla inventore iusto facere tempora, dolore numquam soluta recusandae quis odio fugit, ratione eum sapiente minus.</p>
        </Data>

        <Data title="Residencia y ciudadanía" short="description text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur quasi laudantium temporibus expedita nulla inventore iusto facere tempora, dolore numquam soluta recusandae quis odio fugit, ratione eum sapiente minus.</p>
        </Data>

        <Data title="Soporte en caso de accidente de tránsito o laboral" short="description text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores consequuntur quasi laudantium temporibus expedita nulla inventore iusto facere tempora, dolore numquam soluta recusandae quis odio fugit, ratione eum sapiente minus.</p>
        </Data>
      </div>
    </section>
  );
};

export default Services;
