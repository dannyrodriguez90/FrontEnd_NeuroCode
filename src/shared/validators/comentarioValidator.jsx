export const validarComentario = ({ autor, contenido }) => {
  if (!autor?.trim() || !contenido?.trim()) {
    return "Autor y contenido son obligatorios";
  }
  if (autor.length > 50) return "El autor no debe superar los 50 caracteres";
  if (contenido.length > 500) return "El comentario es muy largo";
  return null;
};
