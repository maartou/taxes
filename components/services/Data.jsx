import React, { useState } from "react";

const Data = (props) => {
  const [open, setOpen] = useState(false);

  const trigger = () => {
    setOpen(!open);
  };

  return (
    <article id="service-card">
      <div className="title">
        <h3>{props.title}</h3>
        <p>{props.short}</p>
        {open && props.children}
      </div>

      {open ? (
        <button onClick={trigger}> Leer menos </button>
      ) : (
        <button onClick={trigger}>Leer más</button>
      )}
    </article>
  );
};

export default Data;
