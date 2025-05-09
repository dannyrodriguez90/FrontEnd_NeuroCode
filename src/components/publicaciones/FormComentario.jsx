import React from "react";

const FormComentario = ({ pubId, values, onChange, onSubmit, enviando }) => (
  <div className="form-comentario">
    <input
      type="text"
      placeholder="Tu nombre"
      className="autor"
      value={values.autor}
      onChange={(e) => onChange(pubId, "autor", e.target.value)}
    />
    <input
      type="text"
      placeholder="Tu comentario"
      className="contenido"
      value={values.contenido}
      onChange={(e) => onChange(pubId, "contenido", e.target.value)}
    />
    <button
      onClick={() => onSubmit(pubId)}
      disabled={
        enviando || !values.autor?.trim() || !values.contenido?.trim()
      }
    >
      {enviando ? "Enviando..." : "Comentar"}
    </button>
  </div>
);

export default FormComentario;
