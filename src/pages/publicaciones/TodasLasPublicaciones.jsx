import React, { useEffect, useState } from "react";
import { getTodasLasPublicaciones } from "../../services/api.jsx";
import Navbar from "../../pages/navbar/Navbar.jsx";
import { useFiltroPublicaciones } from "../../shared/hook/useFiltroPublicaciones.jsx";

const TodasLasPublicaciones = () => {
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    getTodasLasPublicaciones().then((data) => {
      setPublicaciones(data);
    });
  }, []);

  const {
    publicacionesFiltradas,
    cursosUnicos,
    cursoSeleccionado,
    setCursoSeleccionado,
    ordenFecha,
    setOrdenFecha
  } = useFiltroPublicaciones(publicaciones);

  return (
    <>
      <Navbar />
      <div className="publicaciones-container">
        <h1 className="publicaciones-title">Todas las Publicaciones</h1>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <select value={cursoSeleccionado} onChange={(e) => setCursoSeleccionado(e.target.value)}>
            <option value="todos">Todos los cursos</option>
            {cursosUnicos.map((curso) => (
              <option key={curso} value={curso}>{curso}</option>
            ))}
          </select>

          <select value={ordenFecha} onChange={(e) => setOrdenFecha(e.target.value)}>
            <option value="reciente">Más recientes primero</option>
            <option value="antiguo">Más antiguos primero</option>
          </select>
        </div>

        {publicacionesFiltradas.length === 0 ? (
          <p>No se encontraron publicaciones.</p>
        ) : (
          publicacionesFiltradas.map((pub) => (
            <div key={pub._id} className="publicacion-card">
              <h2>{pub.titulo}</h2>
              <p>{pub.contenido}</p>
              <p><strong>Curso:</strong> {pub.cursoId?.nombre || "Sin curso"}</p>
              <p className="publicacion-fecha">
                Publicado el: {new Date(pub.createdAt || pub.fecha).toLocaleDateString()}
              </p>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default TodasLasPublicaciones;
