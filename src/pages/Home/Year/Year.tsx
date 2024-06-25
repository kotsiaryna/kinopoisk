import { ChangeEventHandler, memo } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import styles from './Year.module.scss';

type OptionsListProps = {
  range: [number, number];
};

const OptionsList = ({ range }: OptionsListProps) => {
  const years = range[1] - range[0] + 1;
  const optionsList = new Array(years).fill(range[1]);

  return (
    <>
      <option value="">--</option>
      {optionsList.map((el, i) => (
        <option key={i} value={el - i}>
          {el - i}
        </option>
      ))}
    </>
  );
};

type YearItemProps = {
  label: string;
  value: string;
  onChange: ChangeEventHandler<HTMLSelectElement>;
  range: [number, number];
};

const YearItem = ({ label, value, onChange, range }: YearItemProps) => {
  return (
    <label className={styles.text}>
      {label}
      <select value={value} onChange={onChange} className={styles.select}>
        <OptionsList range={range} />
      </select>
    </label>
  );
};

type Props = {
  years: string;
  changeQuery: SetURLSearchParams;
};

function Year({ years, changeQuery }: Props) {
  console.log('render Year');

  const lastYear = new Date().getFullYear() + 1;
  const firstYear = 1890;

  const currentYears = years.split('-');

  const startYear = currentYears[0];
  const endYear = currentYears[1];

  const setStartYear: ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeQuery((query) => {
      query.set('year', `${e.target.value}-${endYear || lastYear}`);
      return query;
    });
  };

  const setEndYear: ChangeEventHandler<HTMLSelectElement> = (e) => {
    changeQuery((query) => {
      query.set('year', `${startYear || firstYear}-${e.target.value}`);
      return query;
    });
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>Год выпуска</p>
      <YearItem
        label="c "
        value={startYear}
        onChange={setStartYear}
        range={[firstYear, +endYear || lastYear]}
      />
      <YearItem
        label="по"
        value={endYear}
        onChange={setEndYear}
        range={[+startYear || firstYear, lastYear]}
      />
    </div>
  );
}
const MemoYear = memo(Year);
export default MemoYear;
