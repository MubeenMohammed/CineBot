import MovieCard from "./movie-card";
import DasboardPagination from "./pagination";
import { useSelector } from "react-redux";
import { RootState } from "@/state/store";

export default function MainPane() {
  const movies = useSelector((state: RootState) => state.movie.movies);

  return (
    <div className="m-12">
      <div className="flex gap-4 mb-5 flex-wrap">
        {movies.map((movie) => {
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
