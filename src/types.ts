export interface Film {
  id: number;
  name: string;
  description: string;
  year: number;
  genres: { name: string }[];
  countries: { name: string }[];
}
export interface FilmsData {
  docs: Film[],
  limit: number,
  page: number,
  pages: number,
  total: number
}