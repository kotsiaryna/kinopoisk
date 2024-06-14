import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchAllFilms } from '../../store/features/filmsSlice';
import FilmList from './FilmList.tsx/FilmList';
import Pagination from './Pagination/Pagination';

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllFilms({ page: 1, limit: 10 }));
  }, []);

  return (
    <>
      <div>FILMS</div>
      <Pagination />
      <FilmList />
    </>
  );
}

export default Home;
