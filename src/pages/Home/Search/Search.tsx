import { ChangeEventHandler, memo } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

type Props = {
  search: string;
  changeQuery: SetURLSearchParams;
};

function Search({ search, changeQuery }: Props) {
  console.log('render Search');

  const setQuery: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeQuery((query) => {
      query.set('search', e.target.value);
      return query;
    });
  };
  return (
    <label>
      Search
      <input value={search} onChange={setQuery} />
    </label>
  );
}

const MemoSearch = memo(Search);

export default MemoSearch;
