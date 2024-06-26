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
  const limit = 5;
  const [actorsToShow, setActorsToShow] = useState(persons.slice(0, limit));

  const onPageClick = (page: number) => {
    const start = 5 * (page - 1);
    const end = 5 * page;
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
