import { Link } from 'react-router-dom';
import { Film } from '../../../../types';
import styles from './FilmItem.module.scss';

function FilmItem({ id, name, description, year, genres, countries, poster }: Film) {
  return (
    <Link to={`/film/${id}`} className={styles.wrapper}>
      <img src={poster.previewUrl} alt="poster" className={styles.img} />
      <div className={styles.info}>
        <h2 className={styles.heading}>{name}</h2>
        <p className={styles.text}>{description}</p>
        {year && (
          <p className={styles.text}>
            <span className={styles.boldText}>Год: </span> {year}
          </p>
        )}
        {countries && (
          <p className={styles.text}>
            <span className={styles.boldText}>Страна: </span>
            {countries.map((country) => country.name).join(',')}
          </p>
        )}
        {genres && (
          <p className={styles.text}>
            <span className={styles.boldText}>Жанры: </span>
            {genres.map((genre) => genre.name).join(',')}
          </p>
        )}
      </div>
    </Link>
  );
}

export default FilmItem;
