import { ChangeEventHandler, memo } from 'react';
import { SetURLSearchParams } from 'react-router-dom';
import styles from './Age.module.scss';

type Props = {
  age: string[];
  changeQuery: SetURLSearchParams;
};

function Age({ age, changeQuery }: Props) {
  const ages = ['0', '6', '12', '18'];

  const setAge: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeQuery((query) => {
      if (e.target.checked) {
        query.append('ageRating', e.target.value);
      } else {
        const allRates = query.getAll('ageRating');
        query.delete('ageRating');
        allRates
          .filter((rate) => rate !== e.target.value)
          .forEach((age) => query.append('ageRating', age));
      }

      return query;
    });
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.heading}>Возрастные ограничения</p>
      {ages.map((el) => (
        <label key={el} className={styles.yearLabel}>
          <span className={styles.heading}>{`${el}+`}</span>
          <input
            type="checkbox"
            value={el}
            onChange={setAge}
            checked={age.includes(el)}
            className={styles.input}
          />
        </label>
      ))}
    </div>
  );
}

const MemoAge = memo(Age);

export default MemoAge;
