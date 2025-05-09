import React from "react";
import Cursos from "../src/pages/cursos/curso.jsx";
import PublicacionesCurso from "../src/pages/publicaciones/publicacionesCurso.jsx";

export const routes = [
  { path: "/", element: <Cursos /> },
  { path: "/curso/:cursoId/publicaciones", element: <PublicacionesCurso /> }
];
