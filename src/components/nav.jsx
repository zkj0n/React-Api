import { useState } from "react";
import { getMovies } from "../js/api";
import Grid from "./grid";

export default function Nav() {
  const [titulo, setTitulo] = useState("");
  const [anio, setAnio] = useState("");
  const [tipo, setTipo] = useState("all");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await getMovies(titulo, anio, tipo);
    setMovies(result && result.length > 0 ? result : []);
  };

  return (
    <nav className="container mt-4">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-12 col-md-4">
          <input
            className="form-control shadow fs-4"
            type="search"
            placeholder="titulo"
            aria-label="search"
            id="search"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-4">
          <input
            className="form-control shadow fs-4"
            type="number"
            placeholder="año"
            aria-label="anio"
            id="anio"
            value={anio}
            onChange={(e) => setAnio(e.target.value)}
          />
        </div>
        <div className="col-12 col-md-2">
          <select
            name="type"
            id="type"
            className="form-select shadow fs-4"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
          >
            <option value="all">todos</option>
            <option value="movie">película</option>
            <option value="series">serie</option>
            <option value="episode">episodio</option>
          </select>
        </div>
        <div className="col-12 col-md-2">
          <button className="btn btn-primary fs-4 w-100 shadow" type="submit" id="buscar">
            Buscar
          </button>
        </div>
      </form>
      <Grid movies={movies} />
    </nav>
  );
}
