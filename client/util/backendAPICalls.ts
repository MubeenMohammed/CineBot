import axios from "axios";

export async function getMovies(page = 1) {
  const respone = await axios.get(
    `http://18.191.22.173:5000/api/v1/movies?sort=-ratingValue&page=${page}`
  );
  return respone.data;
}
