import { Link, useLoaderData } from 'react-router-dom';
import { FilmByID } from '../../types';
import Actors from './Actors/Actors';
import NotFound from './NotFound/NotFound';

function Film() {
  const film = useLoaderData() as FilmByID;
  console.log(film);
  const {
    name,
    description,
    poster,
    rating: { imdb, kp },
    persons,
    similarMovies,
  } = film;

  const actors = persons.filter((person) => person.profession === 'актеры');

  return (
    <section>
      <h2>{name}</h2>
      {poster && poster.previewUrl && <img src={poster.previewUrl} width="200" height="auto" />}
      <div>{description}</div>
      <div>{`Рейтинг: IMBD ${imdb}, KP ${kp}`}</div>
      <div>
        <h4>Актеры</h4>
        {actors.length ? <Actors persons={persons} /> : <NotFound name="актерах" />}
      </div>
      <div>
        <h4>Похожие фильмы</h4>
        {similarMovies ? (
          similarMovies.map((movie, i) => (
            <Link key={i} to={`/film/${movie.id}`}>
              {movie.name}
            </Link>
          ))
        ) : (
          <p>Нет информации о фильмах</p>
        )}
      </div>
    </section>
  );
}

export default Film;
