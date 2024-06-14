import { selectFilms } from '../../../store/features/filmsSlice';
import { useAppSelector } from '../../../store/hooks';
import FilmItem from './FilmItem/FilmItem';

function FilmList() {
  const films = useAppSelector(selectFilms);
  console.log(films);
  return <div>{films && films.map((film) => <FilmItem key={film.id} {...film} />)}</div>;
}

export default FilmList;
