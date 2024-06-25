import { useCallback, useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchAllFilms } from '../../store/features/filmsSlice';
import FilmList from './FilmList.tsx/FilmList';
import Pagination from './Pagination/Pagination';
import LimitPerPage from './LimitPerPage/LimitPerPage';
import { useSearchParams } from 'react-router-dom';
import Search from './Search/Search';
import Year from './Year/Year';
import Age from './Age/Age';
import Country from './Country/Country';

import styles from './Home.module.scss';

function Home() {
  console.log('render Home');
  const [query, setQuery] = useSearchParams();

  const page = query.get('page') || '1';
  const limit = query.get('limit') || '10';
  const search = query.get('search') || '';
  const year = query.get('year') || '-';
  const ageRating = query.getAll('ageRating') || [];
  const country = query.get('country') || '';

  const dispatch = useAppDispatch();
  const changeQuery = useCallback(setQuery, []);

  useEffect(() => {
    dispatch(
      fetchAllFilms({
        page,
        limit,
        search,
        year,
        ageRating,
        country,
      }),
    );
    return () => {
      localStorage.setItem('q', `?${query.toString()}`);
    };
  }, [page, limit, search, year, ageRating, country]);

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>Найди свой фильм </h1>

      <Search search={search} changeQuery={changeQuery} />
      <div className={styles.filters}>
        <Country country={country} changeQuery={changeQuery} />
        <Year years={year} changeQuery={changeQuery} />
        <Age age={ageRating} changeQuery={changeQuery} />
      </div>
      <div className={styles.pages}>
        <Pagination query={query} changeQuery={setQuery} />
        <LimitPerPage limit={limit} changeQuery={changeQuery} />
      </div>

      <FilmList />
    </main>
  );
}

export default Home;
