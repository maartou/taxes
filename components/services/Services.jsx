import React from "react";
import Data from "./Data";

const Services = () => {
  return (
    <section id="services-section">
      <div className="title" id="servicios">
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
          <p>
            Además de llevar una correcta contabilidad, para eso crea tu propia
            empresa.
          </p>
        </Data>

        <Data
          title="Asilo"
          short="El asilo es una forma de protección que le permite a un individuo permanecer en los Estados Unidos en lugar de ser expulsado (deportado) a un país donde teme ser perseguido o lastimado. "
        >
          <div className="item">
            <h4>
              Las razones por las cúales debe solicitar asilo politico son:
            </h4>
            <ul>
              <li>Raza</li>
              <li>Religión</li>
              <li>Nacionalidad</li>
              <li>Opinión politica</li>
              <li>Pertenecer a un grupo social</li>
            </ul>
          </div>

          <div className="item">
            <h4>Evidencias principales que debe presentar:</h4>
            <ul>
              <li>2 fotos tipo pasaporte del solicitante</li>
              <li>
                2 fotos tipo pasaporte del cónyuge (Si se encuentran en USA)
              </li>
              <li>
                2 fotos tipo pasaporte por cada hijo menor de 21 años soltero
                (si se encuenttra en USA)
              </li>
              <li>Copia del Acta de nacimiento del solicitante</li>
              <li>Copia del Acta de matrimonio</li>
              <li>
                Copia de la sentencia de divorcio o acta de defunción de
                excónyuge del solicitante
              </li>
              <li>
                Copia del acta de nacimiento del cónyuge (Si se encuentra en
                USA)
              </li>
              <li>
                Copia del Acta de nacimiento de cada hijo menor de 21 años y
                soltero (Si se encuentra en USA)
              </li>
              <li>
                Formulario 1-94 del solicitante, cónyuge e hijos/as (Si se
                encuentran en USA)
              </li>
            </ul>
          </div>
        </Data>

        <Data
          title="Permiso de trabajo por primera vez y renovación"
          short="¿Qué es un Permiso de Trabajo? O Tambien llamado Documento de autorizacion de empleo"
        >
          <p>
            En términos simples, se trata de un permiso que otorga el gobierno
            de los Estados Unidos, el cual le permite a los no ciudadanos
            trabajar legalmente en este país. Sin embargo, solo se otorga a
            aquellos que sean elegibles según la visa que les permita mantenerse
            en el país.
          </p>
        </Data>

        <Data
          title="TPS y re-registración"
          short="El Secretario del Departamento de Seguridad Nacional (DHS) puede designar un país extranjero al Estatus de Protección Temporal (TPS)."
        >
          <p>
            Debido a condiciones en dicho país que impiden a los ciudadanos del
            país regresar a su país temporalmente de manera segura. USCIS podría
            otorgar TPS a los nacionales elegibles de ciertos países (o partes
            de estos) que ya están en Estados Unidos. Las personas elegibles que
            no tienen nacionalidad y cuya última residencia fue el país
            designado, también podrían obtener TPS.
          </p>
        </Data>

        <Data
          title="Ciudadanía y naturalización"
          short="La ciudadanía es un vínculo en común que une a las personas a los ideales cívicos y la creencia en los derechos y libertades garantizadas en la Constitución de Estados Unidos."
        >
          <p>
            Convertirse en ciudadano estadounidense es una de las decisiones más
            importantes de un inmigrante. Según su situación, puede haber
            diferentes formas para obtener la ciudadanía.
          </p>

          <div className="item">
            <ul>
              <li>
                {" "}
                <strong>Naturalización</strong> es el proceso por medio del cual
                se otorga la ciudadanía estadounidense a un ciudadano extranjero
                después que este haya cumplido con los requisitos establecidos
                por el Congreso de los Estados Unidos en la Ley de Inmigración y
                Nacionalidad (INA, por sus siglas en inglés).{" "}
              </li>

              <li>
                {" "}
                <strong>Adquisición</strong> de ciudadanía a través de padres
                estadounidenses al nacer y otra después de haber nacido, pero
                antes de cumplir los 18 años de edad.{" "}
              </li>
            </ul>
          </div>
        </Data>

        <Data
          title="Soporte en caso de accidente de tránsito o laboral"
          short="Las lesiones que se originan en el trabajo y aquellas que son causadas por accidentes de tránsito son de las más comunes en la población en general."
        >
          <p>
            Es importante destacar que ambos tipos de situaciones tienen
            consecuencias en el desempeño laboral de las personas según el grado
            de severidad. Períodos de reposo, sueldos caídos y limitaciones
            permanentes son solo algunas de las secuelas que puede dejar la
            ocurrencia de estas circunstancias.
          </p>

          <p>
            No importa el estatus legal para establecer la demanda, además, la
            persona afectada no tiene necesidad de pagar nada. La persona
            afectada también recibe tratamiento médico y una compensación. Si
            tuviste un accidente de transito o laboral contáctame para ayudarte
            con el abogado HINES a resolver tu caso.
          </p>
        </Data>

        <Data
          title="Parole humanitario"
          short="El 12 de octubre de 2022, Estados Unidos anunció un nuevo proceso que permite a los nacionales venezolanos y sus familiares inmediatos venir a Estados Unidos."
        >
          <p>
            Este proceso proporciona una forma segura y ordenada para que los
            nacionales venezolanos que están fuera de Estados Unidos y no tienen
            documentos de entrada a EE.UU. sean considerados, caso por caso,
            para autorización adelantada para viajar y un periodo de permiso de
            permanencia temporal por hasta dos años por razones humanitarias y
            de beneficio público. Para participar en este proceso, los
            nacionales venezolanos deben:
          </p>
          <div className="item">
            <ul>
              <li>Tener una persona de apoyo en los Estados Unidos</li>
              <li>Someterse a pasar una investigación de seguridad robusta</li>
              <li>Cumplir con otros criterios de elegibilidad</li>
              <li>Ameritar un ejercicio favorable de discreción</li>
            </ul>
          </div>

          <p>
            Las personas que participan en el proceso deben tener una persona de
            apoyo en Estados Unidos que acepte proporcionarles apoyo económico
            durante la duración de su permiso de permanencia temporal en Estados
            Unidos.
          </p>
        </Data>
      </div>
    </section>
  );
};

export default Services;
