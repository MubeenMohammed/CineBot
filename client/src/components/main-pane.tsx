import MovieCard from "./movie-card";
import { DasboardPagination } from "./pagination";
import Movie from "@/types/movies";

const SampleMovieData = {
  movies: [
    {
      id: 1,
      lastUpdated: new Date(),
      title: "The Shawshank Redemption",
      description:
        "A banker convicted of uxoricide forms a friendship over a quarter century with a hardened convict, while maintaining his innocence and trying to remain hopeful through simple compassion.",
      duration: "2h 22min",
      ratingValue: 9.3,
      url: "https://www.imdb.com/title/tt0111161/",
      image:
        "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      genre: "Drama",
      ratingCount: 2993410,
    },
    {
      id: 2,
      lastUpdated: new Date(),
      title: "The Godfather Part II",
      description:
        "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      duration: "3h 22min",
      ratingValue: 9,
      url: "https://www.imdb.com/title/tt0068646/",
      image:
        "https://m.media-amazon.com/images/M/MV5BNzcwZWUzOWItMjcyYi00OWUwLThmZjUtY2M0ZjhjMzJiNmM4XkEyXkFqcGc@._V1_.jpg",
      genre: "Crime, Drama",
      ratingCount: 1409017,
    },
    {
      id: 3,
      lastUpdated: new Date(),
      title: "12 Angry Men",
      description:
        "The jury in a New York City murder trial is frustrated by a single member whose skeptical caution forces them to more carefully consider the evidence before jumping to a hasty verdict.",
      duration: "1h 36min",
      ratingValue: 9,
      url: "https://www.imdb.com/title/tt0050083/",
      image:
        "https://m.media-amazon.com/images/M/MV5BYjE4NzdmOTYtYjc5Yi00YzBiLWEzNDEtNTgxZGQ2MWVkN2NiXkEyXkFqcGc@._V1_.jpg",
      genre: "Crime, Drama",
      ratingCount: 906255,
    },
  ],
};

export default function MainPane() {
  const movieData: Movie[] = JSON.parse(
    sessionStorage.getItem("movies") || `${SampleMovieData}`
  ).movies;

  return (
    <div className="m-12">
      <div className="flex gap-4 mb-5 flex-wrap">
        {movieData.map((movie) => {
          return (
            <MovieCard
              key={movie.title}
              movie={movie}
            />
          );
        })}
      </div>
      <DasboardPagination />
    </div>
  );
}
