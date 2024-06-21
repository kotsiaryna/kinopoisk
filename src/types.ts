export interface ResponseData<T> {
  docs: T;
  limit: number;
  page: number;
  pages: number;
  total: number;
}
export interface Film {
  id: number;
  name: string;
  description: string;
  year: number;
  genres: { name: string }[];
  countries: { name: string }[];
  poster?: {
    previewUrl: string;
  };
}
export interface FilmsData {
  docs: Film[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}
export type Person = {
  id: number;
  photo: string;
  name: string;
  profession: string;
};

export type Movie = {
  id: number;
  name: string;
  poster: { previewUrl: string };
};
export interface FilmByID extends Film {
  rating: { imdb: number; kp: number };
  persons: Person[];
  similarMovies: Movie[];
  isSeries: boolean;
}

export interface Review {
  id: number;
  movieId: number;
  title: string;
  type: 'Позитивный' | 'Негативный';
  review: string;
  date: string;
  author: string;
}

export interface ReviewData {
  docs: Review[];
  limit: number;
  page: number;
  pages: number;
  total: number;
}

export interface Poster {
  previewUrl: string;
}
type Episode = {
  number: number;
  name: string;
  enName: string;
};
export interface Series {
  number: number;
  episodesCount: number;
  description?: string;
  enDescription?: string;
  airDate?: string;
  episodes: Episode[];
}
