import { useLoaderData } from 'react-router-dom';
import { FilmByID } from '../../types';
import Actors from './Actors/Actors';
import NotFound from './NotFound/NotFound';
import ReviewList from './Review/ReviewList';
import SimilarMovies from './SimilarMovies/SimilarMovies';
import Posters from './Posters/Posters';

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
        <h4>Постеры</h4>
        <Posters filmId={id} />
      </div>
      <div>
        <h4>Отзывы</h4>
        <ReviewList filmID={id} />
      </div>
      <div>
        <h4>Похожие фильмы</h4>
        {similarMovies && <SimilarMovies movies={similarMovies} />}
      </div>
    </section>
  );
}

export default Film;
