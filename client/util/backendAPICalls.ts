import axios from "axios";

export async function getMovies(page = 1) {
  const response = await axios.get(
    `https://cinebot-backend-server.onrender.com/api/v1/movies?sort=-ratingValue&page=${page}`
  );
  console.log(response.data.data.movies);
  return response.data.data.movies;
}
