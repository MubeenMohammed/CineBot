import axios from "axios";

export async function getMovies() {
  const respone = await axios.get("http://localhost:5000/api/v1/movies/");
  return respone.data;
}
