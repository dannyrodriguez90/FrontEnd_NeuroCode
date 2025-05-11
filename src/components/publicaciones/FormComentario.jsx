import React from "react";
import { IonIcon } from "@ionic/react";
import { personOutline } from "ionicons/icons";

const FormComentario = ({ pubId, values, onChange, onSubmit, enviando }) => (
  <div className="form-comentario">
    <div className="form-group">
      <IonIcon icon={personOutline} className="icon-autor" />
      <input
        type="text"
        placeholder="Tu nombre"
        className="autor"
        value={values.autor || ""}
        onChange={(e) => onChange(pubId, "autor", e.target.value)}
      />
    </div>
    <input
      type="text"
      placeholder="Tu comentario"
      className="contenido"
      value={values.contenido || ""}
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