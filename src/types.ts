export interface Film {
  id: number;
  name: string;
  description: string;
  year: number;
  genres: { name: string }[];
  countries: { name: string }[];
}
