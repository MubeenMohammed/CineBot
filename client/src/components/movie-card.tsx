import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "./ui/badge";

export default function MovieCard({
  card,
}: {
  card: {
    title: string;
    description: string;
    duration: string;
    ratingValue: number;
    url: string;
    image: string;
    genre: string[];
    ratingCount: number;
  };
}) {
  return (
    <Card
      className="max-w-[18rem] hover:cursor-pointer"
      onClick={() => window.open(card.url)}
    >
      <CardHeader>
        <img
          className="rounded-t-lg size-[17rem] object-contain"
          src={card.image}
          alt={card.title}
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap mb-3">
          {card.genre.map((genre) => (
            <Badge
              key={genre}
              className="mr-1"
            >
              {genre}
            </Badge>
          ))}
          <Badge variant={"secondary"}>{card.duration}</Badge>
        </div>
        <CardTitle className="text-center text-xl mb-1">{card.title}</CardTitle>
        <CardDescription className="">{card.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex flex-wrap"></CardFooter>
    </Card>
  );
}
