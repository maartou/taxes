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
        <Data
          title="Taxes individuales"
          short="El impuesto federal a la renta es simplemente un gravamen que el gobierno de los Estados Unidos cobra a las personas, de acuerdo con la cantidad de dinero que gana cada año y otros requisitos."
        >
          <p>
            Es importante resaltar que Cualquier persona, compañía, negocio o
            trabajador por cuenta propia que haya generado un ingreso o
            ganancia, durante un año fiscal debe declarar al IRS sus impuestos
            federales sobre la renta.
          </p>
        </Data>

        <Data
          title="Creación de empresas"
          short="Separa tus activos personales y comerciales evitando correr riesgos."
        >
          <p>Además de llevar una correcta contabilidad, para eso crea tu propia empresa.</p>
        </Data>

        <Data title="Asilo" short="El asilo es una forma de protección que le permite a un individuo permanecer en los Estados Unidos en lugar de ser expulsado (deportado) a un país donde teme ser perseguido o lastimado. ">
          <h4>Las razones por las cúales debe solicitar asilo politico son:</h4>
          <ul>
            <li>Raza</li>
            <li>Religión</li>
            <li>Nacionalidad</li>
            <li>Opinión politica</li>
            <li>Pertenecer a un grupo social</li>
          </ul>
        </Data>

        <Data
          title="Permiso de trabajo por primera vez y renovación"
          short="description text"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consequuntur quasi laudantium temporibus expedita nulla inventore
            iusto facere tempora, dolore numquam soluta recusandae quis odio
            fugit, ratione eum sapiente minus.
          </p>
        </Data>

        <Data title="TPS y re-registración" short="description text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consequuntur quasi laudantium temporibus expedita nulla inventore
            iusto facere tempora, dolore numquam soluta recusandae quis odio
            fugit, ratione eum sapiente minus.
          </p>
        </Data>

        <Data title="Residencia y ciudadanía" short="description text">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consequuntur quasi laudantium temporibus expedita nulla inventore
            iusto facere tempora, dolore numquam soluta recusandae quis odio
            fugit, ratione eum sapiente minus.
          </p>
        </Data>

        <Data
          title="Soporte en caso de accidente de tránsito o laboral"
          short="description text"
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            consequuntur quasi laudantium temporibus expedita nulla inventore
            iusto facere tempora, dolore numquam soluta recusandae quis odio
            fugit, ratione eum sapiente minus.
          </p>
        </Data>
      </div>
    </section>
  );
};

export default Services;
