interface Movie {
  id: number;
  title: string;
  genre: string;
  ratingValue: number;
  reviews?: string[];
  lastUpdated: Date;
  url: string;
  image: string;
  ratingCount: number;
  description: string;
  duration: string;
}

export default Movie;
