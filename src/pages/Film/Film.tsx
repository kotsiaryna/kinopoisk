import { Link, useLoaderData } from 'react-router-dom';
import { FilmByID } from '../../types';
import Actors from './Actors/Actors';
import ReviewList from './Review/ReviewList';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Posters from './Posters/Posters';
import Seasons from './Seasons/Seasons';

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
    <section>
      <Link to={`/${query}`}>На главную</Link>
      <h2>{name}</h2>
      {poster && poster.previewUrl && <img src={poster.previewUrl} width="200" height="auto" />}
      <div>{description}</div>
      <div>{`Рейтинг: IMBD ${imdb}, KP ${kp}`}</div>
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
