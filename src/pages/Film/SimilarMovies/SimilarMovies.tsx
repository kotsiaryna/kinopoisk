import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Movie } from '../../../types';
import { Link } from 'react-router-dom';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

type Props = {
  movies: Movie[];
};

function SimilarMovies({ movies }: Props) {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={false}
      infinite={true}
      autoPlay={false}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={['tablet', 'mobile']}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {movies.map((movie, i) => (
        <Link to={`/film/${movie.id}`} key={i}>
          <img src={movie.poster.previewUrl} width="auto" height="100px" /> <p>{movie.name}</p>{' '}
        </Link>
      ))}
    </Carousel>
  );
}

export default SimilarMovies;
