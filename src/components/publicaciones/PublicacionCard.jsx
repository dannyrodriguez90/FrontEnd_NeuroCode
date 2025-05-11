import React from "react";
import { IonIcon } from "@ionic/react";
import { addCircleOutline } from "ionicons/icons";
import FormComentario from "./FormComentario";

const PublicacionCard = ({
  pub,
  mostrarFormulario = {},
  toggleFormulario,
  nuevoComentario = {},
  handleInput,
  handleSubmit,
  mensajeExito = {},
  enviando = {},
  comentarios = [],
}) => {
  const handleEnviarComentario = async () => {
    const comentarioGuardado = await handleSubmit(pub._id);
    if (comentarioGuardado) {
      console.log("Comentario guardado:", comentarioGuardado);
    }
  };

  return (
    <div className="publicacion-card">
      <div className="publicacion-header">
        <h2 className="publicacion-titulo">{pub.titulo}</h2>
        <button
          className="boton-comentar"
          onClick={() => toggleFormulario(pub._id)}
          title="Agregar comentario"
        >
          <IonIcon icon={addCircleOutline} className="icon-agregar-comentario" />
        </button>
      </div>

      <p className="publicacion-descripcion">{pub.descripcion}</p>
      <p className="publicacion-contenido">{pub.contenido}</p>

      <p className="publicacion-fecha">
        Publicado el: {new Date(pub.createdAt || pub.fecha).toLocaleDateString()}
      </p>

      {mostrarFormulario[pub._id] && (
        <FormComentario
          pubId={pub._id}
          values={nuevoComentario[pub._id] || { autor: "", contenido: "" }}
          onChange={handleInput}
          onSubmit={handleEnviarComentario}
          enviando={enviando[pub._id]}
        />
      )}

      {mensajeExito?.[pub._id] && (
        <p className="text-green-600 mt-2 font-semibold text-sm animate-fade-in">
          {mensajeExito[pub._id]}
        </p>
      )}

      {comentarios.length > 0 && (
        <ul className="comentarios-lista">
          {comentarios.map((comentario, index) => (
            <li key={comentario._id || comentario.uid || index} className="comentario-item">
              <strong>{comentario.autor}</strong>: {comentario.contenido}
              <br />
              <span className="comentario-fecha">
                {new Date(comentario.createdAt || comentario.fecha).toLocaleString()}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PublicacionCard;