import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";

const Contact = () => {
  return (
    <section id="contact_section">
      <div className="container">
        <div className="content">
          <h2 id="contacto">Contáctanos</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut
            molestias itaque iste ad cum. Dolorem consectetur quisquam debitis
            labore perspiciatis.
          </p>

          <form action="">
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
              <h5>Correo@gmail.com</h5>
            </div>

            <div className="item">
              <AiOutlinePhone className="icon" />
              <h5>+12345678</h5>
            </div>

            <div className="item">
              <HiOutlineLocationMarker className="icon" />
              <h5>Georgia - US</h5>
            </div>

            <div className="item">
              <AiOutlineClockCircle className="icon" />
              <h5>09:00 - 18:00</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="deco"></div>
    </section>
  );
};

export default Contact;
