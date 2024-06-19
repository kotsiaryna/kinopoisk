import { useState } from 'react';
import { Person } from '../../../types';

type Props = {
  persons: Person[];
};
type PagesProps = {
  n: number;
  length: number;
  onButtonClick: (n: number) => void;
};
const Pages = ({ n, length, onButtonClick }: PagesProps) => {
  const [activePage, setActivePage] = useState(1);

  const pagesNumber = Math.ceil(length / n);
  const buttons = new Array(pagesNumber).fill(0);

  return (
    <div>
      {buttons.map((_, i) => (
        <button
          key={i}
          onClick={(e) => {
            const currPage = parseInt((e.target as HTMLButtonElement).textContent || '');
            onButtonClick(currPage);
            setActivePage(currPage);
          }}
          disabled={activePage === i + 1}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

const Actors = ({ persons }: Props) => {
  const limit = 5;
  const [actorsToShow, setActorsToShow] = useState(persons.slice(0, limit));

  const onPageClick = (page: number) => {
    // const page = +(e.target as HTMLButtonElement).value;
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

export default Actors;
