import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import PublicacionCard from "../../components/publicaciones/PublicacionCard";
import { usePublicacionesCurso } from "../../shared/hook/usePublicacionesCurso";
import "./publicacionesCurso.css";

const PublicacionesCurso = () => {
  const { cursoId } = useParams();

  const {
    publicaciones, 
    mostrarFormulario,
    toggleFormulario,
    nuevoComentario,
    handleInput,
    handleSubmit,
    comentariosPorPublicacion,
    mensajeExito,
    enviando,
  } = usePublicacionesCurso(cursoId);

  return (
    <>
      <Navbar />
      <div className="publicaciones-container">
        <h1 className="publicaciones-title">Publicaciones del curso</h1>
        {publicaciones && publicaciones.length > 0 ? (
          publicaciones.map((pub) => (
            <PublicacionCard
              key={pub._id}
              pub={pub}
              mostrarFormulario={mostrarFormulario}
              toggleFormulario={toggleFormulario}
              nuevoComentario={nuevoComentario}
              handleInput={handleInput}
              handleSubmit={handleSubmit}
              mensajeExito={mensajeExito}
              enviando={enviando}
              comentarios={comentariosPorPublicacion[pub._id] || []}
            />
          ))
        ) : (
          <p>No se encontraron publicaciones.</p>
        )}
      </div>
    </>
  );
};

export default PublicacionesCurso;