import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import { getPublicacionesPorCurso } from "../../services/api.jsx";

const PublicacionesCurso = () => {
  const { cursoId } = useParams();
  const [publicaciones, setPublicaciones] = useState([]);

  useEffect(() => {
    getPublicacionesPorCurso(cursoId).then(setPublicaciones);
  }, [cursoId]);

  return (
    <>
      <Navbar />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Publicaciones del curso</h1>
        {publicaciones.length === 0 ? (
          <p className="text-gray-500">No hay publicaciones para este curso.</p>
        ) : (
          <ul className="space-y-4">
            {publicaciones.map((pub) => (
              <li key={pub._id} className="bg-white shadow rounded p-4">
                <h2 className="font-semibold text-lg">{pub.titulo}</h2>
                <p className="text-sm text-gray-600 mt-1">{pub.contenido}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default PublicacionesCurso;
