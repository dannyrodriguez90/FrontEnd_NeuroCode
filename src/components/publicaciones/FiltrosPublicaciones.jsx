import React from "react";
import { IonIcon } from "@ionic/react";
import { calendarOutline, funnelOutline } from "ionicons/icons";

const FiltrosPublicaciones = ({
  cursosUnicos,
  cursoSeleccionado,
  setCursoSeleccionado,
  ordenFecha,
  setOrdenFecha,
}) => {
  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <IonIcon icon={funnelOutline} />
        <select
          value={cursoSeleccionado}
          onChange={(e) => setCursoSeleccionado(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "0.9rem",
          }}
        >
          <option value="todos">Todos los cursos</option>
          {cursosUnicos.map((curso) => (
            <option key={curso} value={curso}>
              {curso}
            </option>
          ))}
        </select>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        <IonIcon icon={calendarOutline} />
        <select
          value={ordenFecha}
          onChange={(e) => setOrdenFecha(e.target.value)}
          style={{
            padding: "0.5rem",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "0.9rem",
          }}
        >
          <option value="reciente">Más recientes</option>
          <option value="antiguo">Más antiguos</option>
        </select>
      </div>
    </div>
  );
};

export default FiltrosPublicaciones;