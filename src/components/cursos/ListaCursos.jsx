import React from "react";
import CourseCard from "./CourseCard";

const ListaCursos = ({ cursosFiltrados }) => {
  if (cursosFiltrados.length === 0) {
    return <p>No se encontraron cursos.</p>;
  }

  return (
    <div className="curso-grid">
      {cursosFiltrados.map((curso) => (
        <CourseCard key={curso.uid} titulo={curso.nombre} cursoId={curso.uid} />
      ))}
    </div>
  );
};

export default ListaCursos;