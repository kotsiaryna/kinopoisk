import { Link, useLoaderData } from 'react-router-dom';
import { FilmByID } from '../../types';
import Actors from './Actors/Actors';
import ReviewList from './ReviewList/ReviewList';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Posters from './Posters/Posters';
import Seasons from './Seasons/Seasons';

import styles from './Film.module.scss';

function Film() {
  const film = useLoaderData() as FilmByID;
  console.log(film);
  const {
    id,
    name,
    description,
    poster,
    rating: { imdb, kp },
    persons,
    similarMovies,
    isSeries,
  } = film;

  const actors = persons.filter((person) => person.profession === 'актеры');

  const query = localStorage.getItem('q') || '';

  return (
    <section className={styles.wrapper}>
      <Link to={`/${query}`} className={styles.link}>
        На главную
      </Link>
      <h2 className={styles.heading}>{name}</h2>
      {poster && poster.previewUrl && <img src={poster.previewUrl} className={styles.img} />}
      <div className={styles.text}>{description}</div>
      <div className={styles.rate}>
        <h4 className={styles.h4}>Рейтинг</h4>
        <p>
          IMBD:
          {imdb} KP: {kp}
        </p>
      </div>
      <Actors persons={persons} heading="Актеры" notFound={actors.length === 0} name="актерах" />
      <Seasons filmId={id} heading="Сезоны и серии" notFound={!isSeries} name="сезонах" />
      <Posters filmId={id} heading="Постеры" />
      <ReviewList filmID={id} heading="Отзывы" />
      <SimilarMovies
        movies={similarMovies}
        heading="Похожие фильмы"
        notFound={!similarMovies || similarMovies.length === 0}
        name="фильмах"
      />
      ?
    </section>
  );
}

export default Film;
