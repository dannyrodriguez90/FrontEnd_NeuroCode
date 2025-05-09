import { useEffect, useState } from "react";
import { getPublicacionesPorCurso } from "../../services/api.jsx";
import { useComentario } from "./useComentario";

export const usePublicacionesCurso = (cursoId) => {
  const [publicaciones, setPublicaciones] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState({});

  const {
    nuevoComentario,
    handleInput,
    handleSubmit,
    comentariosPorPublicacion,
    cargarComentarios,
    mensajeExito,
    enviando
  } = useComentario();

  useEffect(() => {
    const fetch = async () => {
      const data = await getPublicacionesPorCurso(cursoId);
      setPublicaciones(data);
      data.forEach((pub) => cargarComentarios(pub._id));
    };
    if (cursoId) fetch();
  }, [cursoId]);

  const toggleFormulario = (id) => {
    setMostrarFormulario((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return {
    publicaciones,
    mostrarFormulario,
    toggleFormulario,
    nuevoComentario,
    handleInput,
    handleSubmit,
    comentariosPorPublicacion,
    mensajeExito,
    enviando
  };
};
