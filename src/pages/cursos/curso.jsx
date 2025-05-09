import React from "react";
import { getCursos } from "../../services/api.jsx";
import CourseCard from "../../components/cursos/CourseCard";
import Navbar from "../navbar/Navbar"; 
import "./curso.css";

export default class Cursos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cursos: [],
      filtro: ""
    };
  }

  async componentDidMount() {
    const data = await getCursos();
    this.setState({ cursos: data });

    window.addEventListener("buscar-curso", (e) => {
      this.setState({ filtro: e.detail });
    });
  }

  render() {
    const { cursos, filtro } = this.state;

    const cursosFiltrados = cursos.filter((curso) =>
      curso.nombre.toLowerCase().includes(filtro.toLowerCase())
    );

    return (
      <>
        <Navbar />
        <div className="curso-container">
          <h1 className="curso-title">Vista general de curso</h1>
          <div className="curso-grid">
            {cursosFiltrados.map((curso) => (
              <CourseCard key={curso.uid} titulo={curso.nombre} cursoId={curso.uid} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
