import React, { useEffect, useState } from "react";
import { getCursos } from "../../services/api.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import { useCursoFiltro } from "../../shared/hook/useCursoFiltro.jsx";
import ListaCursos from "../../components/cursos/ListaCursos.jsx";
import "./curso.css";

const Cursos = () => {
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    getCursos().then((data) => {
      setCursos(data);
    });
  }, []);

  const { cursosFiltrados, setFiltro } = useCursoFiltro(cursos);

  useEffect(() => {
    const handleBuscar = (e) => {
      setFiltro(e.detail);
    };

    window.addEventListener("buscar-curso", handleBuscar);
    return () => window.removeEventListener("buscar-curso", handleBuscar);
  }, [setFiltro]);

  return (
    <>
      <Navbar />
      <div className="curso-container">
        <h1 className="curso-title">Vista general de curso</h1>
        <ListaCursos cursosFiltrados={cursosFiltrados} />
      </div>
    </>
  );
};

export default Cursos;
