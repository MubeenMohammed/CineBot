import axios from "axios";

export async function getMovies(page = 1) {
  const response = await axios.get(
    `http://localhost:5000/api/v1/movies?sort=-ratingValue&page=${page}`
  );
  console.log(response.data.data.movies);
  return response.data.data.movies;
}
