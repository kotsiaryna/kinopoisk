import { ChangeEventHandler, memo } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

type Props = {
  limit: string;
  changeQuery: SetURLSearchParams;
};

function LimitPerPage({ limit, changeQuery }: Props) {
  console.log('render Limits');

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

const MemoLimits = memo(LimitPerPage);
export default MemoLimits;
