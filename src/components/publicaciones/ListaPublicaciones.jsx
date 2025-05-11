import React from "react";

const ListaPublicaciones = ({ publicacionesFiltradas }) => {
  if (publicacionesFiltradas.length === 0) {
    return <p>No se encontraron publicaciones.</p>;
  }

  return (
    <>
      {publicacionesFiltradas.map((pub) => (
        <div key={pub._id} className="publicacion-card">
          <h2>{pub.titulo}</h2>
          <p>{pub.contenido}</p>
          <p><strong>Curso:</strong> {pub.cursoId?.nombre || "Sin curso"}</p>
          <p className="publicacion-fecha">
            Publicado el: {new Date(pub.createdAt || pub.fecha).toLocaleDateString()}
          </p>
        </div>
      ))}
    </>
  );
};

export default ListaPublicaciones;