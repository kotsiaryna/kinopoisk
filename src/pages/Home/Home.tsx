import { useEffect } from 'react';
import { useAppDispatch} from '../../store/hooks';
import { fetchAllFilms } from '../../store/features/filmsSlice';
import FilmList from './FilmList.tsx/FilmList';
import Pagination from './Pagination/Pagination';
import LimitPerPage from './LimitPerPage/LimitPerPage';
import { useSearchParams } from 'react-router-dom';


function Home() {
  const [query, setQuery] = useSearchParams();
  const currentPage = query.get('page') || '1';
  const currentLimit = query.get('limit') || '10';

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAllFilms({ page: currentPage, limit: currentLimit }));
  }, [currentPage, currentLimit]);

  return (
    <>
      <div>FILMS</div>
      <Pagination />
      <LimitPerPage query={query} changeQuery={setQuery} />
      <FilmList />
    </>
  );
}

export default Home;
