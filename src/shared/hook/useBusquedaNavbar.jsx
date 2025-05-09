import { useCallback } from "react";

export const useBusquedaNavbar = () => {
  const handleBuscarCurso = useCallback((e) => {
    const event = new CustomEvent("buscar-curso", {
      detail: e.target.value,
    });
    window.dispatchEvent(event);
  }, []);

  const handleBuscarPublicacion = useCallback((e) => {
    const event = new CustomEvent("buscar-publicacion", {
      detail: e.target.value,
    });
    window.dispatchEvent(event);
  }, []);

  return {
    handleBuscarCurso,
    handleBuscarPublicacion,
  };
};
