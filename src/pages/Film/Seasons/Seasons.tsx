import { useEffect, useRef, useState } from 'react';
import { seasonsByFilmId } from '../../../services/api';
import { Series } from '../../../types';
import Season from './Season/Season';
import { Pages } from '../Pages/Pages';
import { withHeading, withNotFound } from '../../../components/HOC';
import styles from './Seasons.module.scss';

type Props = {
  filmId: number;
};
function Seasons({ filmId }: Props) {
  const width = window.innerWidth;
  const limit = width > 1200 ? 3 : width > 800 ? 2 : 1;

  const allSeasons = useRef<Series[]>();
  const [seasonsToShow, setSeasonsToShow] = useState<Series[] | null>();

  const onPageClick = (page: number) => {
    const start = limit * (page - 1);
    const end = limit * page;
    if (allSeasons.current) setSeasonsToShow(allSeasons.current.slice(start, end));
  };

  useEffect(() => {
    seasonsByFilmId(filmId)
      .then((data) => {
        allSeasons.current = data?.docs.filter((season) => season.number).reverse();
        if (allSeasons.current) setSeasonsToShow(allSeasons.current.slice(0, limit));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className={styles.seasons}>
        {seasonsToShow &&
          seasonsToShow.map((season, i) => season.number > 0 && <Season key={i} {...season} />)}
      </div>

      {allSeasons.current && allSeasons.current.length > limit && (
        <Pages n={limit} length={allSeasons.current.length || limit} onButtonClick={onPageClick} />
      )}
    </>
  );
}
const SeasonsWithWrapper = withHeading(withNotFound(Seasons));
export default SeasonsWithWrapper;
