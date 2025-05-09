import { useEffect, useState } from "react";

export const useFiltroPublicaciones = (publicaciones) => {
  const [filtradas, setFiltradas] = useState([]);
  const [cursoSeleccionado, setCursoSeleccionado] = useState("todos");
  const [ordenFecha, setOrdenFecha] = useState("reciente");

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

  const cursosUnicos = [...new Set(publicaciones.map(pub => pub.cursoId?.nombre).filter(Boolean))];

  const publicacionesFiltradas = filtradas
    .filter(pub => cursoSeleccionado === "todos" || pub.cursoId?.nombre === cursoSeleccionado)
    .sort((a, b) => {
      const fechaA = new Date(a.createdAt || a.fecha);
      const fechaB = new Date(b.createdAt || b.fecha);
      return ordenFecha === "reciente" ? fechaB - fechaA : fechaA - fechaB;
    });

  return {
    publicacionesFiltradas,
    cursosUnicos,
    cursoSeleccionado,
    setCursoSeleccionado,
    ordenFecha,
    setOrdenFecha,
  };
};
