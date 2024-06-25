import { selectFilmsData } from '../../../store/features/filmsSlice';
import { useAppSelector } from '../../../store/hooks';
import FilmItem from './FilmItem/FilmItem';
import styles from './FilmList.module.scss';

function FilmList() {
  const films = useAppSelector(selectFilmsData)?.docs;
  return (
    <div className={styles.films}>
      {films && films.map((film) => <FilmItem key={film.id} {...film} />)}
    </div>
  );
}

export default FilmList;
