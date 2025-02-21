const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=6bb504af";

export const getMovies = async (titulo, anio, tipo) => {
  let url = `${API_URL}&s=${titulo}&r=json`; 


  if (anio) {
    url += `&y=${anio}`;
  }

  if (tipo && tipo !== "all") {
    url += `&type=${tipo}`;
  }

  console.log("URL generada:", url); 

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("Respuesta de la API:", data); 

    if (data.Response === "True") {
      return data.Search;
    } else {
      console.log("No se encontraron resultados:", data.Error);
      throw new Error(data.Error);
    }
  } catch (error) {
    console.error("Error al obtener las películas:", error);
    return [];
  }
};
