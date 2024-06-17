import { ChangeEventHandler, memo } from 'react';
import { SetURLSearchParams } from 'react-router-dom';

type Props = {
  country: string;
  changeQuery: SetURLSearchParams;
};

function Country({ country, changeQuery }: Props) {
  const setCountry: ChangeEventHandler<HTMLInputElement> = (e) => {
    changeQuery((query) => {
      query.set('country', e.target.value);
      return query;
    });
  };
  return (
    <label>
      Страна
      <input type="text" value={country} onChange={setCountry} />
    </label>
  );
}
const MemoCountry = memo(Country);
export default MemoCountry;
