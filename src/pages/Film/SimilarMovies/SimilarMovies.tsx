import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Movie } from '../../../types';
import { Link } from 'react-router-dom';
import { withHeading, withNotFound } from '../../../components/HOC';
import styles from './SimilarMovies.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  wideTablet: {
    breakpoint: { max: 1024, min: 800 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 500 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 500, min: 0 },
    items: 1,
  },
};

type Props = {
  movies: Movie[];
};

function SimilarMovies({ movies }: Props) {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass={styles.dots}
      itemClass="carousel-item-padding-40-px"
    >
      {movies.map((movie, i) => (
        <Link to={`/film/${movie.id}`} key={i} className={styles.card}>
          <img src={movie.poster.previewUrl} className={styles.img} />
          <p className={styles.name}>{movie.name}</p>
        </Link>
      ))}
    </Carousel>
  );
}
const SimilarMoviesWithWrapper = withHeading(withNotFound(SimilarMovies));
export default SimilarMoviesWithWrapper;
