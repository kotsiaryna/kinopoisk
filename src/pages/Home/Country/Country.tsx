import { ChangeEventHandler, memo, useEffect, useState } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import useDebounce from '../../../hooks/useDebounce';
import styles from './Country.module.scss';

type Props = {
  country: string;
  changeQuery: SetURLSearchParams;
};

function Country({ country, changeQuery }: Props) {
  const [value, setValue] = useState(country);
  const debouncedValue = useDebounce(value);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    changeQuery((query) => {
      if (debouncedValue) {
        query.set('country', debouncedValue || '');
      } else {
        query.delete('country');
      }

      return query;
    });
  }, [debouncedValue]);
  return (
    <label className={styles.label}>
      <p className={styles.heading}>Страна</p>
      <input type="search" value={value} onChange={handleChange} className={styles.input} />
    </label>
  );
}
const MemoCountry = memo(Country);
export default MemoCountry;
