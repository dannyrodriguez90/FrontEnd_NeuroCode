import React from "react";
import Cursos from "../src/pages/cursos/curso.jsx";
import PublicacionesCurso from "../src/pages/publicaciones/publicacionesCurso.jsx";
import TodasLasPublicaciones from "../src/pages/publicaciones/TodasLasPublicaciones.jsx";

export const routes = [
  { path: "/", element: <Cursos /> },
  { path: "/curso/:cursoId/publicaciones", element: <PublicacionesCurso /> },
  { path: "/publicaciones/todas", element: <TodasLasPublicaciones />}

];
