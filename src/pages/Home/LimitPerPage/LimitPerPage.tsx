import { ChangeEventHandler } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

type Props = {
  query: URLSearchParams;
  changeQuery: SetURLSearchParams;
};

function LimitPerPage({ query, changeQuery }: Props) {
  const limit = query.get('limit') || 10;

  const setQuery: ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeQuery((query) => {
      query.set('limit', e.target.value);
      return query;
    });
  };

  return (
    <label>
      Количество фильмов на странице
      <select value={limit} onChange={setQuery}>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="40">40</option>
      </select>
    </label>
  );
}

export default LimitPerPage;
