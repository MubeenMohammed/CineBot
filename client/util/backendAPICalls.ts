import axios from "axios";

export async function getMovies(page = 1) {
  const respone = await axios.get(
    `http://localhost:5000/api/v1/movies?sort=-ratingValue&page=${page}`
  );
  return respone.data;
}
