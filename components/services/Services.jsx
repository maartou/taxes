import React, { useState } from "react";
import Data from "./Data";

const Services = () => {
  const [open, setOpen] = useState(false);

  const trigger = () => {
    setOpen(!open);
  };

  return (
    <section id="services-section">
      <div className="title">
        <small>Nuestros servicios</small>
        <h2>Somos especialistas en:</h2>
      </div>

      <div className="container">
        <div className="item">
          <h3>Taxes</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere
            provident fugit ducimus sequi excepturi! Fugiat eius ipsam sunt
            incidunt?
          </p>

          {/* Datos desplegables */}
          {open && (
            <Data>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                mollitia architecto animi nostrum temporibus, quas natus unde
                deleniti vitae vel.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                laboriosam est quod perferendis exercitationem sit expedita
                quibusdam! Rem, laudantium perferendis rerum nisi quam atque
                sequi ullam, praesentium aliquam voluptatem voluptas.
              </p>
            </Data>
          )}

          {/* Evento para desplegar */}
          {open ? (
            <button onClick={trigger}>Leer menos</button>
          ) : (
            <button onClick={trigger}>Leer más...</button>
          )}
        </div>

        <div className="item">
          <h3>Preparación de documentos</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere
            provident fugit ducimus sequi excepturi! Fugiat eius ipsam sunt
            incidunt?
          </p>

          {/* Datos desplegables */}
          {open && (
            <Data>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                mollitia architecto animi nostrum temporibus, quas natus unde
                deleniti vitae vel.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                laboriosam est quod perferendis exercitationem sit expedita
                quibusdam! Rem, laudantium perferendis rerum nisi quam atque
                sequi ullam, praesentium aliquam voluptatem voluptas.
              </p>
            </Data>
          )}

          {/* Evento para desplegar */}
          {open ? (
            <button onClick={trigger}>Leer menos</button>
          ) : (
            <button onClick={trigger}>Leer más...</button>
          )}
        </div>

        <div className="item">
          <h3>Creación de empresas</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere
            provident fugit ducimus sequi excepturi! Fugiat eius ipsam sunt
            incidunt?
          </p>

          {/* Datos desplegables */}
          {open && (
            <Data>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                mollitia architecto animi nostrum temporibus, quas natus unde
                deleniti vitae vel.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                laboriosam est quod perferendis exercitationem sit expedita
                quibusdam! Rem, laudantium perferendis rerum nisi quam atque
                sequi ullam, praesentium aliquam voluptatem voluptas.
              </p>
            </Data>
          )}

          {/* Evento para desplegar */}
          {open ? (
            <button onClick={trigger}>Leer menos</button>
          ) : (
            <button onClick={trigger}>Leer más...</button>
          )}
        </div>

        <div className="item">
          <h3>Otros servicios</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad facere
            provident fugit ducimus sequi excepturi! Fugiat eius ipsam sunt
            incidunt?
          </p>

          {/* Datos desplegables */}
          {open && (
            <Data>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
                mollitia architecto animi nostrum temporibus, quas natus unde
                deleniti vitae vel.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
                laboriosam est quod perferendis exercitationem sit expedita
                quibusdam! Rem, laudantium perferendis rerum nisi quam atque
                sequi ullam, praesentium aliquam voluptatem voluptas.
              </p>
            </Data>
          )}

          {/* Evento para desplegar */}
          {open ? (
            <button onClick={trigger}>Leer menos</button>
          ) : (
            <button onClick={trigger}>Leer más...</button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services;
