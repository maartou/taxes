import React from "react";
import { useForm } from "@formspree/react";

import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

const Contact = () => {
  const [state, handleSubmit] = useForm("mayklzpr");
  if (state.succeeded) {
    return <div>El email ha sido enviado!</div>;
  }

  return (
    <section id="contact_section">
      <div className="container">
        <div className="content">
          <h2 id="contacto">Contáctanos</h2>
          <p>
            Para más información contáctanos vía WhatsApp o correo eléctronico y
            envíanos tu caso. Te asistiremos a gestionar cualquier trámite que
            necesites a la mayor brevedad posible.
          </p>

          <form
            action="https://formspree.io/f/mayklzpr"
            onSubmit={handleSubmit}
            method="POST"
          >
            <div className="item">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" name="nombre" id="nombre" />
            </div>

            <div className="item">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>

            <div className="item">
              <label htmlFor="mensaje">Mensaje</label>
              <textarea name="mensaje" id="mensaje"></textarea>
            </div>

            <button type="submit"> Enviar </button>
          </form>
        </div>

        <div className="info">
          <h4>Más información</h4>
          <div className="container_info">
            <div className="item">
              <AiOutlineMail className="icon" />
              <h5>taxesjmj@gmail.com</h5>
            </div>

            <div className="item">
              <AiOutlinePhone className="icon" />
              <h5>+1 385 425 9442</h5>
            </div>

            <div className="item">
              <AiOutlineWhatsApp className="icon" />
              <a
                href="https://walink.co/24fc12"
                target="_blank"
                rel="noreferrer"
              >
                Envíanos un mensaje
              </a>
            </div>

            <div className="item">
              <AiOutlineInstagram className="icon" />
              <a
                href="https://instagram.com/taxesjmj"
                target="_blank"
                rel="noreferrer"
              >
                Siguenos en Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="deco"></div>
    </section>
  );
};

export default Contact;
