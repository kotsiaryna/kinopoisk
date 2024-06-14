import Button from '../../../components/Button/Button';
import { fetchAllFilms, selectFilmsData } from '../../../store/features/filmsSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

function Pagination() {
  const dispatch = useAppDispatch();

  const { pages, page } = useAppSelector(selectFilmsData) || { page: 1, pages: 1 };

  const goToPage = (n: number) => {
    dispatch(fetchAllFilms({ page: n, limit: 10 }));
  };
  return (
    <>
      <div>Выбор страницы</div>
      <div>
        <Button text="<<" onClick={() => goToPage(1)} disabled={page === 1} />
        <Button text="<" onClick={() => goToPage(page - 1)} disabled={page === 1} />
        <div>{page}</div>
        <Button text=">" onClick={() => goToPage(page + 1)} disabled={page === pages} />
        <Button text=">>" onClick={() => goToPage(pages)} disabled={page === pages} />
      </div>
    </>
  );
}

export default Pagination;
