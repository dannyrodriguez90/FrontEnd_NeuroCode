import { useState, useMemo } from "react";

export function useCursoFiltro(cursos) {
  const [filtro, setFiltro] = useState("");

  const cursosFiltrados = useMemo(() => {
    return cursos.filter((curso) =>
      curso.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
  }, [filtro, cursos]);

  return { filtro, setFiltro, cursosFiltrados };
}
