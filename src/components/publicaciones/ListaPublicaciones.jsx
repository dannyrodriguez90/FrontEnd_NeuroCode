import React from "react";
import { IonIcon } from "@ionic/react";
import { calendarOutline, bookOutline } from "ionicons/icons";

const ListaPublicaciones = ({ publicacionesFiltradas }) => {
  if (publicacionesFiltradas.length === 0) {
    return <p>No se encontraron publicaciones.</p>;
  }

  return (
    <>
      {publicacionesFiltradas.map((pub) => (
        <div key={pub._id} className="publicacion-card">
          <h2>{pub.titulo}</h2>
          <p>{pub.contenido}</p>
          <p>
            <IonIcon icon={bookOutline} className="icon-curso" />
             {pub.cursoId?.nombre || "Sin curso"}
          </p>
          <p className="publicacion-fecha">
            <IonIcon icon={calendarOutline} className="icon-fecha" />
            Publicado el: {new Date(pub.createdAt || pub.fecha).toLocaleDateString()}
          </p>
        </div>
      ))}
    </>
  );
};

export default ListaPublicaciones;