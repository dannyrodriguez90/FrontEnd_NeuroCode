import { useState } from "react";
import { crearComentario, obtenerComentarios } from "../../services/api.jsx";

export const useComentario = () => {
  const [nuevoComentario, setNuevoComentario] = useState({});
  const [comentariosPorPublicacion, setComentariosPorPublicacion] = useState({});
  const [mensajeExito, setMensajeExito] = useState({});
  const [enviando, setEnviando] = useState({});

  const handleInput = (publicacionId, field, value) => {
    setNuevoComentario((prev) => ({
      ...prev,
      [publicacionId]: {
        ...prev[publicacionId],
        [field]: value
      }
    }));
  };

  const cargarComentarios = async (publicacionId) => {
    const result = await obtenerComentarios(publicacionId);
    if (result && Array.isArray(result)) {
      setComentariosPorPublicacion((prev) => ({
        ...prev,
        [publicacionId]: result
      }));
    }
  };

  const handleSubmit = async (publicacionId) => {
    const data = {
      autor: nuevoComentario[publicacionId]?.autor || "",
      contenido: nuevoComentario[publicacionId]?.contenido || "",
      publicacion: publicacionId
    };

    if (!data.autor || !data.contenido) {
      alert("Debes ingresar autor y contenido");
      return;
    }

    setEnviando((prev) => ({ ...prev, [publicacionId]: true }));

    const result = await crearComentario(data);

    if (!result.error && result.comentario) {
      setNuevoComentario((prev) => ({
        ...prev,
        [publicacionId]: { autor: "", contenido: "" }
      }));
      await cargarComentarios(publicacionId);
      setMensajeExito((prev) => ({
        ...prev,
        [publicacionId]: "¡Gracias por tu comentario!"
      }));

      setTimeout(() => {
        setMensajeExito((prev) => ({
          ...prev,
          [publicacionId]: ""
        }));
      }, 3000);
    }

    setEnviando((prev) => ({ ...prev, [publicacionId]: false }));
  };

  return {
    nuevoComentario,
    handleInput,
    handleSubmit,
    comentariosPorPublicacion,
    cargarComentarios,
    mensajeExito,
    enviando
  };
};
