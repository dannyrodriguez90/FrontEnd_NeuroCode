import { useState, useEffect } from "react";
import { getPublicacionesPorCurso } from "../../services/api.jsx";
import { useComentario } from "./useComentario";

export const usePublicacionesCurso = (cursoId) => {
  const [publicaciones, setPublicaciones] = useState([]); // Inicializado como array vacío
  const [publicacionesFiltradas, setPublicacionesFiltradas] = useState([]); // Para manejar las publicaciones filtradas
  const [mostrarFormulario, setMostrarFormulario] = useState({});

  const {
    nuevoComentario,
    handleInput,
    handleSubmit,
    comentariosPorPublicacion,
    cargarComentarios,
    mensajeExito,
    enviando,
  } = useComentario();

  useEffect(() => {
    const fetch = async () => {
      const data = await getPublicacionesPorCurso(cursoId);
      setPublicaciones(data || []); // Asegúrate de que sea un array
      setPublicacionesFiltradas(data || []); // Inicializa las publicaciones filtradas
      data.forEach((pub) => cargarComentarios(pub._id));
    };
    if (cursoId) fetch();
  }, [cursoId]);

  // Escuchar el evento de búsqueda desde el Navbar
  useEffect(() => {
    const handleBuscarPublicacion = (event) => {
      const query = event.detail.toLowerCase();
      const filtradas = publicaciones.filter((pub) =>
        pub.titulo.toLowerCase().includes(query)
      );
      setPublicacionesFiltradas(filtradas);
    };

    window.addEventListener("buscar-publicacion", handleBuscarPublicacion);

    return () => {
      window.removeEventListener("buscar-publicacion", handleBuscarPublicacion);
    };
  }, [publicaciones]);

  const toggleFormulario = (id) => {
    setMostrarFormulario((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return {
    publicaciones: publicacionesFiltradas, // Devuelve las publicaciones filtradas
    mostrarFormulario,
    toggleFormulario,
    nuevoComentario,
    handleInput,
    handleSubmit,
    comentariosPorPublicacion,
    mensajeExito,
    enviando,
  };
};