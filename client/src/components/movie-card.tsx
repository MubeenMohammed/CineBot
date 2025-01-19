import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";
import Rating from "./ui/rating";
import Movie from "@/types/movies";

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Card
      className="max-w-[18rem] hover:cursor-pointer hover:bg-gray-100 transition-all duration-200"
      onClick={() => window.open(movie.url)}
    >
      <CardHeader>
        <img
          className="rounded-t-lg size-[17rem] object-contain"
          src={movie.image}
          alt={movie.title}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap mb-3 ">
          {movie.genre.split(", ").map((genre) => (
            <Badge
              key={genre}
              className="mr-1 mb-1"
            >
              {genre}
            </Badge>
          ))}
          <Badge>{movie.duration}</Badge>
        </div>
        <CardTitle className="text-center text-xl mb-1">
          {movie.title}
        </CardTitle>
        <CardDescription className="mb-auto">
          {movie.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap">
        <Rating
          ratingValue={movie.ratingValue.toFixed(1)}
          ratingCount={movie.ratingCount}
        />
      </CardFooter>
    </Card>
  );
}
