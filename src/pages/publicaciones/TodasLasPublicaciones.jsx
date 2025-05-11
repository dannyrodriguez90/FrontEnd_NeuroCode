import React, { useEffect, useState } from "react";
import { getTodasLasPublicaciones } from "../../services/api.jsx";
import Navbar from "../../pages/navbar/Navbar.jsx";
import { useFiltroPublicaciones } from "../../shared/hook/useFiltroPublicaciones.jsx";
import FiltrosPublicaciones from "../../components/publicaciones/FiltrosPublicaciones.jsx";
import ListaPublicaciones from "../../components/publicaciones/ListaPublicaciones.jsx";

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
    setOrdenFecha,
  } = useFiltroPublicaciones(publicaciones);

  return (
    <>
      <Navbar />
      <div className="publicaciones-container">
        <h1 className="publicaciones-title">Todas las Publicaciones</h1>
        <FiltrosPublicaciones
          cursosUnicos={cursosUnicos}
          cursoSeleccionado={cursoSeleccionado}
          setCursoSeleccionado={setCursoSeleccionado}
          ordenFecha={ordenFecha}
          setOrdenFecha={setOrdenFecha}
        />
        <ListaPublicaciones publicacionesFiltradas={publicacionesFiltradas} />
      </div>
    </>
  );
};

export default TodasLasPublicaciones;