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