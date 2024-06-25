import { useEffect, useState } from 'react';
import { seasonsByFilmId } from '../../../services/api';
import { ResponseData, Series } from '../../../types';
import Season from './Season';
import { Pages } from '../Pages/Pages';
import { withHeading, withNotFound } from '../../../components/HOC';

type Props = {
  filmId: number;
};
function Seasons({ filmId }: Props) {
  const limit = 1;
  const [seasons, setSeasons] = useState<ResponseData<Series[]> | null>();
  const [page, setPage] = useState(1);

  const onPageClick = (n: number) => {
    setPage(n);
    seasonsByFilmId(filmId, page)
      .then((data) => setSeasons(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    seasonsByFilmId(filmId, page)
      .then((data) => setSeasons(data))
      .catch((err) => console.log(err));
  }, [filmId, page]);
  console.log(seasons);

  return (
    <>
      {seasons && seasons.docs.map((season, i) => <Season key={i} {...season} />)}
      {seasons && seasons.pages > 1 && (
        <Pages n={limit} length={seasons?.total || limit} onButtonClick={onPageClick} />
      )}
    </>
  );
}
const SeasonsWithWrapper = withHeading(withNotFound(Seasons));
export default SeasonsWithWrapper;
