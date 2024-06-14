import { Link } from 'react-router-dom';
import { Film } from '../../../../types';

function FilmItem({ id, name, description, year, genres, countries }: Film) {
  return (
    <Link to={`/film/${id}`}>
      <h3>{name}</h3>
      <p>{description}</p>
      {year && <p>{`Год: ${year}.  `}</p>}
      {countries && <p>{`Страна: ${countries.map((country) => country.name).join(',')}`}</p>}
      {genres && <p>{`Жанры: ${genres.map((genre) => genre.name).join(',')} `}</p>}
    </Link>
  );
}

export default FilmItem;
