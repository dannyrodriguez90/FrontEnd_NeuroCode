import React from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = ({ titulo, cursoId }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/curso/${cursoId}/publicaciones`);
  };

  return (
    <div className="course-card">
      <div
        className="course-image"
        style={{
          backgroundImage: `url(https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjNqemsyYmVhamkzMzB5M2xibmNpM2ozcDFpaGw2dWl2cXZlMDBlbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/lTkEOJr7uiskhJC8oW/giphy.gif)`,
        }}
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