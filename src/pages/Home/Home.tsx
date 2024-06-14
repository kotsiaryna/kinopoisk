import { useEffect } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { fetchAllFilms } from '../../store/features/filmsSlice';
import FilmList from './FilmList.tsx/FilmList';

function Home() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAllFilms());
  }, []);
  return (
    <>
      <div>FILMS</div>
      <FilmList />
    </>
  );
}

export default Home;
