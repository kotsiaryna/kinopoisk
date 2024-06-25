import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';
import Loader from '../../../components/Loader/Loader';
import { selectFilms } from '../../../store/features/filmsSlice';
import { useAppSelector } from '../../../store/hooks';
import FilmItem from './FilmItem/FilmItem';
import styles from './FilmList.module.scss';

function FilmList() {
  const { data, errorMessage, loading } = useAppSelector(selectFilms);
  return (
    <div className={styles.films}>
      {loading && <Loader />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      {data && data.docs.map((film) => <FilmItem key={film.id} {...film} />)}
    </div>
  );
}

export default FilmList;
