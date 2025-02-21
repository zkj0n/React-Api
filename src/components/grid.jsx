import Card from "./card"; 

export default function Grid({ movies }) {
  return (
    <div className="container mt-4">
      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie, index) => (
            <Card
              key={index}
              title={movie.Title}
              anio={movie.Year}
              image={movie.Poster}
            />
          ))
        ) : (
          <p>No se encontraron resultados.</p> 
        )}
      </div>
    </div>
  );
}
