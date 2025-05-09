import React from "react";
import FormComentario from "./FormComentario";
import agregarIcon from "../../assets/agregar_comentario.png";

const PublicacionCard = ({
  pub,
  mostrarFormulario,
  toggleFormulario,
  nuevoComentario,
  handleInput,
  handleSubmit,
  mensajeExito,
  enviando,
  comentarios
}) => (
  <div className="publicacion-card">
    <div className="publicacion-header">
      <h2 className="publicacion-titulo">{pub.titulo}</h2>
      <button
        className="boton-comentar"
        onClick={() => toggleFormulario(pub._id)}
        title="Agregar comentario"
      >
        <img src={agregarIcon} alt="Agregar comentario" />
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
        onSubmit={handleSubmit}
        enviando={enviando[pub._id]}
      />
    )}

    {mensajeExito?.[pub._id] && (
      <p className="text-green-600 mt-2">{mensajeExito[pub._id]}</p>
    )}

    {comentarios.length > 0 && (
      <ul className="comentarios-lista">
        {comentarios.map((comentario) => (
          <li key={comentario.uid} className="comentario-item">
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

export default PublicacionCard;
