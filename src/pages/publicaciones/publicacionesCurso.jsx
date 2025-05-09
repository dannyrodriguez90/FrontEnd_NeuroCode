import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import PublicacionCard from "../../components/publicaciones/PublicacionCard";
import { usePublicacionesCurso } from "../../shared/hook/usePublicacionesCurso";
import "./publicacionesCurso.css";

const PublicacionesCurso = () => {
  const { cursoId } = useParams();
  const [filtradas, setFiltradas] = useState([]);

  const {
    publicaciones,
    mostrarFormulario,
    toggleFormulario,
    nuevoComentario,
    handleInput,
    handleSubmit,
    comentariosPorPublicacion,
    mensajeExito,
    enviando
  } = usePublicacionesCurso(cursoId);

  useEffect(() => {
    setFiltradas(publicaciones);
  }, [publicaciones]);

  useEffect(() => {
    const handleBuscar = (e) => {
      const query = e.detail.toLowerCase();
      const resultado = publicaciones.filter((pub) =>
        pub.titulo.toLowerCase().includes(query) ||
        pub.contenido.toLowerCase().includes(query)
      );
      setFiltradas(resultado);
    };

    window.addEventListener("buscar-publicacion", handleBuscar);
    return () => window.removeEventListener("buscar-publicacion", handleBuscar);
  }, [publicaciones]);

  return (
    <>
      <Navbar />
      <div className="publicaciones-container">
        <h1 className="publicaciones-title">Publicaciones del curso</h1>
        {filtradas.map((pub) => (
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
        ))}
      </div>
    </>
  );
};

export default PublicacionesCurso;
