import React from "react";

const FiltrosPublicaciones = ({
  cursosUnicos,
  cursoSeleccionado,
  setCursoSeleccionado,
  ordenFecha,
  setOrdenFecha,
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
      <select value={cursoSeleccionado} onChange={(e) => setCursoSeleccionado(e.target.value)}>
        <option value="todos">Todos los cursos</option>
        {cursosUnicos.map((curso) => (
          <option key={curso} value={curso}>{curso}</option>
        ))}
      </select>

      <select value={ordenFecha} onChange={(e) => setOrdenFecha(e.target.value)}>
        <option value="reciente">Más recientes </option>
        <option value="antiguo">Más antiguos </option>
      </select>
    </div>
  );
};

export default FiltrosPublicaciones;