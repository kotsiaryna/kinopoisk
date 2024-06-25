import { useState } from 'react';
import { Person } from '../../../types';
import { Pages } from '../Pages/Pages';
import { withHeading, withNotFound } from '../../../components/HOC';

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
    <>
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
        {actorsToShow.map((actor, i) => (
          <div key={i}>
            <img src={actor.photo} width="100" height="auto" />
            <p>{actor.name}</p>
          </div>
        ))}
      </div>
      {persons.length > limit && (
        <Pages n={limit} length={persons.length} onButtonClick={onPageClick} />
      )}
    </>
  );
};

const ActorsWithWrapper = withHeading(withNotFound(Actors));
export default ActorsWithWrapper;
