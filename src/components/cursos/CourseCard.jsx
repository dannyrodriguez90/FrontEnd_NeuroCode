import React from "react";
import { useNavigate } from "react-router-dom";
import blogImage from "../../assets/ejemplo-de-lo-que-es-un-blog.jpg";

const CourseCard = ({ titulo, cursoId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/curso/${cursoId}/publicaciones`);
  };

  return (
    <div className="course-card">
      <div
        className="course-image"
        style={{ backgroundImage: `url(${blogImage})` }}
      />
      <div className="course-body">
        <div className="course-title">{titulo}</div>
        <button className="course-button" onClick={handleClick}>
          Entrar al curso
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
