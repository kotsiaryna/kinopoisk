import { ChangeEventHandler, memo, useEffect, useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import useDebounce from '../../../hooks/useDebounce';

type Props = {
  search: string;
  changeQuery: SetURLSearchParams;
};

function Search({ search, changeQuery }: Props) {
  const [value, setValue] = useState(search);
  const debouncedValue = useDebounce(value, 1000);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    changeQuery((query) => {
      if (debouncedValue) {
        query.set('search', debouncedValue || '');
      } else {
        query.delete('search');
      }

      return query;
    });
  }, [debouncedValue]);

  return (
    <label>
      Search
      <input type="search" value={value} onChange={handleChange} />
    </label>
  );
}

const MemoSearch = memo(Search);

export default MemoSearch;
