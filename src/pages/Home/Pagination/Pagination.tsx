import { SetURLSearchParams } from 'react-router-dom';
import Button from '../../../components/Button/Button';
import { selectFilmsData } from '../../../store/features/filmsSlice';
import { useAppSelector } from '../../../store/hooks';

type Props = {
  query: URLSearchParams;
  changeQuery: SetURLSearchParams;
};

function Pagination({ query, changeQuery }: Props) {
  const page = query.get('page') || '2';

  const { pages } = useAppSelector(selectFilmsData) || { pages: 1 };

  const goToPage = (n: number) => {
    changeQuery((query) => {
      query.set('page', `${n}`);
      return query;
    });
  };
  return (
    <>
      <div>Выбор страницы</div>
      <div>
        <Button text="<<" onClick={() => goToPage(1)} disabled={page === '1'} />
        <Button text="<" onClick={() => goToPage(+page - 1)} disabled={page === '1'} />
        <div>{page}</div>
        <Button text=">" onClick={() => goToPage(+page + 1)} disabled={+page === pages} />
        <Button text=">>" onClick={() => goToPage(pages)} disabled={+page === pages} />
      </div>
    </>
  );
}

export default Pagination;
