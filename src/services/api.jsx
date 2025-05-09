import axios from 'axios';

const apiClient = axios.create({
  baseURL: "http://localhost:3001/neuroCode/v1",
  timeout: 3000
});

export const getCursos = async () => {
  try {
    const response = await apiClient.get("/curso"); 
    return response.data.cursos;
  } catch (e) {
    return { error: true, e };
  }
};

export const getPublicacionesPorCurso = async (cursoId) => {
  try {
    const response = await apiClient.get(`/publicaciones/obtenerCurso/${cursoId}`);
    return response.data.publicaciones;
  } catch (e) {
    console.error("Error al obtener publicaciones:", e);
    return [];
  }
};


export const crearComentario = async (data) => {
  try {
    const res = await apiClient.post("/comentarios/crearComentario", data);
    return res.data;
  } catch (e) {
    console.error("Error al crear comentario:", e);
    return { error: true, message: e.message };
  }
};

export const obtenerComentarios = async (publicacionId) => {
  try {
    const res = await apiClient.get(`/comentarios/obtenerComentario/${publicacionId}`);
    return res.data; 
  } catch (e) {
    console.error("Error al obtener comentarios:", e);
    return [];
  }
};


export const getTodasLasPublicaciones = async () => {
  try {
    const res = await apiClient.get("/publicaciones");
    return res.data.publicaciones;
  } catch (error) {
    console.error("Error al obtener publicaciones:", error);
    return [];
  }
};

