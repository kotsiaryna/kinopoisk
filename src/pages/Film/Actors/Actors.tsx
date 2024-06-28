import { useState } from 'react';
import { Person } from '../../../types';
import { Pages } from '../Pages/Pages';
import { withHeading, withNotFound } from '../../../components/HOC';
import styles from './Actors.module.scss';

const Actor = ({ name, photo }: Person) => {
  return (
    <div className={styles.actor}>
      <img src={photo} className={styles.img} />
      <p className={styles.name}>{name}</p>
    </div>
  );
};

type Props = {
  persons: Person[];
};

const Actors = ({ persons }: Props) => {
  const width = window.innerWidth;
  const limit = width > 1200 ? 7 : width > 900 ? 5 : width > 500 ? 3 : 1;
  const [actorsToShow, setActorsToShow] = useState(persons.slice(0, limit));

  const onPageClick = (page: number) => {
    const start = limit * (page - 1);
    const end = limit * page;
    setActorsToShow(persons.slice(start, end));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.actors}>
        {actorsToShow.map((actor, i) => (
          <Actor key={i} {...actor} />
        ))}
      </div>
      {persons.length > limit && (
        <Pages n={limit} length={persons.length} onButtonClick={onPageClick} />
      )}
    </div>
  );
};

const ActorsWithWrapper = withHeading(withNotFound(Actors));
export default ActorsWithWrapper;
